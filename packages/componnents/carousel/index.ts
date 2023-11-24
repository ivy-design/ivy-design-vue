import type { App } from "vue";
import Carousel from "./src/index";
import CarouselItem from "./src/item";

Carousel.item = CarouselItem;

Carousel.install = (app: App) => {
  app.component(Carousel.name, Carousel);
};

CarouselItem.install = (app: App) => {
  app.component(CarouselItem.name, CarouselItem);
};

export { Carousel, CarouselItem };
export default Carousel;
