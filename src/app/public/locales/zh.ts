import type { Locales } from "./client";

const zh: Locales = {
  logo: "小ERP",
  landingPage: {
    navbar: {
      login: "登录",
      signup: "注册",
    },
    footer: {
      xiaoErp: {
        title: "小ERP",
        desc: "为中小企业量身定制的一体化 ERP 系统，助力优化运营，推动业绩增长。",
      },
      modules: {
        title: "功能模块",
        accounting: "财务会计",
        inventory: "库存管理",
        purchasing: "采购管理",
        sales: "销售管理",
      },
      support: {
        title: "支持服务",
        documentation: "使用文档",
        help: "帮助中心",
        contactUs: "联系我们",
      },
      company: {
        title: "公司信息",
        aboutUs: "关于我们",
        pricing: "价格方案",
        privacyPolicy: "隐私政策",
        termsOfService: "服务条款",
      },
      allRightReserved: "版权所有。",
      availableIn: "语言版本：",
    },
    rootPath: {
      hero: {
        title: "让企业运转更高效",
        title2: "智能 ERP 解决方案",
        desc: "整合财务、库存、采购与销售，一站式平台专为中小企业打造，助力业务腾飞。",
        trialButton: "免费试用",
        demoButton: "观看演示",
        card1: {
          title: "安全可靠",
          desc: "企业级数据安全，服务器部署于印尼与中国。",
        },
        card2: {
          title: "卓越性能",
          desc: "高性能架构，保障流畅体验与低延迟操作。",
        },
        card3: {
          title: "团队协作",
          desc: "支持多用户协作，轻松实现任务分配与权限控制。",
        },
      },
      moduleOverview: {
        title: "全面 ERP 模块",
        desc: "涵盖所有业务功能的统一平台，模块之间深度集成，协同高效。",
        learnMoreButton: "了解更多",
        accounting: {
          title: "财务模块",
          desc: "从账务处理、开票到报表分析，提供完整的财务解决方案。",
          features: "总账管理||应收应付||财务报表||税务管理",
        },
        inventory: {
          title: "库存模块",
          desc: "实时库存追踪与智能预警，简化仓储管理。",
          features: "库存追踪||仓库管理||库存预警||产品目录",
        },
        purchasing: {
          title: "采购模块",
          desc: "高效管理供应商与采购流程，提升成本控制能力。",
          features: "供应商管理||采购订单||供应商评估||成本分析",
        },
        sales: {
          title: "销售模块",
          desc: "融合 CRM 的销售管理系统，实现流程自动化与深度分析。",
          features: "客户管理||报价生成||销售分析||客户门户",
        },
        lastCard: {
          title: "助力企业稳健成长",
          desc: "不论初创还是成长阶段，小ERP 灵活扩展，始终陪伴企业前行。",
        },
      },
    },
    modulesPath: {
      visualFlowTitle: "跨部门协同流程",
      backHome: "返回首页",

      accounting: {
        header: {
          title: "会计模块",
          desc: "用智能自动化提升财务效率",
        },
        summary: {
          title: "会计模块核心功能",
          desc: "自动处理账务、开票和财务报表，与销售、库存等模块无缝对接，减少人工操作，确保数据精准。涵盖交易全流程和税务合规，系统后台全自动完成。",
        },
        visualFlow: {
          before1: {
            title: "销售模块",
            desc: "生成发票并更新应收账款",
          },
          before2: {
            title: "库存模块",
            desc: "同步成本和库存变动",
          },
          center: {
            title: "会计模块",
            desc: "财务管理的核心枢纽",
          },
          after1: {
            title: "费用模块",
            desc: "同步运营及人事费用",
          },
          after2: {
            title: "报表模块",
            desc: "基于财务数据自动生成报表",
          },
        },
        featureGridTitle: "核心功能",
        useCase: {
          title: "典型应用场景",
          desc: "销售完成一笔 15,000 美元交易后，系统自动开票、记账、套用税率并更新应收账款。客户付款后自动对账，反映现金流，月底报表也自动生成，无需人工干预。",
        },
        benefitListTitle: "财务管理升级利器",
        features: {
          generalLedger: {
            title: "总账管理",
            desc: "实时记录每笔财务交易，分类清晰，账户余额随时查询。",
          },
          accountsPayableOrReceivable: {
            title: "应收应付管理",
            desc: "轻松管理发票和账期，自动提醒付款并生成账龄分析。",
          },
          financialReport: {
            title: "财务报表",
            desc: "快速生成多种格式的报表，支持不同时间区间。",
          },
          taxManagement: {
            title: "税务管理",
            desc: "智能计算税额，确保合规，并支持主流税务工具对接。",
          },
        },
        benefits:
          "减少人工录入，降低错误风险||" +
          "支持审计，完整保留记录||" +
          "财务数据与销售、库存实时同步||" +
          "自动更新税率，确保政策合规||" +
          "一键导出Excel、PDF或外部财务软件",
      },

      inventory: {
        header: {
          title: "库存模块",
          desc: "轻松实现库存智能管理",
        },
        summary: {
          title: "库存模块帮您做什么",
          desc: "实时同步库存和订单数据，库存不足自动提醒，提升订单处理效率。让仓库与销售采购协同，避免缺货和积压。",
        },
        visualFlow: {
          before1: {
            title: "销售模块",
            desc: "订单触发库存变动",
          },
          before2: {
            title: "采购模块",
            desc: "同步采购数据",
          },
          center: {
            title: "库存模块",
            desc: "企业库存管理核心平台",
          },
          after1: {
            title: "财务模块",
            desc: "记录库存对财务的影响",
          },
          after2: {
            title: "报表模块",
            desc: "生成库存及审计报表",
          },
        },
        featureGridTitle: "核心功能",
        useCase: {
          title: "真实场景示例",
          desc: "销售完成 500 件订单后，库存立即扣减并发出补货提醒。采购订单自动生成，货到后同步更新库存和财务，完全无需手工表格操作。",
        },
        benefitListTitle: "库存优化优势",
        features: {
          stockManagement: {
            title: "库存追踪",
            desc: "全面掌握各仓库库存，数据实时同步。",
          },
          purchaseOrders: {
            title: "采购自动更新",
            desc: "货物入库后库存自动更新，流程更顺畅。",
          },
          salesSync: {
            title: "销售同步",
            desc: "销售自动扣减库存，避免数据偏差。",
          },
          stockAudits: {
            title: "库存盘点",
            desc: "定期盘点核对差异，提升审计准确性。",
          },
        },
        benefits:
          "库存实时可见||" +
          "提升仓储效率，减少错误||" +
          "支持多仓库与批次管理||" +
          "深度集成销售采购流程||" +
          "提供历史数据，优化补货策略",
      },

      purchasing: {
        header: {
          title: "采购模块",
          desc: "全面掌控采购全流程",
        },
        summary: {
          title: "简化采购，提升效率",
          desc: "涵盖采购申请、审批、下单、收货到付款全过程，帮助企业管控成本，减少延误和错误。",
        },
        visualFlow: {
          before1: {
            title: "采购申请",
            desc: "员工提交采购需求",
          },
          before2: {
            title: "审批流程",
            desc: "经理或财务审批",
          },
          center: {
            title: "采购模块",
            desc: "统一采购管理中心",
          },
          after1: {
            title: "库存模块",
            desc: "收货自动入库",
          },
          after2: {
            title: "财务模块",
            desc: "同步发票和付款处理",
          },
        },
        featureGridTitle: "关键功能",
        useCase: {
          title: "完整流程示范",
          desc: "员工申请办公椅，经理在线审批后自动生成订单。货到自动入库，财务接收发票并完成付款，全流程透明且可追踪。",
        },
        benefitListTitle: "采购流程优势",
        features: {
          purchaseRequests: {
            title: "采购申请",
            desc: "员工提交申请进入自动审批流程。",
          },
          vendorComparison: {
            title: "供应商对比",
            desc: "根据报价、交付和历史选择最佳供应商。",
          },
          purchaseOrders: {
            title: "采购订单",
            desc: "审批通过后自动生成订单，支持预算控制。",
          },
          receivingAndReconciliation: {
            title: "收货与对账",
            desc: "对比订单、收货和发票，自动标记差异。",
          },
        },
        benefits:
          "避免重复采购和越权||" +
          "集中管理供应商信息||" +
          "库存和财务同步更新||" +
          "持续优化采购和谈判策略||" +
          "提升流程透明度和合规性",
      },

      sales: {
        header: {
          title: "销售模块",
          desc: "从客户开发到收款，全面数字化管理",
        },
        summary: {
          title: "销售模块能做什么",
          desc: "自动化线索管理、报价、订单处理和开票收款，提升销售效率，深度集成库存和财务，加快成交速度。",
        },
        visualFlow: {
          before1: {
            title: "CRM系统",
            desc: "客户信息和销售线索",
          },
          before2: {
            title: "需求评估",
            desc: "评估客户需求和预算",
          },
          center: {
            title: "销售模块",
            desc: "集中管理报价和订单",
          },
          after1: {
            title: "库存模块",
            desc: "分配库存并同步更新",
          },
          after2: {
            title: "财务模块",
            desc: "自动开票记账",
          },
        },
        featureGridTitle: "核心销售功能",
        useCase: {
          title: "真实成交流程",
          desc: "客户咨询后，销售快速生成个性报价。确认后自动生成订单，更新库存，发送发票，财务实时入账，流程顺畅无缝。",
        },
        benefitListTitle: "提升销售转化率",
        features: {
          customerManagement: {
            title: "客户管理",
            desc: "集中管理客户资料和沟通记录，助力关系维护。",
          },
          quotationInvoicing: {
            title: "报价与开票",
            desc: "生成专业报价和发票，自动填充客户和税务信息。",
          },
          salesOrders: {
            title: "销售订单",
            desc: "报价转订单，实时校验库存。",
          },
          orderFulfillment: {
            title: "订单履行",
            desc: "全流程跟踪订单，库存和物流同步处理。",
          },
        },
        benefits:
          "显著缩短销售周期||" +
          "减少手工错误||" +
          "清晰追踪线索到收入全过程||" +
          "库存和财务实时同步||" +
          "提升客户满意度和响应速度",
      },
    },
  },
};

export default zh;
