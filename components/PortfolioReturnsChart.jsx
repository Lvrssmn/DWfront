import { useEffect, useRef } from "react";

export default function PortfolioReturnsChart(){
  const ref = useRef(null);
  useEffect(()=>{
    const c = ref.current, ctx = c.getContext("2d");
    const W=c.width, H=c.height;
    ctx.clearRect(0,0,W,H);
    ctx.strokeStyle="#2a3346"; ctx.beginPath(); ctx.moveTo(40,10); ctx.lineTo(40,H-20); ctx.lineTo(W-10,H-20); ctx.stroke();
    const series=[5,18,21,20,22,24,23,24];
    ctx.strokeStyle="#f2b93a"; ctx.lineWidth=2; ctx.beginPath();
    series.forEach((v,i)=>{
      const x = 40 + (i+1)*(W-60)/(series.length+1); // сдвиг вправо
      const y = (H-20) - ( (v-0) / 30 ) * (H-30);
      i?ctx.lineTo(x,y):ctx.moveTo(x,y);
    });
    ctx.stroke();
  },[]);
  return <canvas ref={ref} width={560} height={200} />;
}
