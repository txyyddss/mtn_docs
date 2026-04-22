import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"排行榜","description":"排行榜的用途、局限与阅读建议。","frontmatter":{"title":"排行榜","description":"排行榜的用途、局限与阅读建议。","permalink":"/public-records/leaderboards"},"headers":[],"relativePath":"03.网站与公开记录/03.排行榜.md","filePath":"03.网站与公开记录/03.排行榜.md","lastUpdated":null}');
const _sfc_main = { name: "03.网站与公开记录/03.排行榜.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /03.网站与公开记录\\03.排行榜.md for this page in Markdown format</div><h1 id="排行榜" tabindex="-1">排行榜 <a class="header-anchor" href="#排行榜" aria-label="Permalink to &quot;排行榜&quot;">​</a></h1><p>排行榜是公开记录中最容易被误读的一部分。它很直观，但也最容易让人把“可统计”误当成“最重要”。</p><h2 id="排行榜适合回答什么问题" tabindex="-1">排行榜适合回答什么问题 <a class="header-anchor" href="#排行榜适合回答什么问题" aria-label="Permalink to &quot;排行榜适合回答什么问题&quot;">​</a></h2><ul><li>哪些数据当前有公开排序</li><li>某位玩家在某项统计上的相对位置</li><li>某个分类是否已经积累出足够的公开样本</li></ul><h2 id="它不适合回答什么问题" tabindex="-1">它不适合回答什么问题 <a class="header-anchor" href="#它不适合回答什么问题" aria-label="Permalink to &quot;它不适合回答什么问题&quot;">​</a></h2><ul><li>谁对服务器“贡献最大”</li><li>谁的玩法“更正确”</li><li>谁更值得被优先评价</li></ul><p>这些问题超出了公开统计本身。</p><h2 id="推荐阅读方式" tabindex="-1">推荐阅读方式 <a class="header-anchor" href="#推荐阅读方式" aria-label="Permalink to &quot;推荐阅读方式&quot;">​</a></h2><h3 id="先看分类-再看名次" tabindex="-1">先看分类，再看名次 <a class="header-anchor" href="#先看分类-再看名次" aria-label="Permalink to &quot;先看分类，再看名次&quot;">​</a></h3><p>先确认这份榜单排的是什么，再讨论名次。因为不同分类反映的是完全不同的活动类型。</p><h3 id="看时间跨度-不只看瞬时位置" tabindex="-1">看时间跨度，不只看瞬时位置 <a class="header-anchor" href="#看时间跨度-不只看瞬时位置" aria-label="Permalink to &quot;看时间跨度，不只看瞬时位置&quot;">​</a></h3><p>如果你只看某次刷新，很容易误判。更稳妥的方式是结合玩家页、在线记录和公共项目背景一起看。</p><h3 id="把排行榜当作入口" tabindex="-1">把排行榜当作入口 <a class="header-anchor" href="#把排行榜当作入口" aria-label="Permalink to &quot;把排行榜当作入口&quot;">​</a></h3><p>排行榜最有价值的地方，往往不是名次本身，而是它帮你发现：</p><ul><li>哪些玩家在某类活动中长期投入</li><li>哪些统计项目最能反映服务器当前的公开趋势</li></ul><h2 id="和文档的关系" tabindex="-1">和文档的关系 <a class="header-anchor" href="#和文档的关系" aria-label="Permalink to &quot;和文档的关系&quot;">​</a></h2><p>文档不会复述每一个榜单字段，而是帮助你建立阅读原则。具体榜单内容请以主站实时页面为准。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("03.网站与公开记录/03.排行榜.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _03____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _03____ as default
};
