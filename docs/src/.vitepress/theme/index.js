import DefaultTheme from "vitepress/theme";
import "./common.css";
import ivyDesign from "@ivy-design/vue";
import "@ivy-design/vue/dist/style.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    if (!import.meta.env.SSR) {
      app.use(ivyDesign);
    }
  },
};
