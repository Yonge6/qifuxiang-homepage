// Content transcribed from the live mini-program and user-provided captures on 2026-09-20.
// This is a captured snapshot, not a live backend connection.
// Eight navigation categories are user-authorized design proposals, not source inventory.
export const categories = [
  { name: '体系认证', icon: 'shield', keywords: '认证' },
  { name: '工商代办', icon: 'building', keywords: '工商' },
  { name: '政策补贴', icon: 'document', keywords: '政策' },
  { name: '科技申报', icon: 'bulb', keywords: '科技' },
  { name: '财税服务', icon: 'receipt', keywords: '财务' },
  { name: '知识产权', icon: 'copyright', keywords: '知识产权' },
  { name: '资质许可', icon: 'certificate', keywords: '许可' },
  { name: '法律服务', icon: 'scales', keywords: '法律' },
];
export const products = [
  {
    "id": 1,
    "title": "消防特种许可 江西 莱西认证",
    "subtitle": "莱西认证 特种设备许可 曳引驱动乘客…",
    "image": "service-commerce-fire.webp",
    "price": "0.1",
    "proof": "",
    "category": "",
    "desc": "莱西认证 特种设备许可 曳引驱动乘客…"
  },
  {
    "id": 2,
    "title": "天使 / VC 融资对接",
    "subtitle": "天使 / VC 融资对接",
    "image": "service-commerce-funding.webp",
    "price": "0.1",
    "proof": "已售3",
    "category": "",
    "desc": "天使 / VC 融资对接"
  },
  {
    "id": 3,
    "title": "招投标全套资料代办",
    "subtitle": "标书代制作招标投标文件公司代采购…",
    "image": "service-commerce-tender.webp",
    "price": "0.1",
    "proof": "已售3",
    "category": "",
    "desc": "标书代制作招标投标文件公司代采购…"
  },
  {
    "id": 4,
    "title": "财务审计年度投标报告评专项高新贷款报表",
    "subtitle": "审计咨询公司投标报告年度财务报表…",
    "image": "service-commerce-audit.webp",
    "price": "0.1",
    "proof": "已售3",
    "category": "",
    "desc": "审计咨询公司投标报告年度财务报表…"
  }
];
export type Product = typeof products[number];
export const articles = [
  {
    "id": 1,
    "type": "热门资讯",
    "label": "",
    "title": "嘉立创全资子公司拟15亿投建珠海生产基地",
    "desc": "8月27日，深圳嘉立创科技集团股份有限公司公告，其全资子公司先进电子（珠海）有限公司拟在珠海市斗门区富山工业区投资PCB、PCBA及电子元器件业务的生产基地，总投资约15亿元，…",
    "date": "08-27",
    "views": 1,
    "image": "",
    "body": [
      "8月27日，深圳嘉立创科技集团股份有限公司公告，其全资子公司先进电子（珠海）有限公司拟在珠海市斗门区富山工业区投资PCB、PCBA及电子元器件业务的生产基地，总投资约15亿元，…"
    ]
  },
  {
    "id": 2,
    "type": "热门资讯",
    "label": "",
    "title": "苹果发布全球首款2nm芯片 性能AI能力双突破",
    "desc": "8月26日，苹果推出新款Mac mini与Mac Studio，搭载全球首款2nm芯片M6及M5 Ultra，性能与AI能力实现颠覆性跃升。M6芯片采用2nm制程，12核CPU含2颗超级核心、4颗性能核心和6…",
    "date": "08-27",
    "views": 1,
    "image": "",
    "body": [
      "8月26日，苹果推出新款Mac mini与Mac Studio，搭载全球首款2nm芯片M6及M5 Ultra，性能与AI能力实现颠覆性跃升。M6芯片采用2nm制程，12核CPU含2颗超级核心、4颗性能核心和6…"
    ]
  },
  {
    "id": 3,
    "type": "热门资讯",
    "label": "",
    "title": "代表近一点 企业暖一点",
    "desc": "今年，是广东省人大常委会连续第9年组织开展代表主题活动，“助力优化营商环境·人大代表在行动”主题活动正向纵深推进。日前，省人大常委会组织开展代表主题活动集中采访，记者跟随代表…",
    "date": "08-27",
    "views": 1,
    "image": "",
    "body": [
      "今年，是广东省人大常委会连续第9年组织开展代表主题活动，“助力优化营商环境·人大代表在行动”主题活动正向纵深推进。日前，省人大常委会组织开展代表主题活动集中采访，记者跟随代表…"
    ]
  },
  {
    "id": 4,
    "type": "热门资讯",
    "label": "",
    "title": "狠抓创新加快企业智能化数字化转型",
    "desc": "营商环境是城市的核心竞争力和发展“软实力”。在近日举行的“助力优化营商环境·人大代表在行动”集中履职月活动中，惠州市人大常委会组织惠州市的全国及省、市人大代表聚焦优化营商环境专题…",
    "date": "08-27",
    "views": 1,
    "image": "",
    "body": [
      "营商环境是城市的核心竞争力和发展“软实力”。在近日举行的“助力优化营商环境·人大代表在行动”集中履职月活动中，惠州市人大常委会组织惠州市的全国及省、市人大代表聚焦优化营商环境专题…"
    ]
  }
];
articles.push(...[
  {
    "id": 5,
    "type": "知识科普",
    "label": "",
    "title": "企业信用等级证书为啥是企业招标中的必要项",
    "desc": "企业信用等级是评估企业履约能力和信用风险的管理工具，中国采用的主要标准包括国际通行的“四等十级制”（AAA至D级）和国内常见的“三等九级制”（AAA至C级）。不同管理机构根据行业…",
    "date": "08-27",
    "views": 1,
    "image": "",
    "body": [
      "企业信用等级是评估企业履约能力和信用风险的管理工具，中国采用的主要标准包括国际通行的“四等十级制”（AAA至D级）和国内常见的“三等九级制”（AAA至C级）。不同管理机构根据行业…"
    ]
  },
  {
    "id": 6,
    "type": "知识科普",
    "label": "",
    "title": "为什么说ISO 27001可以为企业云计算安全保驾护航",
    "desc": "随着在世界范围内，信息化水平的不断发展，信息安全逐渐成为人们关注的焦点，世界范围内的各个机构、组织、个人都在探寻如何保障信息安全的问题。英国、美国、挪威、瑞典、芬兰、澳…",
    "date": "08-27",
    "views": 1,
    "image": "",
    "body": [
      "随着在世界范围内，信息化水平的不断发展，信息安全逐渐成为人们关注的焦点，世界范围内的各个机构、组织、个人都在探寻如何保障信息安全的问题。英国、美国、挪威、瑞典、芬兰、澳…"
    ]
  },
  {
    "id": 7,
    "type": "知识科普",
    "label": "",
    "title": "CCC认证为什么称为一般指中国强制性产品认证",
    "desc": "中国强制性产品认证，英文名称China Compulsory Certification，简称CCC认证或3C认证。该认证是中国政府遵循世贸组织规则和国际通行规则建立的合格评定体系，旨在保护消费者人身和…",
    "date": "08-27",
    "views": 1,
    "image": "",
    "body": [
      "中国强制性产品认证，英文名称China Compulsory Certification，简称CCC认证或3C认证。该认证是中国政府遵循世贸组织规则和国际通行规则建立的合格评定体系，旨在保护消费者人身和…"
    ]
  },
  {
    "id": 8,
    "type": "知识科普",
    "label": "",
    "title": "ISO9001质量管理体系认证有什么用?",
    "desc": "ISO9001质量管理体系认证是国际标准化组织（ISO）制定的质量管理体系标准。ISO是世界上主要的非政府间国际标准化机构，总部位于瑞士日内瓦。其下属的ISO/TC176技术委员会于1987…",
    "date": "08-27",
    "views": 1,
    "image": "",
    "body": [
      "ISO9001质量管理体系认证是国际标准化组织（ISO）制定的质量管理体系标准。ISO是世界上主要的非政府间国际标准化机构，总部位于瑞士日内瓦。其下属的ISO/TC176技术委员会于1987…"
    ]
  }
]);
export type Article = typeof articles[number];
export const stages = [
  { title: '初创期', cards: [
    { title: '工商变更', desc: '工商变注册、工商…', icon: 'building' },
    { title: '企业信用信证', desc: '企业AAA级信用评定', icon: 'certificate' },
    { title: '财务审计', desc: '财务咨询、财务审计', icon: 'receipt' },
  ] },
  { title: '成长期', cards: [
    { title: '财税升级', desc: '财税升级、税务筹划', icon: 'receipt' },
    { title: '人力标准化', desc: '人力资源合规、人…', icon: 'building' },
    { title: '政策申报', desc: '政策解读、政策申报', icon: 'document' },
  ] },
  { title: '成熟期', cards: [
    { title: '高端产业认证', desc: '高端社团对接、高…', icon: 'certificate' },
    { title: '国际合规', desc: '国际化合规、国际…', icon: 'building' },
    { title: '资产合规', desc: '资产合规、资产优…', icon: 'receipt' },
  ] },
];
