import { defineTeekConfig } from "vitepress-theme-teek/config";

export const teekConfig = defineTeekConfig({
  teekHome: false,
  vpHome: true,
  loading: false,
  anchorScroll: true,
  viewTransition: true,
  themeSize: "default",
  sidebarTrigger: false,
  windowTransition: false,
  backTop: {
    enabled: true,
    content: "icon",
  },
  toComment: {
    enabled: false,
  },
  codeBlock: {
    copiedDone: (TkMessage) => TkMessage.success("代码已复制"),
  },
  themeEnhance: {
    enabled: false,
  },
  notice: {
    enabled: false,
  },
  author: { name: "MTNetwork Team", link: "https://public.mcmtn.net/" },
  footerInfo: {
    theme: {
      name: "Powered by VitePress and Teek",
    },
    copyright: {
      createYear: 2024,
      suffix: "MTNetwork",
    },
  },
  articleUpdate: {
    enabled: false,
  },
  articleShare: { enabled: false },
  vitePlugins: {
    sidebarOption: {
      initItems: false,
      resolveRule: "rewrites",
    },
  },
});
