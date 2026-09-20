import { useEffect, useRef, useState } from 'react';
import { Carousel } from './mobile';

const pages = [
  { title:'最近一周的商标数据统计，仅供参考', metrics:[['申请量','187','件'],['下证量','64','件'],['驳回量','48','件']] },
  { title:'最近一周的数据统计，仅供参考', metrics:[['申请量(新办|年审)','284','家'],['发证量','3201','张'],['失效(注销|撤销)','980','张']] },
];
export default function Dashboard() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const current = useRef(0);
  const pointerDown = useRef(false);
  const visible = useRef(false);
  const lastInput = useRef(0);
  const go = (index:number) => {
    lastInput.current = Date.now();
    const node=root.current?.querySelector<HTMLElement>('.mobile-carousel');
    node?.scrollTo({left:node.clientWidth*index,behavior:'smooth'});
  };
  useEffect(()=>{
    const node=root.current?.querySelector<HTMLElement>('.mobile-carousel');
    if(!node || !root.current) return;
    let settled:ReturnType<typeof setTimeout>;
    const update=()=>{
      const i=Math.max(0,Math.min(pages.length-1,Math.round(node.scrollLeft/node.clientWidth)));
      current.current=i;setActive(i);
      clearTimeout(settled);
      settled=setTimeout(()=>{if(!pointerDown.current && Math.abs(node.scrollLeft-i*node.clientWidth)>1) node.scrollTo({left:i*node.clientWidth,behavior:'smooth'});},200);
    };
    const down=()=>{pointerDown.current=true;lastInput.current=Date.now();};
    const up=()=>{pointerDown.current=false;lastInput.current=Date.now();update();};
    const wheel=()=>{lastInput.current=Date.now();};
    const resize=new ResizeObserver(()=>node.scrollTo({left:current.current*node.clientWidth,behavior:'instant'}));resize.observe(node);
    const observer=new IntersectionObserver(([entry])=>{visible.current=entry.isIntersecting;},{threshold:.4});observer.observe(root.current);
    node.addEventListener('scroll',update,{passive:true});node.addEventListener('pointerdown',down);node.addEventListener('wheel',wheel,{passive:true});
    window.addEventListener('pointerup',up);window.addEventListener('pointercancel',up);
    return()=>{clearTimeout(settled);resize.disconnect();observer.disconnect();node.removeEventListener('scroll',update);node.removeEventListener('pointerdown',down);node.removeEventListener('wheel',wheel);window.removeEventListener('pointerup',up);window.removeEventListener('pointercancel',up);};
  },[]);
  useEffect(()=>{
    const timer=setInterval(()=>{
      if(pointerDown.current||!visible.current||document.hidden||Date.now()-lastInput.current<5000)return;
      const node=root.current?.querySelector<HTMLElement>('.mobile-carousel');
      if(node)node.scrollTo({left:((current.current+1)%pages.length)*node.clientWidth,behavior:'smooth'});
    },5500);
    return()=>clearInterval(timer);
  },[]);
  return <section ref={root} className="panel dashboard" aria-labelledby="dashboard-title">
    <div className="dashboard-heading"><h2 id="dashboard-title">数据看板</h2><p className="dashboard-description">{pages[active].title}</p></div>
    <Carousel className="dashboard-carousel" contentClassName="dashboard-track" ariaLabel="数据看板，左右滑动切换两页">
      {pages.map((page,i)=><div className="dashboard-page" key={page.title} role="group" aria-label={`第${i+1}页，共2页`} aria-hidden={active!==i}>
        
        <div className="metrics">{page.metrics.map(([label,value,unit])=><div className="metric" key={label}><span>{label}</span><div><strong>{value}</strong><small>{unit}</small></div></div>)}</div>
      </div>)}
    </Carousel>
    <div className="dashboard-controls"><div className="dashboard-pages">{pages.map((_,i)=><button key={i} aria-label={`查看第${i+1}页数据`} aria-current={active===i} className={active===i?'active':''} onClick={()=>go(i)} />)}</div></div>
  </section>;
}
