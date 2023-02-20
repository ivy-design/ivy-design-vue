import Grid from "./src/index";
import GridItem from "./src/item";
import type { App } from "vue";

Grid.install = (app: App) => {
  app.component(Grid.name, Grid);
};
GridItem.install = (app: App) => {
  app.component(GridItem.name, GridItem);
};

export { Grid, GridItem };

export default Grid;
