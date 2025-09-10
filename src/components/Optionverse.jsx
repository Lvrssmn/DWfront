// простой SVG-Scatter с треугольниками (яркими на 2 тона)
const teal = "#5ad0c6";
const red  = "#ff6b7a";

const data = {
  buyCall:  [ [20,110],[35,80],[60,20] ],
  buyPut:   [ [25,140],[45,90],[55,60] ],
  sellCall: [ [70,-40],[85,-120],[95,-220] ],
  sellPut:  [ [65,-20],[80,-60],[98,-180] ],
};

function Tri({x,y,dir,color}){
  const s=8;
  return dir==="up"
    ? <polygon points={`${x},${y-s} ${x-s},${y+s} ${x+s},${y+s}`} fill={color} />
    : <polygon points={`${x},${y+s} ${x-s},${y-s} ${x+s},${y-s}`} fill={color} />;
}

export default function Optionverse(){
  const W=640, H=320, padL=40, padB=30;
  const minX=0, maxX=100, minY=-400, maxY=400;
  const sx = v => padL + (v-minX)/(maxX-minX)*(W-padL-10);
  const sy = v => (H-padB) - (v-minY)/(maxY-minY)*(H-padB-10);

  return (
    <svg className="svg" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Optionverse Scatter">
      <line x1={padL} y1={10} x2={padL} y2={H-padB} stroke="#2a3346"/><line x1={padL} y1={H-padB} x2={W-10} y2={H-padB} stroke="#2a3346"/>
      <line x1={padL} y1={sy(0)} x2={W-10} y2={sy(0)} stroke="#3b4660"/>
      {data.buyCall.map(([x,y],i)=><Tri key={"bc"+i} x={sx(x)} y={sy(y)} dir="up" color={teal}/>)}
      {data.buyPut.map(([x,y],i)=><Tri key={"bp"+i} x={sx(x)} y={sy(y)} dir="up" color={teal}/>)}
      {data.sellCall.map(([x,y],i)=><Tri key={"sc"+i} x={sx(x)} y={sy(y)} dir="down" color={red}/>)}
      {data.sellPut.map(([x,y],i)=><Tri key={"sp"+i} x={sx(x)} y={sy(y)} dir="down" color={red}/>)}
      <text x={W/2} y={H-6} fill="#b9c3d6" fontSize="12" textAnchor="middle">Historical Winrate %</text>
      <g transform={`translate(14 ${H/2}) rotate(-90)`}>
        <text fill="#b9c3d6" fontSize="12">Average Period Return, %</text>
      </g>
    </svg>
  );
}
