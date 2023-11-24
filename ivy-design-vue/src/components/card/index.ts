import card from "./src/index";
import type { App } from "vue";

card.install = (app: App) => {
    app.component(card.name, card);
};
export default card;
