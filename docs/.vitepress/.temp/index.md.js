import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MTNetwork Docs","titleTemplate":false,"description":"MTNetwork 的公开文档站，集中说明服务器定位、加入方式、社区规则，以及主站上的公开记录页面。","frontmatter":{"layout":"home","title":"MTNetwork Docs","titleTemplate":false,"description":"MTNetwork 的公开文档站，集中说明服务器定位、加入方式、社区规则，以及主站上的公开记录页面。","permalink":"/","hero":{"name":"MTNetwork Docs","text":"面向玩家与访客的公开文档","tagline":"非营利、原版优先、Java 与 Bedrock 同服。这里集中说明加入方式、基础规则，以及 public.mcmtn.net 的公开记录页面。","image":{"src":"/mtn-brand.png","alt":"MTNetwork"},"actions":[{"theme":"brand","text":"开始使用","link":"/getting-started/server-intro"},{"theme":"alt","text":"查看公开记录","link":"/public-records/site-overview"},{"theme":"alt","text":"打开主站","link":"https://public.mcmtn.net/"}]},"features":[{"icon":1,"title":"非营利社区运营","details":"服务器以长期生存和社区协作为核心，不以捷径经济和快消玩法为导向。"},{"icon":2,"title":"原版优先生存","details":"核心体验保持原版生存节奏，功能增强服务于公平与公开，而不是取代玩法本身。"},{"icon":3,"title":"Java 与 Bedrock 同服","details":"两端玩家进入同一世界，共享历史、建筑和公开记录。"},{"icon":4,"title":"主站公开记录","details":"玩家档案、排行榜、在线状态、热力图和画廊都在主站上持续公开。"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":null}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true">Are you an LLM? View /llms.txt for optimized Markdown documentation, or /llms-full.txt for full documentation bundle</div><div class="mtn-home-shell"><section class="mtn-home-section"><p class="mtn-home-kicker">Public docs</p><h2>这套文档说明什么</h2><p> MTNetwork Docs 不是后台手册，而是对玩家和访客开放的文档入口。它负责把服务器定位、加入方式、基础规则和主站功能说明整理成一套稳定、可检索的公开资料。 </p><div class="mtn-home-grid"><article class="mtn-home-card"><h3>开始使用</h3><p>先理解服务器定位，再确认自己的客户端版本、网络环境和接入方式。</p></article><article class="mtn-home-card"><h3>玩家指南</h3><p>说明社区节奏、公共设施、大型建造和基础安全边界，帮助新玩家快速进入长期生存。</p></article><article class="mtn-home-card"><h3>网站与公开记录</h3><p>解释主站上的玩家页、排行榜、在线状态、热力图与画廊分别公开什么信息、适合怎样使用。</p></article></div></section><section class="mtn-home-section"><p class="mtn-home-kicker">Server profile</p><h2>你会先看到的几个关键词</h2><div class="mtn-home-grid"><article class="mtn-home-card"><h3>长期生存</h3><p>主站公开叙事明确强调 long-term survival。这里的重点是持续建设与可追溯历史，而不是短周期赛季。</p></article><article class="mtn-home-card"><h3>深圳硬件</h3><p>主站将 Dedicated hardware in Shenzhen 作为公开事实展示，这决定了节点位置与部分连接体验的基线。</p></article><article class="mtn-home-card"><h3>公开记录</h3><p>玩家活跃、部分统计、排行榜和截图都会作为公开记录长期保留，这也是站点与文档需要互相配合的原因。</p></article></div></section><section class="mtn-home-section"><p class="mtn-home-kicker">Quick links</p><h2>从哪里继续</h2><div class="mtn-home-links"><a class="mtn-home-link" href="/getting-started/join"><strong>加入方式</strong><span>先看文档中的接入流程，再以主站连接信息页的实时内容为准。</span></a><a class="mtn-home-link" href="/public-records/player-profiles"><strong>玩家档案说明</strong><span>理解玩家页展示的数据范围、更新时间和公开边界。</span></a><a class="mtn-home-link" href="https://public.mcmtn.net/players" target="_blank" rel="noreferrer"><strong>打开玩家列表</strong><span>直接进入主站玩家目录，浏览公开档案与最近活跃记录。</span></a><a class="mtn-home-link" href="/faq/troubleshooting"><strong>连接与排错</strong><span>如果你已经准备连接，但遇到了版本、网络或账号侧的问题，从这里开始排查。</span></a></div></section></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
