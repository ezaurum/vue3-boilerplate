import { App } from "vue";
import { i18n } from "@/i18n";
import { createPinia } from "pinia";
import "animate.css";

export const setPlugins = (app: App) => {
  app.use(createPinia());
  app.use(i18n);
  return {
    i18n,
  };
};

//--vh 핵 사용
(function initInnerVH() {
  const setVHWithWindowHeight = () => {
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  setVHWithWindowHeight();
  window.addEventListener("resize", setVHWithWindowHeight);
})();
