import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"服务器简介","description":"MTNetwork 的基础定位、公开叙事与文档边界。","frontmatter":{"title":"服务器简介","description":"MTNetwork 的基础定位、公开叙事与文档边界。","permalink":"/getting-started/server-intro"},"headers":[],"relativePath":"01.开始使用/01.服务器简介.md","filePath":"01.开始使用/01.服务器简介.md","lastUpdated":null}');
const _sfc_main = { name: "01.开始使用/01.服务器简介.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden="true" aria-hidden="true">Are you an LLM? You can read better optimized documentation at /01.开始使用\\01.服务器简介.md for this page in Markdown format</div><h1 id="服务器简介" tabindex="-1">服务器简介 <a class="header-anchor" href="#服务器简介" aria-label="Permalink to &quot;服务器简介&quot;">​</a></h1><p>MTNetwork 是一个强调长期生存、公开记录和社区协作的 Minecraft 服务器。主站当前公开叙事集中在几个关键词上：</p><ul><li>非营利社区运营</li><li>原版优先生存</li><li>Java 与 Bedrock 同服</li><li>深圳独立硬件</li><li>玩家与世界记录公开可见</li></ul><p>这意味着文档的重点不是教你“如何速通服务器”，而是帮助你理解这个世界的节奏、加入前需要确认的事项，以及主站公开页面分别代表什么。</p><h2 id="文档覆盖范围" tabindex="-1">文档覆盖范围 <a class="header-anchor" href="#文档覆盖范围" aria-label="Permalink to &quot;文档覆盖范围&quot;">​</a></h2><p>当前公开文档主要覆盖以下内容：</p><ul><li>新玩家如何理解服务器定位</li><li>加入前需要确认的客户端与连接信息</li><li>Java / Bedrock 同服的基本认知</li><li>玩家在长期生存环境中的基础规则与行为边界</li><li><code>public.mcmtn.net</code> 上公开记录页面的用途说明</li></ul><div class="info custom-block"><p class="custom-block-title">信息</p><p>这套文档面向玩家与访客，不覆盖内部运维、后台管理或尚未公开的机制说明。</p></div><h2 id="这不是哪一类服务器" tabindex="-1">这不是哪一类服务器 <a class="header-anchor" href="#这不是哪一类服务器" aria-label="Permalink to &quot;这不是哪一类服务器&quot;">​</a></h2><p>为了避免预期偏差，可以先明确几点：</p><ul><li>这里不是快节奏赛季服</li><li>这里不是以捷径经济为核心的生存玩法</li><li>这里不是把网站当作单纯宣传页的项目</li></ul><p>主站把“one world, one history, one public record”作为叙事核心，说明网站记录与游戏世界本身是同一套公共历史的一部分。</p><h2 id="开始阅读建议" tabindex="-1">开始阅读建议 <a class="header-anchor" href="#开始阅读建议" aria-label="Permalink to &quot;开始阅读建议&quot;">​</a></h2><p>如果你是第一次接触 MTNetwork，建议按这个顺序阅读：</p><ol><li><a href="/getting-started/join.html">加入方式</a></li><li><a href="/getting-started/crossplay.html">Java 与 Bedrock 互通</a></li><li><a href="/getting-started/rules.html">基础规则</a></li><li><a href="/public-records/site-overview.html">网站总览</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("01.开始使用/01.服务器简介.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _01______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _01______ as default
};
