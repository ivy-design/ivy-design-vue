import Avatar from "./src/index";
import type { App } from "vue";

Avatar.install = (app: App) => {
  app.component(Avatar.name, Avatar);
};
export default Avatar;
