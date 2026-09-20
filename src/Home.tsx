import Dashboard from './Dashboard';
import { useEffect, useRef, useState, type ComponentType, type InputHTMLAttributes, type ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ShieldCheck, Buildings, BuildingOffice, FileArrowUp, Lightbulb, Receipt, Copyright, Certificate, Scales, House, SquaresFour, Headset, ShoppingCart, User, Bell, MagnifyingGlass, CaretDown, CaretRight, X, DotsThree, Record, ArrowUp, ArrowRight, CheckCircle, RocketLaunch, ChartLineUp, TrendUp, Minus, Plus, Trash, PaperPlaneTilt, ChatCircleText, MapPin, Info, SlidersHorizontal, Eye } from '@phosphor-icons/react';
import { BottomSheet, Carousel, KeyboardInput, MobileScroll } from './mobile';
import { articles, categories, products, stages, type Article, type Product } from './content';
const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;
const glassIcons: Record<string, string> = { shield:'shield', building:'building', document:'document', bulb:'bulb', receipt:'finance', copyright:'ip', certificate:'permit', scales:'law' };
const iconMap: Record<string, typeof ShieldCheck> = { shield: ShieldCheck, building: BuildingOffice, document: FileArrowUp, bulb: Lightbulb, receipt: Receipt, copyright: Copyright, certificate: Certificate, scales: Scales, rocket: RocketLaunch, chart: ChartLineUp, buildings: Buildings, trend: TrendUp };
type Panel = 'location' | 'search' | 'service' | 'support' | 'cart' | 'tools' | 'account' | 'article' | 'news' | 'menu' | null;
type CartLine = { product: Product; quantity: number };
const headlines = ['质量树品牌，诚信立伟业'];
function NativeField(props: InputHTMLAttributes<HTMLInputElement>) { return <input {...props} />; }
function SectionTitle({ title, onMore, more = '查看更多' }: { title: string; onMore: () => void; more?: string }) { return <div className="section-heading"><h2>{title}</h2><button className="text-link" onClick={onMore}>{more}<CaretRight size={14} /></button></div>; }
function PanelBody({ runtime, title, open, close, children }: { runtime: boolean; title: string; open: boolean; close: () => void; children: ReactNode }) {
  if (runtime) return <BottomSheet open={open} onOpenChange={v => !v && close()} title={title} snap={0.83}><button className="runtime-close" aria-label="关闭" onClick={close}><X size={21} /></button>{children}</BottomSheet>;
  return <Dialog.Root open={open} onOpenChange={v => !v && close()}><Dialog.Portal><Dialog.Overlay className="qfx-overlay" /><Dialog.Content className="qfx-sheet" aria-describedby={undefined}><div className="sheet-grip" /><div className="qfx-sheet-heading"><Dialog.Title>{title}</Dialog.Title><Dialog.Close className="icon-button" aria-label="关闭"><X size={22} /></Dialog.Close></div><div className="qfx-sheet-body">{children}</div></Dialog.Content></Dialog.Portal></Dialog.Root>;
}
export default function Home({ runtime = false }: { runtime?: boolean }) {
  const [panel, setPanel] = useState<Panel>(null);
  const [location, setLocation] = useState('武昌区');
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('全部');
  const [selected, setSelected] = useState<Product>(products[0]);
  const [article, setArticle] = useState<Article>(articles[0]);
  const [newsTab, setNewsTab] = useState('热门资讯');
  const [stageTab, setStageTab] = useState('初创期');
  const [cart, setCart] = useState<CartLine[]>([]);
  const [notice, setNotice] = useState('');
  const [slide, setSlide] = useState(0);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<{ from: 'user' | 'service'; text: string }[]>([]);
  const [showTop, setShowTop] = useState(false);
  const hero = useRef<HTMLDivElement>(null);
  const page = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const Field = (runtime ? KeyboardInput : NativeField) as ComponentType<InputHTMLAttributes<HTMLInputElement>>;
  const cartCount = cart.reduce((sum, line) => sum + line.quantity, 0);
  const filtered = products.filter(p => (activeCategory === '全部' || `${p.title}${p.subtitle}`.includes(categories.find(c => c.name === activeCategory)?.keywords ?? activeCategory)) && `${p.title}${p.subtitle}${p.category}`.includes(query.trim()));
  const show = (next: Panel) => { lastFocus.current = document.activeElement as HTMLElement; setPanel(next); };
  const close = () => { setPanel(null); requestAnimationFrame(() => lastFocus.current?.focus()); };
  const flash = (text: string) => setNotice(text);
  useEffect(() => { if (!notice) return; const timer = setTimeout(() => setNotice(''), 2400); return () => clearTimeout(timer); }, [notice]);
  useEffect(() => {
    const node = hero.current?.querySelector('.mobile-carousel');
    const update = () => node && setSlide(Math.round(node.scrollLeft / node.clientWidth));
    node?.addEventListener('scroll', update, { passive: true });
    return () => node?.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    const scroller = runtime ? page.current?.querySelector('.mobile-scroll') : window;
    const onScroll = () => setShowTop(runtime ? (scroller as HTMLElement).scrollTop > 500 : window.scrollY > 500);
    scroller?.addEventListener('scroll', onScroll, { passive: true });
    return () => scroller?.removeEventListener('scroll', onScroll);
  }, [runtime]);
  const goTop = () => { if (runtime) page.current?.querySelector('.mobile-scroll')?.scrollTo({ top: 0, behavior: 'smooth' }); else window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const openSearch = (category = '全部', text = '') => { setQuery(text); setActiveCategory(category); show('search'); };
  const openProduct = (p: Product) => { setSelected(p); show('service'); };
  const addCart = (p: Product) => { setCart(lines => lines.some(l => l.product.id === p.id) ? lines.map(l => l.product.id === p.id ? { ...l, quantity: l.quantity + 1 } : l) : [...lines, { product: p, quantity: 1 }]); flash('已加入购物车'); };
  const send = (text: string) => { if (!text.trim()) return; setChat(c => [...c, { from: 'user', text: text.trim() }, { from: 'service', text: '已在当前演示中记录您的咨询。正式上线后，这里会连接企服象客服，为您确认办理条件、服务内容和材料清单。' }]); setMessage(''); };
  const titles: Record<Exclude<Panel, null>, string> = { location: '选择服务地区', search: '查找企业服务', service: '服务介绍', support: '企服象客服', cart: '购物车', tools: '企业工具箱', account: '我的', article: '资讯详情', news: '资讯公告', menu: '关于企服象' };
  const productCard = (p: Product) => <button className="product-card" key={p.id} onClick={() => openProduct(p)} aria-label={`查看${p.title}`}><img src={img(p.image)} alt={p.title} loading="lazy" width="320" height="220" /><div className="product-info"><h3>{p.title}</h3><p>{p.subtitle}</p><div className="product-bottom"><span className="price"><small>¥</small>{p.price}</span><span className="social-proof">{p.proof}</span></div></div></button>;
  const content = <>
    <div className="hero-wrap" ref={hero}><Carousel className="hero-carousel" contentClassName="hero-track" ariaLabel="企服象服务轮播"><button className="hero-slide" onClick={() => openSearch()} aria-label="了解企服象服务"><img src={img('hero-reference.webp')} alt={headlines[0]} fetchPriority="high" width="1200" height="520" /></button></Carousel><div className="hero-dots">{headlines.map((_, i) => <button key={i} className={slide === i ? 'active' : ''} aria-label={`切换到第${i + 1}张轮播`} aria-current={slide === i} onClick={() => { const node = hero.current?.querySelector('.mobile-carousel'); node?.scrollTo({ left: node.clientWidth * i, behavior: 'smooth' }); }} />)}</div></div>
    <div className="page-sections">
      <button className="activity" onClick={() => { setArticle(articles[0]); show('article'); }}><Bell size={18} weight="fill" /><span>40分钟前 135****3204 申请了1份 检测报告</span><CaretRight size={15} /></button>
      <Dashboard />
      <section className="panel category-panel" aria-label="企业服务分类"><div className="category-grid">{categories.map(c => { return <button key={c.name} onClick={() => openSearch(c.name)}><span className="category-icon"><img src={img(`icon-soft-${glassIcons[c.icon]}.webp`)} alt="" width="64" height="64" /></span><span>{c.name}</span></button>; })}</div></section>
      <section className="panel services" id="services"><SectionTitle title="热门服务" onMore={() => openSearch()} /><div className="product-grid">{products.map(productCard)}</div></section>
      <section className="panel news" id="news"><SectionTitle title="资讯公告" onMore={() => show('news')} more="全部" /><div className="news-tabs" role="tablist" aria-label="资讯分类">{['热门资讯', '知识科普'].map(tab => <button role="tab" aria-selected={newsTab === tab} className={newsTab === tab ? 'active' : ''} key={tab} onClick={() => setNewsTab(tab)}>{tab}</button>)}</div><div role="tabpanel" aria-label={newsTab}>{articles.filter(a => a.type === newsTab).slice(0,4).map(a => <button className="news-item" key={a.id} onClick={() => { setArticle(a); show('article'); }}><div className="news-copy"><h3>{a.title}</h3><p>{a.desc}</p><small><span><Eye size={13} />{a.views}</span><time>2026-{a.date}</time></small></div></button>)}</div></section>
      <section className="panel enterprise" id="enterprise"><div className="section-heading"><h2>企业服务</h2></div><div className="enterprise-tabs" role="tablist" aria-label="企业发展阶段">{stages.map(s => <button role="tab" key={s.title} aria-selected={stageTab === s.title} className={stageTab === s.title ? 'active' : ''} onClick={() => setStageTab(s.title)}>{s.title}</button>)}</div><div className="enterprise-cards" role="tabpanel" aria-label={stageTab}>{stages.find(s => s.title === stageTab)?.cards.map((c, i) => <button className={`enterprise-card enterprise-card-${i}`} key={c.title} onClick={() => openSearch()}><h3>{c.title}</h3><p>{c.desc}</p><span>查看全部 <CaretRight size={11} /></span><img className="enterprise-art" src={img(`icon-soft-${glassIcons[c.icon] ?? 'permit'}.webp`)} alt="" width="58" height="58" /></button>)}</div></section>
      <footer className="page-footer"><div className="footer-brand"><ShieldCheck size={20} />企服象</div><p>专业服务 · 助力企业发展</p></footer>
    </div>
  </>;
  return <div className={`qfx-app ${runtime ? 'qfx-runtime' : 'qfx-h5'}`} ref={page}>
    <header className="topbar"><button className="location-button" onClick={() => show('location')}>{location}<CaretDown size={12} /></button><button className="search-trigger" onClick={() => openSearch()}><MagnifyingGlass size={20} /><span>搜索</span></button><div className="wechat-capsule"><button aria-label="更多信息" onClick={() => show('menu')}><DotsThree size={24} weight="bold" /></button><button aria-label="回到首页顶部" onClick={goTop}><Record size={22} weight="bold" /></button></div></header>
    {runtime ? <MobileScroll className="qfx-scroll"><main className="qfx-content">{content}</main></MobileScroll> : <main className="qfx-content">{content}</main>}
    <nav className="bottom-nav" aria-label="主导航"><button className="nav-active" onClick={() => { close(); goTop(); }}><House weight="fill" size={26} /><span>首页</span></button><button onClick={() => show('tools')}><SquaresFour size={26} /><span>工具箱</span></button><button className="support-tab" onClick={() => show('support')}><span className="support-key"><Headset size={30} /><span>客服</span></span></button><button onClick={() => show('cart')} className="cart-tab"><ShoppingCart size={26} />{cartCount > 0 && <b>{cartCount}</b>}<span>购物车</span></button><button onClick={() => show('account')}><User size={26} /><span>我的</span></button></nav>
    {showTop && <button className="back-top" onClick={goTop} aria-label="返回顶部"><ArrowUp size={19} /></button>}
    {notice && <div className="toast" role="status"><CheckCircle size={18} />{notice}</div>}
    <PanelBody runtime={runtime} title={panel ? titles[panel] : ''} open={!!panel} close={close}>
      {panel === 'location' && <><p className="muted panel-intro">当前服务城市 · 武汉市</p><div className="location-grid">{['武昌区', '江岸区', '江汉区', '硚口区', '汉阳区', '洪山区', '青山区', '东西湖区'].map(v => <button className={location === v ? 'selected' : ''} key={v} onClick={() => { setLocation(v); close(); }}>{v}{location === v && <CheckCircle size={16} />}</button>)}</div></>}
      {panel === 'search' && <><form className="search-form" onSubmit={e => e.preventDefault()}><MagnifyingGlass size={20} /><Field aria-label="搜索企业服务" value={query} onChange={e => setQuery(e.target.value)} placeholder="搜索服务、资质或关键词" />{query && <button type="button" aria-label="清空搜索" onClick={() => setQuery('')}><X size={17} /></button>}</form><div className="filter-wrap"><label htmlFor="category-select"><SlidersHorizontal size={16} />服务分类</label><select id="category-select" value={activeCategory} onChange={e => setActiveCategory(e.target.value)}>{['全部', ...categories.map(c => c.name)].map(c => <option key={c}>{c}</option>)}</select><span>{filtered.length} 项服务</span></div>{filtered.length ? <div className="product-grid search-products">{filtered.map(productCard)}</div> : <div className="empty-state"><MagnifyingGlass size={36} /><h3>暂未找到相关服务</h3><p>试试其他关键词，或告诉顾问您的具体需求。</p><button className="primary-button" onClick={() => show('support')}>咨询客服</button><button className="text-link" onClick={() => { setQuery(''); setActiveCategory('全部'); }}>查看全部服务</button></div>}</>}
      {panel === 'service' && <><img className="detail-cover" src={img(selected.image)} alt={selected.title} /><div className="detail-price price"><small>¥</small>{selected.price}<span>展示价格</span></div><h3 className="detail-title">{selected.title}</h3><p className="detail-subtitle">{selected.subtitle}</p><div className="detail-block"><h4>服务介绍</h4><p>{selected.desc}</p></div><p className="demo-note">商品信息采自小程序，当前为 H5 设计展示，不产生真实订单。</p><div className="detail-actions"><button className="secondary-button" onClick={() => addCart(selected)}>加入购物车</button><button className="primary-button" onClick={() => { setChat([{ from: 'user', text: `我想了解：${selected.title}` }]); show('support'); }}>立即咨询办理</button></div></>}
      {panel === 'support' && <div className="support-panel"><div className="advisor"><span><Headset size={31} /></span><div><strong>企服象服务顾问</strong><p>把需求说清楚，让服务更合适</p></div></div><div className="chat-welcome">您好，欢迎来到企服象。您想了解哪方面的企业服务？</div><div className="quick-questions">{['办理需要哪些材料？', '如何选择服务？', '我想咨询服务价格'].map(q => <button key={q} onClick={() => send(q)}>{q}<CaretRight size={14} /></button>)}</div><div className="chat-messages" aria-live="polite">{chat.map((c, i) => <div key={i} className={`chat-bubble ${c.from}`}>{c.text}</div>)}</div><p className="demo-note">客服交互演示，消息不会发送给真实客服。</p><form className="chat-form" onSubmit={e => { e.preventDefault(); send(message); }}><Field aria-label="咨询内容" placeholder="输入您想咨询的问题" value={message} onChange={e => setMessage(e.target.value)} /><button className="primary-button" type="submit" aria-label="发送咨询" disabled={!message.trim()}><PaperPlaneTilt size={21} /></button></form></div>}
      {panel === 'cart' && (cart.length ? <><div className="cart-lines">{cart.map(l => <div className="cart-line" key={l.product.id}><img src={img(l.product.image)} alt={l.product.title} /><div><h3>{l.product.title}</h3><span className="price">¥{l.product.price}</span><div className="quantity"><button aria-label={`减少${l.product.title}数量`} onClick={() => setCart(c => c.map(x => x.product.id === l.product.id ? { ...x, quantity: x.quantity - 1 } : x).filter(x => x.quantity > 0))}><Minus size={14} /></button><span>{l.quantity}</span><button aria-label={`增加${l.product.title}数量`} onClick={() => addCart(l.product)}><Plus size={14} /></button></div></div><button className="icon-button" aria-label={`删除${l.product.title}`} onClick={() => setCart(c => c.filter(x => x.product.id !== l.product.id))}><Trash size={20} /></button></div>)}</div><div className="cart-total"><span>合计 <strong>¥{cart.reduce((s, l) => s + Number(l.product.price) * l.quantity, 0).toFixed(2)}</strong></span><button className="primary-button" onClick={() => show('support')}>咨询办理</button></div><p className="demo-note">演示购物车，刷新后清空，不提供支付或真实下单。</p></> : <div className="empty-state"><ShoppingCart size={43} /><h3>购物车还是空的</h3><p>浏览企业服务，将感兴趣的项目加入购物车。</p><button className="primary-button" onClick={() => openSearch()}>去看看服务</button></div>)}
      {panel === 'tools' && <><p className="panel-intro muted">按业务需求快速查找企业服务</p><div className="tool-grid">{categories.map(c => { const Icon = iconMap[c.icon]; return <button key={c.name} onClick={() => openSearch(c.name)}><Icon size={26} /><span>{c.name}</span><CaretRight size={14} /></button>; })}</div><button className="consult-strip" onClick={() => show('support')}><ChatCircleText size={25} /><div><strong>描述您的需求</strong><span>让顾问帮您梳理服务方向</span></div><CaretRight size={18} /></button></>}
      {panel === 'account' && <><div className="advisor"><span><User size={29} /></span><div><strong>欢迎来到企服象</strong><p>专业企业服务，陪伴企业成长</p></div></div><div className="account-links"><button onClick={() => show('cart')}><ShoppingCart size={22} />我的购物车<CaretRight size={17} /></button><button onClick={() => show('support')}><Headset size={22} />联系服务顾问<CaretRight size={17} /></button><button onClick={() => show('menu')}><Info size={22} />关于企服象<CaretRight size={17} /></button></div><p className="demo-note">本次交付为首页设计展示，账户与订单功能尚未接入。</p></>}
      {panel === 'article' && <article className="article-detail"><span className="news-label">{article.label}</span><h3>{article.title}</h3><p className="article-meta">2026-{article.date} · 企服象</p>{article.image && <img src={img(article.image)} alt="企业办公建筑" />}{article.body.map(p => <p key={p}>{p}</p>)}<p className="demo-note">此处展示小程序首页的原文摘要，完整文章请在小程序中查看。</p></article>}
      {panel === 'news' && <div className="all-news">{articles.map(a => <button className="news-item" key={a.id} onClick={() => { setArticle(a); show('article'); }}><div className="news-copy"><span className="news-label">{a.label}</span><h3>{a.title}</h3><p>{a.desc}</p><small>2026-{a.date}<CaretRight size={14} /></small></div></button>)}</div>}
      {panel === 'menu' && <div className="about-panel"><ShieldCheck size={50} /><h3>企服象</h3><p>专业服务 · 助力企业发展</p><p>围绕企业不同阶段的需求，提供便捷的服务发现与咨询入口。</p><div className="detail-block"><h4>当前版本</h4><p>首页 H5 设计展示。所有交互均在当前浏览器内演示，未连接原小程序后台、客服或支付。</p></div><button className="primary-button" onClick={() => show('support')}>体验客服咨询</button></div>}
    </PanelBody>
  </div>;
}
