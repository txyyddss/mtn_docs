import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"在线状态与热力图","description":"说明主站的实时状态、周期采样与热力图应该怎样理解。","frontmatter":{"title":"在线状态与热力图","description":"说明主站的实时状态、周期采样与热力图应该怎样理解。","permalink":"/public-records/live-status"},"headers":[],"relativePath":"03.网站与公开记录/04.在线状态与热力图.md","filePath":"03.网站与公开记录/04.在线状态与热力图.md","lastUpdated":null}');
const _sfc_main = { name: "03.网站与公开记录/04.在线状态与热力图.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /03.网站与公开记录\\04.在线状态与热力图.md for this page in Markdown format</div><h1 id="在线状态与热力图" tabindex="-1">在线状态与热力图 <a class="header-anchor" href="#在线状态与热力图" aria-label="Permalink to &quot;在线状态与热力图&quot;">​</a></h1><p>主站把在线状态与周期性热力图作为公开信息的一部分，用来说明服务器当下是否在线，以及最近一段时间的活跃趋势。</p><h2 id="实时状态适合看什么" tabindex="-1">实时状态适合看什么 <a class="header-anchor" href="#实时状态适合看什么" aria-label="Permalink to &quot;实时状态适合看什么&quot;">​</a></h2><ul><li>服务器当前是否在线</li><li>基础负载或运行摘要是否正常</li><li>连接信息页是否可用</li></ul><p>它回答的是“现在怎么样”。</p><h2 id="热力图适合看什么" tabindex="-1">热力图适合看什么 <a class="header-anchor" href="#热力图适合看什么" aria-label="Permalink to &quot;热力图适合看什么&quot;">​</a></h2><ul><li>最近一周的大致活跃趋势</li><li>哪些时段更容易遇到其他玩家</li><li>活跃是否集中在少数时间窗口</li></ul><p>它回答的是“最近一段时间通常怎么样”。</p><h2 id="不要这样使用热力图" tabindex="-1">不要这样使用热力图 <a class="header-anchor" href="#不要这样使用热力图" aria-label="Permalink to &quot;不要这样使用热力图&quot;">​</a></h2><ul><li>把它当作精确签到工具</li><li>用它推断单个玩家的全部作息</li><li>把局部冷清时段误读成服务器没有长期活跃</li></ul><p>热力图本质上是公开采样的可视化，不是逐分钟行为记录。</p><h2 id="什么时候文档能帮上忙" tabindex="-1">什么时候文档能帮上忙 <a class="header-anchor" href="#什么时候文档能帮上忙" aria-label="Permalink to &quot;什么时候文档能帮上忙&quot;">​</a></h2><p>如果你看到热力图但不知道它表达的是什么，文档负责解释概念；如果你想看最新结果，则应直接打开主站页面。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>想确认当前是否值得立刻进入服务器，优先看主站实时状态；想估计常见活跃时段，再看热力图。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("03.网站与公开记录/04.在线状态与热力图.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _04_________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _04_________ as default
};
