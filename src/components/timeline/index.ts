import type { App } from "vue";
import Timeline from "./src/index";

Timeline.install = (app: App) => {
    app.component(Timeline.name, Timeline);
};

export default Timeline;
