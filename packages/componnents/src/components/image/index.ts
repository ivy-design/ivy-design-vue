import Image from "./src/index";
import type { App } from "vue";

Image.install = (app: App) => {
  app.component(Image.name, Image);
};

export default Image;
