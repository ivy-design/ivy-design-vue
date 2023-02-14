import DefaultTheme from "vitepress/theme";
import ivyUi from "@ivy-design/vue";
import "@ivy-design/vue/dist/style.css";

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        // extend default theme custom behaviors.
        DefaultTheme.enhanceApp(ctx);

        // register your custom global components
        ctx.app.use(ivyUi);
    },
};
