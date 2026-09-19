# 企服象首页验收

Date: 2026-09-20

final result: passed

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
