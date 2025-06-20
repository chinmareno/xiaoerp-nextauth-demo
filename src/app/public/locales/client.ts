"use client";
import { createI18nClient } from "next-international/client";

type ModuleOverviewCard = {
  title: string;
  desc: string;
  features: string;
};
type TitleDesc = {
  title: string;
  desc: string;
};
export type Locales = {
  logo: string;
  landingPage: {
    navbar: {
      login: string;
      signup: string;
    };
    footer: {
      xiaoErp: TitleDesc;
      modules: {
        title: string;
        accounting: string;
        inventory: string;
        purchasing: string;
        sales: string;
      };
      support: {
        title: string;
        documentation: string;
        help: string;
        contactUs: string;
      };
      company: {
        title: string;
        aboutUs: string;
        pricing: string;
        privacyPolicy: string;
        termsOfService: string;
      };
      allRightReserved: string;
      availableIn: string;
    };
    rootPath: {
      hero: {
        title: string;
        title2: string;
        desc: string;
        trialButton: string;
        demoButton: string;
        card1: TitleDesc;
        card2: TitleDesc;
        card3: TitleDesc;
      };
      moduleOverview: {
        title: string;
        desc: string;
        learnMoreButton: string;
        accounting: ModuleOverviewCard;
        inventory: ModuleOverviewCard;
        purchasing: ModuleOverviewCard;
        sales: ModuleOverviewCard;
        lastCard: TitleDesc;
      };
    };
    modulesPath: {
      visualFlowTitle: string;
      backHome: string;
      accounting: {
        header: TitleDesc;
        summary: TitleDesc;
        visualFlow: {
          before1: TitleDesc;
          before2: TitleDesc;
          center: TitleDesc;
          after1: TitleDesc;
          after2: TitleDesc;
        };
        featureGridTitle: string;
        useCase: TitleDesc;
        benefitListTitle: string;
        features: {
          generalLedger: TitleDesc;
          accountsPayableOrReceivable: TitleDesc;
          financialReport: TitleDesc;
          taxManagement: TitleDesc;
        };
        benefits: string;
      };
      inventory: {
        header: TitleDesc;
        summary: TitleDesc;
        visualFlow: {
          before1: TitleDesc;
          before2: TitleDesc;
          center: TitleDesc;
          after1: TitleDesc;
          after2: TitleDesc;
        };
        featureGridTitle: string;
        useCase: TitleDesc;
        benefitListTitle: string;
        features: {
          stockManagement: TitleDesc;
          purchaseOrders: TitleDesc;
          salesSync: TitleDesc;
          stockAudits: TitleDesc;
        };
        benefits: string;
      };
      purchasing: {
        header: TitleDesc;
        summary: TitleDesc;
        visualFlow: {
          before1: TitleDesc;
          before2: TitleDesc;
          center: TitleDesc;
          after1: TitleDesc;
          after2: TitleDesc;
        };
        featureGridTitle: string;
        useCase: TitleDesc;
        benefitListTitle: string;
        features: {
          purchaseRequests: TitleDesc;
          vendorComparison: TitleDesc;
          purchaseOrders: TitleDesc;
          receivingAndReconciliation: TitleDesc;
        };
        benefits: string;
      };
      sales: {
        header: TitleDesc;
        summary: TitleDesc;
        visualFlow: {
          before1: TitleDesc;
          before2: TitleDesc;
          center: TitleDesc;
          after1: TitleDesc;
          after2: TitleDesc;
        };
        featureGridTitle: string;
        useCase: TitleDesc;
        benefitListTitle: string;
        features: {
          customerManagement: TitleDesc;
          quotationInvoicing: TitleDesc;
          salesOrders: TitleDesc;
          orderFulfillment: TitleDesc;
        };
        benefits: string;
      };
    };
  };
};

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  useCurrentLocale,
} = createI18nClient({
  en: () => import("./en"),
  zh: () => import("./zh"),
  id: () => import("./id"),
});
