import VirtualList from "./src/index";
import VirtualListItem from "./src/item";
import type { App } from "vue";

VirtualList.install = (app: App) => {
    app.component(VirtualList.name, VirtualList);
    app.component(VirtualListItem.name, VirtualListItem);
};
export { VirtualList, VirtualListItem };
export default VirtualList;
