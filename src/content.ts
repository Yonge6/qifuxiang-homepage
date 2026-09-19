// Demo homepage content. Replace provisional categories/articles with approved client data.
export const categories = [
  { name: '体系认证', icon: 'shield', keywords: '认证' },
  { name: '工商代办', icon: 'building', keywords: '工商' },
  { name: '政策补贴', icon: 'document', keywords: '政策' },
  { name: '科技申报', icon: 'bulb', keywords: '科技' },
  { name: '财税服务', icon: 'receipt', keywords: '财税' },
  { name: '知识产权', icon: 'copyright', keywords: '商标' },
  { name: '资质许可', icon: 'certificate', keywords: '许可' },
  { name: '法律服务', icon: 'scales', keywords: '法律' },
];
export const products = [
  { id: 1, title: '消防特种许可', subtitle: '专业高效 · 办理指导', image: 'certification.webp', price: '0.1', proof: '56 人看过', category: '资质许可', desc: '提供特种设备许可相关的材料梳理、申报流程咨询与办理指导。具体办理范围和条件，以服务顾问确认及主管部门要求为准。' },
  { id: 2, title: '网络文化经营许可证', subtitle: '专业团队 · 精准辅导', image: 'culture.webp', price: '0.1', proof: '已售 100+', category: '资质许可', desc: '面向网络文化经营相关企业，提供资质条件咨询、材料准备和申报流程指导。' },
  { id: 3, title: '特种设备生产许可证申报服务', subtitle: '材料梳理 · 流程指导', image: 'certification.webp', price: '0.1', proof: '56 人看过', category: '资质许可', desc: '根据企业实际业务，梳理许可申报所需资料与办理步骤，协助企业有序准备。' },
  { id: 4, title: '网络文化经营许可证办理与变更', subtitle: '业务咨询 · 全程跟进', image: 'culture.webp', price: '0.1', proof: '已售 100+', category: '资质许可', desc: '提供网络文化经营许可证办理、变更相关的业务咨询与材料准备指导。' },
  { id: 5, title: 'ISO 三体系认证咨询服务', subtitle: '体系梳理 · 认证辅导', image: 'certification.webp', price: '0.1', proof: '56 人看过', category: '体系认证', desc: '围绕质量、环境与职业健康安全管理体系，协助企业梳理管理文件与认证准备工作。' },
  { id: 6, title: '网络文化经营资质咨询服务', subtitle: '一对一咨询 · 需求梳理', image: 'culture.webp', price: '0.1', proof: '已售 100+', category: '资质许可', desc: '协助企业梳理经营范围和业务需求，了解相关资质办理流程。' },
];
export type Product = typeof products[number];
export const articles = [
  { id: 1, type: '热门资讯', label: '平台公告', title: '企服象服务指南：从需求咨询到材料准备', desc: '找服务、问顾问、准备资料，让企业办事更有条理。', date: '09-20', image: 'hero.webp', body: ['在首页选择相应业务分类，或通过搜索查找您需要的企业服务。', '办理前，建议先与服务顾问沟通企业情况、服务范围和材料要求，再确认后续流程。', '本页面为界面设计展示，文章为示例内容，正式资讯将由平台提供。'] },
  { id: 2, type: '热门资讯', label: '服务动态', title: '企业资质申报前，这些准备工作要做好', desc: '提前梳理基础资料，沟通办理范围与时间安排。', date: '09-18', image: '', body: ['提前整理企业基础信息、现有资质及业务需求，有助于服务顾问了解实际情况。', '不同业务的申请条件和材料要求存在差异，请以主管部门和服务机构确认的信息为准。', '设计展示内容，不构成申报条件或办理结果承诺。'] },
  { id: 3, type: '知识科普', label: '认证知识', title: '认识企业管理体系认证', desc: '了解质量、环境与职业健康安全管理体系。', date: '09-16', image: '', body: ['管理体系认证涉及企业管理制度、业务流程与持续改进等方面。', '本页为知识栏目排版示例，正式文章将在确认后替换。'] },
  { id: 4, type: '知识科普', label: '办事指南', title: '如何选择适合企业的服务？', desc: '从企业阶段与当前需求出发，找到合适的服务。', date: '09-15', image: '', body: ['先明确企业当前的业务目标，再梳理需要解决的问题。', '可以通过首页企业服务模块，按照企业所处阶段查看相关服务方向。'] },
];
export type Article = typeof articles[number];
export const stages = [
  { title: '初创筹备', en: 'START', desc: '从一个想法，到一家企业', icon: 'rocket', tags: ['工商注册', '财税服务', '商标注册'] },
  { title: '稳步成长', en: 'GROW', desc: '完善企业能力，迈向新阶段', icon: 'chart', tags: ['体系认证', '资质许可', '科技申报'] },
  { title: '成熟发展', en: 'EXPAND', desc: '夯实经营基础，拓展更多可能', icon: 'buildings', tags: ['知识产权', '政策补贴', '法律服务'] },
  { title: '转型升级', en: 'EVOLVE', desc: '聚焦新的方向，开启下一程', icon: 'trend', tags: ['科技创新', '管理咨询', '企业变更'] },
];
