import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Java 与 Bedrock 互通","description":"说明同服的含义、预期一致性与阅读主站记录时的理解方式。","frontmatter":{"title":"Java 与 Bedrock 互通","description":"说明同服的含义、预期一致性与阅读主站记录时的理解方式。","permalink":"/getting-started/crossplay"},"headers":[],"relativePath":"01.开始使用/03.Java 与 Bedrock 互通.md","filePath":"01.开始使用/03.Java 与 Bedrock 互通.md","lastUpdated":null}');
const _sfc_main = { name: "01.开始使用/03.Java 与 Bedrock 互通.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /01.开始使用\\03.Java 与 Bedrock 互通.md for this page in Markdown format</div><h1 id="java-与-bedrock-互通" tabindex="-1">Java 与 Bedrock 互通 <a class="header-anchor" href="#java-与-bedrock-互通" aria-label="Permalink to &quot;Java 与 Bedrock 互通&quot;">​</a></h1><p>MTNetwork 明确把 <code>Java and Bedrock</code> 作为公开能力展示。这意味着不同平台的玩家进入的是同一个世界，而不是两个相互隔离的服务器。</p><h2 id="同服-具体意味着什么" tabindex="-1">“同服”具体意味着什么 <a class="header-anchor" href="#同服-具体意味着什么" aria-label="Permalink to &quot;“同服”具体意味着什么&quot;">​</a></h2><ul><li>共同参与同一张地图与长期历史</li><li>共享公共建筑、交通、社区项目与公开记录</li><li>主站上的玩家页、排行榜、在线状态等记录以“同一公共世界”为前提</li></ul><h2 id="你应该有什么预期" tabindex="-1">你应该有什么预期 <a class="header-anchor" href="#你应该有什么预期" aria-label="Permalink to &quot;你应该有什么预期&quot;">​</a></h2><p>跨平台互通强调的是“进入同一个世界”，而不是“所有交互细节完全一致”。不同客户端在输入方式、界面表现、部分体验细节上仍然可能存在差异。</p><p>因此，阅读文档和主站时建议这样理解：</p><ul><li>世界历史是一致的</li><li>公共记录面向全体玩家</li><li>具体连接细节与操作体验仍以客户端类型为边界</li></ul><h2 id="阅读网站数据时要注意什么" tabindex="-1">阅读网站数据时要注意什么 <a class="header-anchor" href="#阅读网站数据时要注意什么" aria-label="Permalink to &quot;阅读网站数据时要注意什么&quot;">​</a></h2><p>主站上的公开记录更接近“服务器公共事实”，例如：</p><ul><li>某玩家是否在公开目录中出现</li><li>某个排行榜条目如何排序</li><li>某段时间的在线采样如何呈现</li></ul><p>这些记录并不会因为玩家来自 <code>Java Edition</code> 或 <code>Bedrock Edition</code> 而分裂成两套站点视角。</p><h2 id="新玩家的实际建议" tabindex="-1">新玩家的实际建议 <a class="header-anchor" href="#新玩家的实际建议" aria-label="Permalink to &quot;新玩家的实际建议&quot;">​</a></h2><ul><li>如果你使用 Java 客户端，优先关注主站里的 Java 连接说明</li><li>如果你使用 Bedrock 客户端，优先关注主站里的 Bedrock 连接说明</li><li>无论来自哪一端，进入世界后都应按统一的社区规则行动</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("01.开始使用/03.Java 与 Bedrock 互通.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _03_Java___Bedrock___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _03_Java___Bedrock___ as default
};
