import type { App, Component } from "vue";
import Icon from "./icon/index";
import Button from "./button/index";

const components: Component[] = [Icon, Button];

export { Icon, Button };

export default (app: App) => {
    components.forEach(comp => {
        app.component(comp.name as string, comp);
    });
};
