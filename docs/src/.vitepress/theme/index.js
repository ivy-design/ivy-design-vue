import DefaultTheme from "vitepress/theme";
import "./common.css";
// import ivyUi from "@ivy-design/vue";
import "@ivy-design/vue/dist/style.css";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // extend default theme custom behaviors.
    DefaultTheme.enhanceApp(ctx);

    // register your custom global components
    if (!import.meta.env.SSR) {
      import("@ivy-design/vue").then((ivyUi) => {
        ctx.app.use(ivyUi.default);
      });
    }
  },
};
