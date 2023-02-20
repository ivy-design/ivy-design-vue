import { defineComponent, inject, computed } from "vue";
import { prefix } from "@/utils";

export default defineComponent({
  name: `${prefix}grid-item`,
  props: {},
  setup(props, { slots }) {
    const width: any = inject("width");
    const square = inject("square");
    const border = inject("border");
    console.log(width, square);

    const getStyle = computed(() => {
      if (square) {
        return { height: `${width.value}px`, width: `${width.value}px` };
      } else {
        return { width: `${width.value}px` };
      }
    });

    return () => {
      return (
        <div
          class={["ivy-grid-item", { "is-border": border }]}
          style={{ ...getStyle.value }}
        >
          {slots.default?.()}
        </div>
      );
    };
  },
});
