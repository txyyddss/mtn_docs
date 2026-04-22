<script setup lang="ts">
import { useRouter } from "vitepress";

const router = useRouter();
</script>

<template>
  <div class="mtn-not-found">
    <div class="mtn-not-found__panel">
      <p class="mtn-not-found__kicker">404 / Not Found</p>
      <h1>这个页面不在公开索引中</h1>
      <p>
        目标页面可能已经移动、尚未开放，或者链接本身已经失效。请返回首页，或从当前文档目录重新进入。
      </p>
      <div class="mtn-not-found__actions">
        <button type="button" @click="router.go('/')">返回首页</button>
        <a href="https://public.mcmtn.net/" target="_blank" rel="noreferrer">
          打开主站
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mtn-not-found {
  min-height: calc(100vh - var(--vp-nav-height));
  display: grid;
  place-items: center;
  padding: 2rem;

  &__panel {
    width: min(100%, 760px);
    padding: 2rem;
    border: 1px solid rgba(76, 147, 251, 0.22);
    border-radius: 28px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
    box-shadow: 0 28px 60px rgba(8, 15, 30, 0.26);
    backdrop-filter: blur(18px);
  }

  &__kicker {
    margin: 0 0 0.75rem;
    color: var(--vp-c-brand-1);
    font-size: 0.8rem;
    font-family: var(--vp-font-family-mono);
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  h1 {
    margin: 0 0 1rem;
    font-size: clamp(2.4rem, 5vw, 4rem);
    line-height: 1;
  }

  p {
    margin: 0;
    color: var(--vp-c-text-2);
    font-size: 1rem;
    line-height: 1.8;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem;
    margin-top: 1.5rem;
  }

  button,
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 132px;
    min-height: 44px;
    padding: 0 1.1rem;
    border-radius: 999px;
    border: 1px solid rgba(76, 147, 251, 0.22);
    background: rgba(76, 147, 251, 0.12);
    color: var(--vp-c-text-1);
    font: inherit;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.18s ease, border-color 0.18s ease, background 0.18s ease;
  }

  button:hover,
  a:hover {
    transform: translateY(-1px);
    border-color: rgba(76, 147, 251, 0.38);
    background: rgba(76, 147, 251, 0.18);
  }
}

@media (max-width: 640px) {
  .mtn-not-found {
    padding: 1rem;

    &__panel {
      padding: 1.5rem;
      border-radius: 22px;
    }
  }
}
</style>
