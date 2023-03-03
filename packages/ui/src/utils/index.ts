export const prefix = "ivy-";

export const isSupportCssAttribute = (attributeName: string) => {
  const el = document.createElement("div");
  const styles = getComputedStyle(el);
  return attributeName in styles ? true : false;
};

export const requestAnimation = (() => {
  return (
    window.requestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

export const cancelAnimation = (() => {
  return (
    window.cancelAnimationFrame ||
    function (timer) {
      window.clearTimeout(timer);
    }
  );
})();

export type { IvySize } from "./type";
