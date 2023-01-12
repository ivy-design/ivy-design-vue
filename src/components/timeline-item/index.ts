import type { App } from "vue";
import TimelineItem from "./src/index";

TimelineItem.install = (app: App) => {
    app.component(TimelineItem.name, TimelineItem);
};

export default TimelineItem;
