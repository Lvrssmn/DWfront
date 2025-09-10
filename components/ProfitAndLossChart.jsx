import { useEffect, useRef } from "react";

export default function ProfitAndLossChart(){
  const ref = useRef(null);
  useEffect(()=>{
    const c = ref.current, ctx = c.getContext("2d");
    const W=c.width, H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.strokeStyle="#2a3346"; ctx.beginPath(); ctx.moveTo(40,10); ctx.lineTo(40,H-20); ctx.lineTo(W-10,H-20); ctx.stroke();
    const pts=[[0,0],[0.45,0],[1,12]];
    ctx.strokeStyle="#c1b2ff"; ctx.lineWidth=2; ctx.beginPath();
    pts.forEach(([x,y],i)=>{
      const X=40+x*(W-60), Y=(H-20)-((y+12)/24)*(H-30);
      i?ctx.lineTo(X,Y):ctx.moveTo(X,Y);
    });
    ctx.stroke();
  },[]);
  return <canvas ref={ref} width={560} height={200} />;
}
