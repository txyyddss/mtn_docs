import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"网站总览","description":"解释 public.mcmtn.net 的公开页面组成与阅读入口。","frontmatter":{"title":"网站总览","description":"解释 public.mcmtn.net 的公开页面组成与阅读入口。","permalink":"/public-records/site-overview"},"headers":[],"relativePath":"03.网站与公开记录/01.网站总览.md","filePath":"03.网站与公开记录/01.网站总览.md","lastUpdated":null}');
const _sfc_main = { name: "03.网站与公开记录/01.网站总览.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /03.网站与公开记录\\01.网站总览.md for this page in Markdown format</div><h1 id="网站总览" tabindex="-1">网站总览 <a class="header-anchor" href="#网站总览" aria-label="Permalink to &quot;网站总览&quot;">​</a></h1><p><code>public.mcmtn.net</code> 是 MTNetwork 的公开记录站点。它不是单纯的宣传首页，而是把服务器运行状态、玩家目录、排行榜、在线历史与世界截图组织成一个持续更新的公共入口。</p><h2 id="主站当前公开的主要区域" tabindex="-1">主站当前公开的主要区域 <a class="header-anchor" href="#主站当前公开的主要区域" aria-label="Permalink to &quot;主站当前公开的主要区域&quot;">​</a></h2><ul><li>首页：服务器定位、实时状态、连接说明、公开叙事入口</li><li>Players：玩家目录与单个玩家档案</li><li>Core Members：核心成员介绍</li><li>Gallery：世界截图与视觉档案</li></ul><h2 id="为什么文档站还需要说明主站" tabindex="-1">为什么文档站还需要说明主站 <a class="header-anchor" href="#为什么文档站还需要说明主站" aria-label="Permalink to &quot;为什么文档站还需要说明主站&quot;">​</a></h2><p>主站展示的是“结果”，文档站解释的是“这些结果该怎么理解”。例如：</p><ul><li>为什么玩家页会有部分统计字段</li><li>为什么排行榜不应该被当成唯一评价标准</li><li>在线热力图展示的是什么采样结果</li><li>画廊更接近公共世界档案，而不是宣传素材堆积</li></ul><h2 id="推荐阅读路径" tabindex="-1">推荐阅读路径 <a class="header-anchor" href="#推荐阅读路径" aria-label="Permalink to &quot;推荐阅读路径&quot;">​</a></h2><p>如果你第一次接触这些公开页面，建议按这个顺序理解：</p><ol><li><a href="/public-records/player-profiles.html">玩家档案</a></li><li><a href="/public-records/leaderboards.html">排行榜</a></li><li><a href="/public-records/live-status.html">在线状态与热力图</a></li><li><a href="/public-records/gallery.html">画廊</a></li></ol><h2 id="使用原则" tabindex="-1">使用原则 <a class="header-anchor" href="#使用原则" aria-label="Permalink to &quot;使用原则&quot;">​</a></h2><ul><li>把网站当作公开记录，不是全部真相的替代品</li><li>把趋势数据当作趋势，不是绝对判断</li><li>把公开页和游戏内长期历史放在一起理解</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("03.网站与公开记录/01.网站总览.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _01_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _01_____ as default
};
