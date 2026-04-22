import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"加入方式","description":"新玩家接入 MTNetwork 之前应确认的信息与流程。","frontmatter":{"title":"加入方式","description":"新玩家接入 MTNetwork 之前应确认的信息与流程。","permalink":"/getting-started/join"},"headers":[],"relativePath":"01.开始使用/02.加入方式.md","filePath":"01.开始使用/02.加入方式.md","lastUpdated":null}');
const _sfc_main = { name: "01.开始使用/02.加入方式.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /01.开始使用\\02.加入方式.md for this page in Markdown format</div><h1 id="加入方式" tabindex="-1">加入方式 <a class="header-anchor" href="#加入方式" aria-label="Permalink to &quot;加入方式&quot;">​</a></h1><p>加入 MTNetwork 之前，先把“信息来源”分清楚：</p><ul><li>文档站负责解释流程与规则</li><li>主站负责展示实时状态与公开记录</li><li>实际连接参数请以主站连接信息页为准</li></ul><h2 id="推荐流程" tabindex="-1">推荐流程 <a class="header-anchor" href="#推荐流程" aria-label="Permalink to &quot;推荐流程&quot;">​</a></h2><ol><li>阅读 <a href="/getting-started/server-intro.html">服务器简介</a>，确认自己要加入的是长期生存社区，而不是短周期玩法。</li><li>打开主站首页，查看实时状态面板与连接说明。</li><li>根据自己的客户端类型，确认使用 <code>Java Edition</code> 还是 <code>Bedrock Edition</code>。</li><li>在首次进入前阅读 <a href="/getting-started/rules.html">基础规则</a> 和 <a href="/player-guide/community-safety.html">社区与安全</a>。</li></ol><h2 id="加入前需要确认什么" tabindex="-1">加入前需要确认什么 <a class="header-anchor" href="#加入前需要确认什么" aria-label="Permalink to &quot;加入前需要确认什么&quot;">​</a></h2><h3 id="客户端类型" tabindex="-1">客户端类型 <a class="header-anchor" href="#客户端类型" aria-label="Permalink to &quot;客户端类型&quot;">​</a></h3><ul><li><code>Java Edition</code> 和 <code>Bedrock Edition</code> 都在同一世界中活动</li><li>不同客户端的连接细节可能不同，但最终进入的是同一个公共世界</li></ul><h3 id="网络与延迟" tabindex="-1">网络与延迟 <a class="header-anchor" href="#网络与延迟" aria-label="Permalink to &quot;网络与延迟&quot;">​</a></h3><p>主站公开说明中提到服务器节点位于深圳，因此你的实际体验会与网络运营商、地区与 IPv6 支持情况相关。</p><h3 id="账户与身份" tabindex="-1">账户与身份 <a class="header-anchor" href="#账户与身份" aria-label="Permalink to &quot;账户与身份&quot;">​</a></h3><p>文档不对外描述尚未公开的认证策略。若主站连接页或游戏入口有额外要求，请以当时页面提示为准。</p><h2 id="文档与主站如何配合" tabindex="-1">文档与主站如何配合 <a class="header-anchor" href="#文档与主站如何配合" aria-label="Permalink to &quot;文档与主站如何配合&quot;">​</a></h2><p>你可以把两者理解成：</p><ul><li>文档站：解释“为什么”和“怎么理解”</li><li>主站：提供“现在的公开状态是什么”</li></ul><p>例如，是否在线、最近活跃情况、玩家公开页入口、排行榜刷新结果，都应该去主站确认，而不是只看文档文本。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>如果你只是想快速确定当前能否连接，直接先看主站首页的实时状态模块。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("01.开始使用/02.加入方式.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _02_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _02_____ as default
};
