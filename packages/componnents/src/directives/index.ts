import type { App } from "vue";
import resize from "./resize";

export const map = { resize };

export default (app: App) => {
  for (const item of Object.values(map)) {
    app.directive(item.name as string, item);
  }
};
