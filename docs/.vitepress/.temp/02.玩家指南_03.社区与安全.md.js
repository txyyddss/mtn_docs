import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"社区与安全","description":"面向公开玩家的沟通方式、隐私边界与基本安全建议。","frontmatter":{"title":"社区与安全","description":"面向公开玩家的沟通方式、隐私边界与基本安全建议。","permalink":"/player-guide/community-safety"},"headers":[],"relativePath":"02.玩家指南/03.社区与安全.md","filePath":"02.玩家指南/03.社区与安全.md","lastUpdated":null}');
const _sfc_main = { name: "02.玩家指南/03.社区与安全.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /02.玩家指南\\03.社区与安全.md for this page in Markdown format</div><h1 id="社区与安全" tabindex="-1">社区与安全 <a class="header-anchor" href="#社区与安全" aria-label="Permalink to &quot;社区与安全&quot;">​</a></h1><p>MTNetwork 的公开站点会展示部分玩家活动与世界记录，因此“社区与安全”不仅包含聊天礼仪，也包含如何看待公开信息。</p><h2 id="社区沟通建议" tabindex="-1">社区沟通建议 <a class="header-anchor" href="#社区沟通建议" aria-label="Permalink to &quot;社区沟通建议&quot;">​</a></h2><ul><li>讨论问题时尽量描述事实，而不是只给结论</li><li>对新玩家保持清晰、可验证的说明方式</li><li>不要把站内记录断章取义地当成对他人的单向判断</li></ul><h2 id="理解公开信息的边界" tabindex="-1">理解公开信息的边界 <a class="header-anchor" href="#理解公开信息的边界" aria-label="Permalink to &quot;理解公开信息的边界&quot;">​</a></h2><p>主站上的公开记录主要服务于透明和可回溯，而不是制造额外压力。阅读这些页面时建议注意：</p><ul><li>玩家页展示的是站点选择公开的字段，不等于玩家的全部行为</li><li>排行榜反映的是可统计项目，不等于“综合价值”</li><li>在线热力图和活跃采样更适合作为趋势参考，而不是个人判断工具</li></ul><h2 id="你的安全建议" tabindex="-1">你的安全建议 <a class="header-anchor" href="#你的安全建议" aria-label="Permalink to &quot;你的安全建议&quot;">​</a></h2><ul><li>不要随意相信他人提供的非官方连接信息</li><li>涉及接入方式时，以主站当前页面为准</li><li>遇到异常链接、异常下载或陌生跳转时，先停下来确认来源</li></ul><h2 id="发现问题时" tabindex="-1">发现问题时 <a class="header-anchor" href="#发现问题时" aria-label="Permalink to &quot;发现问题时&quot;">​</a></h2><p>如果你遇到内容异常、记录错误、链接失效或明显的公开信息问题，建议：</p><ol><li>确认问题是否能稳定复现</li><li>记录页面、时间和必要截图</li><li>通过公开渠道反馈，而不是只在聊天中口头转述</li></ol><p>这样能让“公开记录”继续保持可信，而不是变成模糊印象的堆积。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02.玩家指南/03.社区与安全.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _03______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _03______ as default
};
