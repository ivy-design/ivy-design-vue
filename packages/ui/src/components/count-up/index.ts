import countUp from "./src/index";
import type { App } from "vue";
countUp.install = (app: App) => {
    app.component(countUp.name, countUp);
};
export default countUp;
