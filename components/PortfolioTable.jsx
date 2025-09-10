export default function PortfolioTable(){
  const rows = [
    {amt:50, price:35, value:0},
    {amt:30, price:50, value:0},
    {amt:30, price:50, value:0},
    {amt:50, price:0,  value:0},
    {amt:10, price:0,  value:0},
  ];

  return (
    <>
      <table className="table">
        <thead><tr><th>Portfolio</th><th>Amt</th><th>Price</th><th>Value</th></tr></thead>
        <tbody>
          {rows.map((r,i)=>(
            <tr key={i}><td>Amt</td><td>{r.amt}</td><td>{r.price}</td><td>{r.value}</td></tr>
          ))}
        </tbody>
      </table>

      <div style={{display:"grid", gap:6, marginTop:6}}>
        <div className="key">Total position <b style={{color:"#fff"}}>50</b></div>
        <div className="key">Collateral <b style={{color:"#fff"}}>50.0</b></div>
        <div className="key">Portfolio return <b className="kpi">21624.3%</b></div>
        <div className="key">Portfolio winrate <b style={{color:"#fff"}}>15.2%</b></div>
      </div>

      <button className="tradeBtn" onClick={()=>alert("Trade clicked")}>Trade</button>
    </>
  );
}
