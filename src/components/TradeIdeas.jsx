const ideas = [
  {title:"120tc straddle", apy:"+55%"},
  {title:"Long BTC + Call protect", apr:"159.3%"},
  {title:"Short ETH + Call protect", apy:"+10%"},
  {title:"Buy strangle", apy:"+10%"},
];

export default function TradeIdeas(){
  return (
    <div className="cards">
      {ideas.map((x,i)=>(
        <button key={i} className="card" onClick={()=>alert(`Open idea: ${x.title}`)}>
          <div className="title">{x.title}</div>
          {x.apy && <div className="apy">APY {x.apy}</div>}
          {x.apr && <div className="apy">APR {x.apr}</div>}
        </button>
      ))}
    </div>
  );
}
