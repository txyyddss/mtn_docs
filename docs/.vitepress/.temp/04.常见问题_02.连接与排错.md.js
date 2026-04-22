import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"连接与排错","description":"当你准备连接 MTNetwork 但遇到常见问题时，应如何排查。","frontmatter":{"title":"连接与排错","description":"当你准备连接 MTNetwork 但遇到常见问题时，应如何排查。","permalink":"/faq/troubleshooting"},"headers":[],"relativePath":"04.常见问题/02.连接与排错.md","filePath":"04.常见问题/02.连接与排错.md","lastUpdated":null}');
const _sfc_main = { name: "04.常见问题/02.连接与排错.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /04.常见问题\\02.连接与排错.md for this page in Markdown format</div><h1 id="连接与排错" tabindex="-1">连接与排错 <a class="header-anchor" href="#连接与排错" aria-label="Permalink to &quot;连接与排错&quot;">​</a></h1><p>这份页面只处理公开层面最常见的问题。涉及未公开的接入策略或后台异常时，请以主站实时提示为准。</p><h2 id="第一步-先确认是不是-当前状态问题" tabindex="-1">第一步：先确认是不是“当前状态问题” <a class="header-anchor" href="#第一步-先确认是不是-当前状态问题" aria-label="Permalink to &quot;第一步：先确认是不是“当前状态问题”&quot;">​</a></h2><p>先看主站首页的实时状态面板。如果站点已经公开显示离线或维护中，优先等待状态恢复，而不是反复修改本地设置。</p><h2 id="第二步-确认客户端方向" tabindex="-1">第二步：确认客户端方向 <a class="header-anchor" href="#第二步-确认客户端方向" aria-label="Permalink to &quot;第二步：确认客户端方向&quot;">​</a></h2><ul><li>使用 <code>Java Edition</code> 的玩家，按主站 Java 连接说明处理</li><li>使用 <code>Bedrock Edition</code> 的玩家，按主站 Bedrock 连接说明处理</li></ul><p>不要混用连接信息。</p><h2 id="第三步-确认网络条件" tabindex="-1">第三步：确认网络条件 <a class="header-anchor" href="#第三步-确认网络条件" aria-label="Permalink to &quot;第三步：确认网络条件&quot;">​</a></h2><p>主站连接说明提示优先考虑 IPv6。若你的设备和网络支持 IPv6，优先按该方向排查；如果不支持，则按当前主站给出的替代方式处理。</p><h2 id="常见问题清单" tabindex="-1">常见问题清单 <a class="header-anchor" href="#常见问题清单" aria-label="Permalink to &quot;常见问题清单&quot;">​</a></h2><h3 id="看得到网站-但进不去服务器" tabindex="-1">看得到网站，但进不去服务器 <a class="header-anchor" href="#看得到网站-但进不去服务器" aria-label="Permalink to &quot;看得到网站，但进不去服务器&quot;">​</a></h3><p>通常先排查：</p><ul><li>当前服务器状态是否在线</li><li>自己使用的是否是正确平台的连接方式</li><li>网络是否阻断了所需协议或端口</li></ul><h3 id="能进站-但体验不稳定" tabindex="-1">能进站，但体验不稳定 <a class="header-anchor" href="#能进站-但体验不稳定" aria-label="Permalink to &quot;能进站，但体验不稳定&quot;">​</a></h3><p>优先考虑：</p><ul><li>本地网络波动</li><li>到深圳节点的链路质量</li><li>当前时段服务器负载与在线人数</li></ul><h3 id="页面链接正常-但某些公开数据没有刷新" tabindex="-1">页面链接正常，但某些公开数据没有刷新 <a class="header-anchor" href="#页面链接正常-但某些公开数据没有刷新" aria-label="Permalink to &quot;页面链接正常，但某些公开数据没有刷新&quot;">​</a></h3><p>这类问题通常更接近站点数据刷新节奏，而不是你本地的连接故障。建议先看该页面是否仍能正常打开，再观察是否只是更新延迟。</p><h2 id="反馈时请带上什么" tabindex="-1">反馈时请带上什么 <a class="header-anchor" href="#反馈时请带上什么" aria-label="Permalink to &quot;反馈时请带上什么&quot;">​</a></h2><p>如果你准备反馈问题，尽量同时提供：</p><ul><li>发生时间</li><li>客户端类型</li><li>遇到问题的页面或模块</li><li>是否可以稳定复现</li></ul><p>这样主站公开记录和文档说明才能一起帮助定位问题。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("04.常见问题/02.连接与排错.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _02______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _02______ as default
};
