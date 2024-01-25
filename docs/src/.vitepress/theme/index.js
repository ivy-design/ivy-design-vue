import DefaultTheme from "vitepress/theme";
import "./common.css";
import ivyDesign from "@ivy-design/vue";
import "@ivy-design/vue/dist/style.css";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // extend default theme custom behaviors.
    DefaultTheme.enhanceApp(ctx);

    // register your custom global components
    if (!import.meta.env.SSR) {
      ctx.app.use(ivyDesign);
    }
  },
};
