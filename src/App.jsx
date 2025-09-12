import { useState } from "react";
import Tabs from "./components/Tabs";
import MarketOutlook from "./components/MarketOutlook";
import TradeIdeas from "./components/TradeIdeas";
import Optionverse from "./components/Optionverse";
import PortfolioTable from "./components/PortfolioTable";
import ProfitAndLossChart from "./components/ProfitAndLossChart";
import PortfolioReturnsChart from "./components/PortfolioReturnsChart";

export default function App(){
  const [active, setActive] = useState("Research"); // активная вкладка

  return (
    <div className="app">
      <header className="header">
        <div className="tabs">
          <Tabs active={active} onChange={setActive}
            items={["Trading","Research","Learning","Portfolio Management"]} />
        </div>
      </header>

      {active === "Research" ? (
        <div className="screen">
          <div className="grid">
            <aside className="panel">
              <div className="hd"><h3>Market Outlook</h3></div>
              <div className="bd">
                <MarketOutlook />
                <div style={{height:16}} />
                <div className="panel" style={{background:"transparent", border:"0", boxShadow:"none"}}>
                  <div className="hd" style={{borderBottom:"1px solid var(--line)"}}><h3>Trade Ideas</h3></div>
                  <div className="bd"><TradeIdeas /></div>
                </div>
              </div>
            </aside>

            <main className="panel" style={{padding:12}}>
              <div className="optionverse">
                <div className="scatterWrap">
                  <div className="scatterHead">
                    <span className="badge key">BTC/USDT</span>
                    <span className="badge key">9SEP25</span>
                    <span className="key">APR:&nbsp;<span className="kpi">106.8%</span></span>
                    <span className="key">Winrate:&nbsp;<span className="kpi">16.1%</span></span>
                  </div>
                  <Optionverse />
                </div>

                <div className="portBox">
                  <PortfolioTable />
                </div>
              </div>
            </main>
          </div>

          <div className="footerCharts">
            <div className="panel chart">
              <div className="hd" style={{borderBottom:"1px solid var(--line)"}}><h3>Profit and loss</h3></div>
              <div className="bd"><ProfitAndLossChart /></div>
            </div>
            <div className="panel chart">
              <div className="hd" style={{borderBottom:"1px solid var(--line)"}}><h3>Portfolio historical returns</h3></div>
              <div className="bd"><PortfolioReturnsChart /></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="screen">
          <div className="panel"><div className="bd">Экран «{active}» пока пуст — каркас готов.</div></div>
        </div>
      )}
    </div>
  );
}
