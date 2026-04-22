import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";
import { teekConfig } from "./teekConfig";

const siteTitle = "MTNetwork Docs";
const siteDescription =
  "MTNetwork 的文档站。";
const siteUrl = "https://docs.mcmtn.net";
const ogImage = `${siteUrl}/mtn-brand.png`;

const resolvePagePath = (relativePath: string) => {
  const routePath = `/${relativePath}`
    .replace(/(^|\/)index\.md$/, "/")
    .replace(/\.md$/, "");

  return routePath === "" ? "/" : routePath;
};

const resolveAbsoluteUrl = (path: string) => {
  const normalizedPath = path === "/" ? "/" : path.replace(/\/$/, "");
  return `${siteUrl}${normalizedPath}`;
};

export default defineConfig({
  extends: teekConfig,
  title: siteTitle,
  description: siteDescription,
  cleanUrls: false,
  lastUpdated: true,
  lang: "zh-CN",
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/mtn-brand.png" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Instrument+Sans:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600;700&display=swap",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh_CN" }],
    ["meta", { property: "og:site_name", content: siteTitle }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { name: "description", content: siteDescription }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "MTNetwork,Minecraft,生存服,公开文档,玩家指南,Java,Bedrock",
      },
    ],
    ["meta", { name: "author", content: "MTNetwork Team" }],
  ],
  transformHead: (context) => {
    const permalink = context.pageData.frontmatter?.permalink;
    const pagePath =
      typeof permalink === "string"
        ? permalink
        : resolvePagePath(context.pageData.relativePath);
    const pageUrl = resolveAbsoluteUrl(pagePath);
    const pageTitle = context.pageData.title
      ? `${context.pageData.title} | ${siteTitle}`
      : siteTitle;
    const description =
      context.pageData.description || context.description || siteDescription;

    return [
      ["link", { rel: "canonical", href: pageUrl }],
      ["meta", { property: "og:url", content: pageUrl }],
      ["meta", { property: "og:title", content: pageTitle }],
      ["meta", { property: "og:description", content: description }],
      ["meta", { name: "twitter:card", content: "summary_large_image" }],
      ["meta", { name: "twitter:title", content: pageTitle }],
      ["meta", { name: "twitter:description", content: description }],
      ["meta", { name: "twitter:image", content: ogImage }],
    ];
  },
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
    container: {
      tipLabel: "提示",
      warningLabel: "注意",
      dangerLabel: "风险",
      infoLabel: "信息",
      detailsLabel: "详细说明",
    },
  },
  sitemap: {
    hostname: siteUrl,
    transformItems: (items) => {
      const permalinks = (globalThis as any).VITEPRESS_CONFIG.site.themeConfig
        .permalinks;
      const extraItems: typeof items = [];

      items.forEach((item) => {
        const permalink = permalinks?.map[item.url];
        if (permalink) extraItems.push({ url: permalink, lastmod: item.lastmod });
      });

      return [...items, ...extraItems];
    },
  },
  themeConfig: {
    logo: "/mtn-brand.png",
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "文档目录",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "最后更新",
    outline: {
      level: [2, 3],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      { text: "首页", link: "/" },
      {
        text: "开始使用",
        link: "/getting-started/server-intro",
        activeMatch: "^/getting-started/",
      },
      {
        text: "玩家指南",
        link: "/player-guide/survival-philosophy",
        activeMatch: "^/player-guide/",
      },
      {
        text: "网站与公开记录",
        link: "/public-records/site-overview",
        activeMatch: "^/public-records/",
      },
      {
        text: "常见问题",
        link: "/faq/common-questions",
        activeMatch: "^/faq/",
      },
      {
        text: "主站",
        link: "https://public.mcmtn.net/",
      },
    ],
    sidebar: {
      "/getting-started/": [
        {
          text: "开始使用",
          items: [
            { text: "服务器简介", link: "/getting-started/server-intro" },
            { text: "加入方式", link: "/getting-started/join" },
            { text: "Java 与 Bedrock 互通", link: "/getting-started/crossplay" },
            { text: "基础规则", link: "/getting-started/rules" },
          ],
        },
      ],
      "/player-guide/": [
        {
          text: "玩家指南",
          items: [
            { text: "生存理念", link: "/player-guide/survival-philosophy" },
            { text: "公共设施与大型建造", link: "/player-guide/public-builds" },
            { text: "社区与安全", link: "/player-guide/community-safety" },
            { text: "反馈问题", link: "/player-guide/report-issue" },
          ],
        },
      ],
      "/public-records/": [
        {
          text: "网站与公开记录",
          items: [
            { text: "网站总览", link: "/public-records/site-overview" },
            { text: "玩家档案", link: "/public-records/player-profiles" },
            { text: "排行榜", link: "/public-records/leaderboards" },
            { text: "在线状态与热力图", link: "/public-records/live-status" },
            { text: "画廊", link: "/public-records/gallery" },
          ],
        },
      ],
      "/faq/": [
        {
          text: "常见问题",
          items: [
            { text: "常见问题", link: "/faq/common-questions" },
            { text: "连接与排错", link: "/faq/troubleshooting" },
          ],
        },
      ],
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "没有找到匹配结果",
            resetButtonTitle: "清空查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
    editLink: false,
    footer: {
      message:
        "MTNetwork 面向玩家的文档站，帮助您更好地了解我们的服务器。",
      copyright: "Copyright © 2024-present MTNetwork",
    },
  },
  vite: {
    plugins: [llmstxt() as any],
  },
});
