import DefaultTheme from "vitepress/theme";
import { button } from "ivy-design";
import "ivy-design/dist/style.css";

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        // extend default theme custom behaviors.
        DefaultTheme.enhanceApp(ctx);

        // register your custom global components
        ctx.app.use(button);
    },
};
