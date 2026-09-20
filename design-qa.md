# Batched homepage annotation acceptance

final result: passed

Source: user browser annotations and two supplied dashboard screenshots (187/64/48 and 284/3201/980). Rendered evidence: /tmp/qfx-final-annotations.png at 390 × 844 DPR1, plus live enterprise-row screenshot viewed during QA. Latest source requirements intentionally supersede original three-column enterprise cards and thick-glass icons.

- Typography: product/news/enterprise headings uniformly 15px at 390px and 320px; DOM inspection found no homepage leaf text below 12px. Supporting copy enlarged and dashboard description placed on its own line.
- Layout: product image width equals card content width and margin is zero for every card. Enterprise services now three full-width horizontal rows under unchanged three stage tabs. At 320px the CTA moves below body text rather than reducing typography. No horizontal overflow.
- Color: all metric labels identical gray; all numbers identical deep ink. Middle metric transparent, two 1px vertical dividers.
- Images: eight individual semi-flat raster icons generated and installed; both category grid and enterprise cards share them. Thick-glass assets replaced. No broken image sources.
- Copy: removed footer source/date line only. Dashboard page one 申请量187件 / 下证量64件 / 驳回量48件. Page two 申请量(新办|年审)284家 / 发证量3201张 / 失效(注销|撤销)980张, directly from latest user screenshots.
- Interaction: existing protected Carousel reused; native drag moved page two to page one, pagination moved to page two, automatic 5.5-second advance observed from page one to page two. Auto playback pauses during pointer interaction, after user input, when offscreen or when tab hidden. No visible play/pause button. Each slide width equals viewport width; resize aligns current page.
- Build: production H5 and all 28 protected runtime checks passed. No source runtime edits. Existing news and enterprise tabs remain functional.

No actionable P0/P1/P2 findings. Deployment verification follows the code push.

# Exact reference style revision

final result: passed

Source: user image ba706bc41f3e90c00dd7468c6086d932.png (853 × 1844). Implementation: /tmp/qfx-reference-style.png, 390 × 844 CSS px at DPR 1. Both opened together in the same comparison input. Region comparison used the source hero and category row, scaled proportionally to the 390px page width. Full-page composition differs intentionally: eight entries/two rows and two-column products remain required.

Earlier finding: prior iteration's outlined vector icons and different hero composition did not reproduce the supplied reference's material quality. Fix: extracted original supplied hero artwork and first four icon assets; generated four individual complementary raster icons with the reference as style input. Latest visible comparison verifies actual glass assets rather than vector approximation. All project assets saved under public/images.

Required surfaces: typography is near-black with larger 35px metrics; source headline stays embedded in actual source art. Layout retains section order and responsive product grid. Surface colors are pale blue and translucent white with restrained shadows, removing the previous heavy outlines/underlines. Image quality: source art is high resolution relative to its displayed size; new icon assets exported at 256px for 64px use. Business copy and data unchanged, including real product photos.

Checks: 8 raster category icons, 4 news rows, 3 enterprise stage cards; 320px and 390px without horizontal overflow; no broken images; browser console errors empty. Production build and 28 protected runtime checks passed. No outstanding P0/P1/P2. Added second-row icons are slightly glossier than the original first row (P3 optional future material tuning).

# Eight category navigation — latest scoped change

final result: passed

Source: user attachment codex-clipboard-0b9c0079-3953-41ce-ab37-f3c1fbc93518.png (854 × 1846, style reference). Implementation: /tmp/qfx-eight-categories.png (390 × 844, devicePixelRatio 1). Both opened in one comparison input; compared category region rather than different whole-page crops. Reference has four entries; user expressly requests two rows/eight. Source artwork is interpreted with the existing Phosphor duotone icon library, softly colored tiles, highlights and shadows; not claimed as pixel-identical 3D raster artwork.

Typography: four-character labels remain unwrapped at 320px and 390px. Spacing: exactly four columns and two rows, uniform 51px icon tiles (46px on narrow phones). Color: first row blue/orange/mint/purple as requested reference; second row complementary blue/gold/indigo/lilac. Images/content: source product images and all factual data untouched. Added categories are explicitly user-authorized design definitions. Category buttons still open the filtered product sheet; 财税服务 returns the captured audit product. No invented products added for empty categories.

Verification: 8 labels, 2 rows, no horizontal overflow at 320px; production build and 28 protected runtime checks pass. No actionable P0/P1/P2 findings.

# Blue technology quality refinement — 2026-09-20

final result: passed

Source visual truth: /tmp/qfx-quality-before.png (approved current page, before focused refinement).
Implementation: /tmp/qfx-quality-after.png; lower-page detail /tmp/qfx-quality-bottom.png.
Viewport: 390 × 844 CSS pixels, devicePixelRatio 1. Source and implementation both 390 × 844; same homepage/top/default tabs. Both images displayed together in one comparison input.

## Findings and comparison

No actionable P0/P1/P2 issues after refinement. User-requested changes are intentional: dashboard caption is now a separate readable line; three genuine category entries fill the existing single row evenly; panels gain measured spacing and subtle edges. Module order, two-column products, source images, article count and enterprise tab anatomy are unchanged.

- Fonts/typography: system Chinese family preserved; section titles 19px/700, product titles 13px/600 with two-line clamp; numerical hierarchy 32px with aligned units. Source's tiny inline dashboard caption moved below title.
- Spacing/layout: retained long-page structure; 12px page gutters, 12px section spacing, balanced three-entry category row. The more generous first-screen treatment moves product titles below the fold; acceptable because long-page scrolling remains clear and product grid itself is unchanged.
- Colors/tokens: deep navy text, restrained ice-blue surfaces, consistent blue/cyan icons; muted text darkened. Existing actual product photography remains unmodified.
- Images: existing approved glass-ribbon hero retained. All actual product thumbnails load; inner image borders and masks are consistent. No replacement artwork or invented source content.
- Copy: src/content.ts and src/Home.tsx unchanged in this refinement. Four products, four articles per news tab, three service cards per enterprise tab retained.
- Focused inspection: lower-page capture verifies readable news excerpts and three-card enterprise tab. Main screenshot is readable at 1:1 and covers typography, metric panel, category icons and customer support treatment.

## Verification

320px and 390px widths without horizontal overflow; mature-stage headings fit at 320px. Knowledge tab has four entries, mature stage has three actual cards. Customer support dialog opens/closes. Zero broken images and zero browser console errors. Build and all 28 protected runtime file checks passed.

## Previous revision evidence

# Current revision QA — 2026-09-20

Result: passed locally and on the public GitHub Pages URL.

Deployment: GitHub run 35483783711 succeeded for commit 3c33ea0. Public browser readback loaded assets/h5-MXiivqMe.js, four actual products, four articles in each tab, all three mature-stage cards, metrics 187/64/48 and zero broken images. Growth-stage and customer-service dialog also passed local interaction checks.

- Source: live WeChat mini-program after re-login; audit in docs/live-content-audit-2026-09-20.md.
- Four actual popular services, two-column grid; both news tabs have four source articles; all three enterprise stage tabs have three actual cards.
- 390px screenshot reviewed: light blue/glass hero, real source product images, source text news list, three-card enterprise module, prominent round customer-service tab. Header and footer remain fixed.
- 320px and 390px: no horizontal page overflow. No broken images. Knowledge and mature tabs verified via browser interaction.
- Runtime preservation: 28 protected files pass. TypeScript and H5 production build pass.
- Dynamic source values are dated snapshots. Product/consultation/account dialogs remain explicitly frontend demos. Full article bodies are not fabricated.

## Previous revision evidence (historical)

# 企服象首页验收

当前修订（2026-09-20）被真实内容核查阻断：微信要求重新登录，知识科普和成熟期内容尚未读取。以下其余记录属于已发布旧版；本轮不沿用旧版 passed 结论。详见 docs/live-content-audit-2026-09-20.md。

Date: 2026-09-20

final result: blocked

## Source visual truth

- `docs/qa/selected-design.jpg`：用户明确选定的蓝白建筑版，592 × 1280 像素。
- `docs/qa/requested-changes.jpg`：扩展入口、双列商品、两行标题批注。最新用户文字同时要求在热门服务后加入资讯公告、企业服务。
- 以源图内容区域等比换算至 390 CSS px 比较。修改后的页面为长页，不强行将新增模块塞进原单屏。

## Implementation evidence

- `docs/qa/home-mobile.png`：H5 390 × 844，deviceScaleFactor 1，初始顶部状态。
- `docs/qa/products-mobile.png`：同视口，滚动后双列商品及两行标题。
- `docs/qa/enterprise-mobile.png`：同视口，页尾企业服务与固定客服。
- `docs/qa/support-mobile.png`：客服弹层及本地演示交互。
- `docs/qa/runtime-screen.png`：保留的手机模拟器，屏幕实测 393 × 852 CSS px，缩放 1，设备状态栏为模板运行时而非图片。
- 额外检查 320 × 740 和 1440 × 1100。320 宽下双列轨道均为 134.5px，document.scrollWidth 等于 innerWidth，无横向溢出。

## Comparison

在同一视觉输入中并排提供了用户修改批注与最新首页、商品区域截图，逐项检查顶部品牌区、数据看板、分类、商品卡片和底部导航；另查看页尾截图与模拟器完整截图。

- 字体：系统中文无衬线字体，字号与选定稿按移动视口等比对应；数据数字为独立数值排版。商品标题实测最多两行，38px 高、18.85px 行高。
- 间距与层级：保留浅灰背景、白色圆角模块、蓝色标题下划线；新增第二行分类是用户要求，热门商品采用 2 列 × 3 行。详情采用弹层，未引入多页路由。
- 配色：主蓝 #0757FF，墨色 #10182D，浅底 #F5F6F9；价格红、商品辅助描述金色，符合选定图及批注。
- 素材：建筑摄影、认证图、顾问照片按选定稿生成，并转为 WebP；全部素材实际加载成功，无占位图片。标准图标使用 Phosphor，不手工绘制。
- 内容：317 家、492 份、7 家以及说明保留；八分类、六商品、资讯公告、企业服务完整。新增名称/文章为待甲方替换示例，见 `docs/content-status.md`。
- 导航：五个固定入口顺序保持；客服为凸起蓝色按钮，顶部与页尾都可见，无正文无法滚到导航上方的问题。

## Interaction acceptance

浏览器实际执行并读回结果：

1. 商品详情打开、加入购物车、购物车显示该服务及 ¥0.10 合计。
2. 搜索“网络”得到三项结果；无匹配关键词出现空状态与客服入口。
3. 客服输入咨询后出现本地演示对话，并标明不发送真实消息。
4. 地区切换到江岸区后顶部更新，再恢复武昌区。
5. 第二张轮播移动到 scrollLeft 389.5 / viewport 390，并更新页码；切回首张。
6. 知识科普切换展示对应两篇示例文章；恢复热门资讯。
7. 320px、小屏正常；1440px 桌面保持居中移动宽度。
8. 浏览器 error / unhandledrejection 采集为空；所有图片 naturalWidth > 0。
9. TypeScript 检查、H5 生产构建、28 个保护运行时文件完整性检查通过。

## Findings and comparison history

首轮视觉对照未发现可操作的 P0/P1/P2 偏差，无需要重复修改的视觉阻断项。新增分类行、两列商品、长页续接与独立 H5 外壳为用户要求的实现变化。手机模拟器另保留，未替换保护运行时。

## Follow-up polish

- P3：选定稿中的摄影和服务图片是参考素材，当前为同方向重新生成；正式上线可替换甲方授权原图。
- P3：补充四分类、示例资讯、企业阶段、部分商品内容待甲方确认。
- 限制：通过桌面浏览器移动视口检查，未宣称真实 iPhone/Android 硬件验收。微信支付、真实客服和后端均不在本次首页设计交付范围。

## GitHub Pages live acceptance

- Public URL: https://yonge6.github.io/qifuxiang-homepage/
- Successful deployment run: 35468903348; application commit: 432cf717579c2b68a0108bc4f4e6cd123630d9cf.
- Browser opened the public URL at 390 × 844. Confirmed 8 categories, 6 products, two grid columns of 169.5px, all images loaded, no horizontal overflow, no captured runtime errors.
- Opened the live customer-service sheet successfully; scrolled to enterprise services and confirmed fixed navigation bounds y=776, height=68, bottom=844.
- Live screenshots: `docs/qa/live-mobile.png`, `docs/qa/live-bottom.png`.
- Deployed JS is `assets/h5-DqBg5WNj.js`, matching the verified local production build.
- Initial deployment attempt used the feature branch, but the newly created Pages environment allowed main. Publication was moved to main without relaxing environment protection. The following run succeeded.
