import type { App } from "vue";
import Grid from "./src/index";
import GridItem from "./src/item";

Grid.item = GridItem;

Grid.install = (app: App): void => {
  app.component(Grid.name, Grid);
};

GridItem.install = (app: App): void => {
  app.component(GridItem.name, GridItem);
};

export { Grid, GridItem };
export default Grid;
