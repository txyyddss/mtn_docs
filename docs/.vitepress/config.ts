import { readFileSync, readdirSync } from "node:fs";
import { dirname, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";
import { teekConfig } from "./teekConfig";

const siteTitle = "MTNetwork Docs";
const siteDescription =
  "MTNetwork 面向玩家与访客的公开文档。";
const siteUrl = "https://docs.mcmtn.net";
const logoPath = "/mtn-brand.png";
const ogImage = `${siteUrl}/mtn-brand.png`;
const docsRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const normalizeFilePath = (filePath: string) => filePath.split(sep).join("/");

const walkMarkdownFiles = (directory: string): string[] => {
  const entries = readdirSync(directory, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    if (entry.name === ".vitepress" || entry.name === "public") continue;

    const absolutePath = resolve(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...walkMarkdownFiles(absolutePath));
      continue;
    }

    if (entry.isFile() && absolutePath.endsWith(".md")) {
      files.push(absolutePath);
    }
  }

  return files;
};

const extractPermalink = (source: string) => {
  const frontmatterMatch = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatterMatch) return;

  const permalinkMatch = frontmatterMatch[1].match(/^permalink:\s*(.+)$/m);
  if (!permalinkMatch) return;

  return permalinkMatch[1].trim().replace(/^['"]|['"]$/g, "");
};

const normalizeRewriteTarget = (permalink: string) => {
  if (permalink === "/") return "index.md";
  return `${permalink.replace(/^\/+|\/+$/g, "")}.md`;
};

const createPermalinkRewrites = () => {
  const rewrites: Record<string, string> = {};

  for (const filePath of walkMarkdownFiles(docsRoot)) {
    const relativePath = normalizeFilePath(relative(docsRoot, filePath));
    const permalink = extractPermalink(readFileSync(filePath, "utf8"));

    if (!permalink) continue;
    rewrites[relativePath] = normalizeRewriteTarget(permalink);
  }

  return rewrites;
};

const rewrites = createPermalinkRewrites();

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
  rewrites,
  head: [
    ["link", { rel: "icon", type: "image/png", href: logoPath }],
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
    logo: logoPath,
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
        text: "腐竹的奇思妙想",
        link: "/brainstorm/currency",
        activeMatch: "^/brainstorm/",
      },
      {
        text: "主站",
        link: "https://public.mcmtn.net/",
      },
    ],
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
        "MTNetwork Docs 面向公开玩家与访客，文档内容以主站实际页面与公告为准。",
      copyright: "Copyright © 2024-present MTNetwork",
    },
  },
});
