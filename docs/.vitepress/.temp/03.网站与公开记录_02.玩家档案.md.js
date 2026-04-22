import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"玩家档案","description":"玩家目录与单个玩家详情页分别展示什么，以及该如何阅读。","frontmatter":{"title":"玩家档案","description":"玩家目录与单个玩家详情页分别展示什么，以及该如何阅读。","permalink":"/public-records/player-profiles"},"headers":[],"relativePath":"03.网站与公开记录/02.玩家档案.md","filePath":"03.网站与公开记录/02.玩家档案.md","lastUpdated":null}');
const _sfc_main = { name: "03.网站与公开记录/02.玩家档案.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /03.网站与公开记录\\02.玩家档案.md for this page in Markdown format</div><h1 id="玩家档案" tabindex="-1">玩家档案 <a class="header-anchor" href="#玩家档案" aria-label="Permalink to &quot;玩家档案&quot;">​</a></h1><p>玩家档案是主站最核心的公开入口之一。它把玩家目录、基本信息、部分统计、成就与活跃痕迹组织成可浏览页面，让“谁曾在这个世界出现过”变得可以公开查询。</p><h2 id="玩家目录页通常适合做什么" tabindex="-1">玩家目录页通常适合做什么 <a class="header-anchor" href="#玩家目录页通常适合做什么" aria-label="Permalink to &quot;玩家目录页通常适合做什么&quot;">​</a></h2><ul><li>搜索玩家名称</li><li>浏览近期出现的公开记录</li><li>从公开名册跳转到个人详情</li></ul><p>它更像是“公共索引”，适合先定位人，再看详情。</p><h2 id="单个玩家页通常包含什么" tabindex="-1">单个玩家页通常包含什么 <a class="header-anchor" href="#单个玩家页通常包含什么" aria-label="Permalink to &quot;单个玩家页通常包含什么&quot;">​</a></h2><p>根据主站当前结构，玩家详情页会围绕以下内容组织：</p><ul><li>基本信息与首次/最近出现时间</li><li>在线或离线状态摘要</li><li>成就与统计分类</li><li>McMMO 等技能或排行相关信息</li><li>周期性在线记录</li></ul><h2 id="正确理解方式" tabindex="-1">正确理解方式 <a class="header-anchor" href="#正确理解方式" aria-label="Permalink to &quot;正确理解方式&quot;">​</a></h2><h3 id="它是公开档案-不是完整履历" tabindex="-1">它是公开档案，不是完整履历 <a class="header-anchor" href="#它是公开档案-不是完整履历" aria-label="Permalink to &quot;它是公开档案，不是完整履历&quot;">​</a></h3><p>玩家页展示的是站点选择公开的一组字段，足够构成“公共记录”，但不等于完整行为日志。</p><h3 id="它适合看趋势与参与痕迹" tabindex="-1">它适合看趋势与参与痕迹 <a class="header-anchor" href="#它适合看趋势与参与痕迹" aria-label="Permalink to &quot;它适合看趋势与参与痕迹&quot;">​</a></h3><p>例如：</p><ul><li>某个玩家是否长期活跃</li><li>某类统计是否特别突出</li><li>某段时间是否在公共世界里持续参与</li></ul><h3 id="它不适合脱离上下文单独判断" tabindex="-1">它不适合脱离上下文单独判断 <a class="header-anchor" href="#它不适合脱离上下文单独判断" aria-label="Permalink to &quot;它不适合脱离上下文单独判断&quot;">​</a></h3><p>一个排行位置、某项统计的高低，往往需要结合玩家角色、项目类型和时间跨度来理解。</p><h2 id="什么时候去主站看" tabindex="-1">什么时候去主站看 <a class="header-anchor" href="#什么时候去主站看" aria-label="Permalink to &quot;什么时候去主站看&quot;">​</a></h2><p>当你需要查看实时或最新公开记录时，应直接打开主站玩家页，而不是只看文档描述。文档只负责解释页面的阅读方式。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("03.网站与公开记录/02.玩家档案.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _02_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _02_____ as default
};
