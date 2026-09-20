export type NavName = 'home' | 'tools' | 'support' | 'cart' | 'account';

/** Shared optical grid, with distinct outline and filled navigation states. */
export default function NavIcon({ name, active }: { name: NavName; active: boolean }) {
  const fill = active ? 'currentColor' : 'none';
  return <svg className="nav-symbol" width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-state={active ? 'selected' : 'unselected'}>
    {name === 'home' && <><path d="M3.5 12.2 14 3.8l10.5 8.4M6 10.4v12.1c0 .9.6 1.5 1.5 1.5h13c.9 0 1.5-.6 1.5-1.5V10.4L14 4Z" fill={fill}/><path d="M11 23v-7h6v7" stroke={active ? 'white' : 'currentColor'}/></>}
    {name === 'tools' && <>{[[4,4],[16,4],[4,16],[16,16]].map(([x,y],i)=><rect key={i} x={x} y={y} width="8" height="8" rx="2" fill={fill} opacity={active && i===3 ? .55 : 1}/>)}</>}
    {name === 'support' && <><path d="M5 15v-2a9 9 0 0 1 18 0v7c0 3-3 4-7 4"/><rect x="3.5" y="12" width="5" height="9" rx="2.5" fill={fill}/><rect x="19.5" y="12" width="5" height="9" rx="2.5" fill={fill}/><rect x="12" y="22" width="5" height="3" rx="1.5" fill="currentColor" stroke="none"/></>}
    {name === 'cart' && <><path d="M3 4h3l2.3 14h13.5l2-10H6.8" fill={fill}/><path d="M10 12h10" stroke={active ? 'white' : 'currentColor'}/><circle cx="10" cy="23" r="1.8" fill={fill}/><circle cx="21" cy="23" r="1.8" fill={fill}/></>}
    {name === 'account' && <><circle cx="14" cy="8.5" r="4.5" fill={fill}/><path d="M5 24v-2a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v2Z" fill={fill}/>{active && <path d="M10 20h8" stroke="white"/>}</>}
  </svg>;
}
