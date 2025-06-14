import type { Locales } from "./client";

export default {
  login: "登录",
  logo: "小ERP",
  hero1: "使用智能 ERP 解决方案",
  hero2: "简化您的业务",
  hero3:
    "将会计、库存、采购和销售集成于一个强大的平台。为小型企业打造，为成长而设计。",
  herotrial: "开始免费试用",
  herodemo: "观看演示",
  herocardtitle1: "安全可靠",
  herocarddesc1: "企业级安全性，保护您的业务数据",
  herocardtitle2: "极速性能",
  herocarddesc2: "优化性能，助力流畅工作流程",
  herocardtitle3: "团队协作",
  herocarddesc3: "专为高效团队合作打造",
  moduleoverviewtitle: "完整的 ERP 模块",
  moduleoverviewdesc: "企业所需的一切尽在一个集成平台中，每个模块无缝协作。",
  modulesoverviewcards: {
    accounting: {
      title: "会计",
      desc: "通过自动记账、开票和报表，实现全面的财务管理。",
      features: "总账管理||应收应付管理||财务报表||税务管理",
    },
    inventory: {
      title: "库存管理",
      desc: "实时库存追踪，自动库存提醒与仓库管理。",
      features: "库存追踪||仓库管理||库存预警||产品目录",
    },
    purchasing: {
      title: "采购管理",
      desc: "从供应商管理到采购订单，优化采购流程。",
      features: "供应商管理||采购订单||供应商评估||成本分析",
    },
    sales: {
      title: "销售管理",
      desc: "整合CRM和销售数据，全方位管理销售流程。",
      features: "潜在客户管理||报价生成||销售分析||客户门户",
    },
  },
} satisfies Locales;
