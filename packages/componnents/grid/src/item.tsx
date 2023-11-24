import { defineComponent, ref, onMounted, type PropType } from "vue";
import { prefix } from "@/utils";

export type IvyGridMode = "grid" | "flex";

export default defineComponent({
  name: `${prefix}grid-item`,
  props: {
    mode: {
      type: String as PropType<IvyGridMode>,
      default: "grid",
      validator: (val: string) => {
        return ["grid", "flex"].includes(val);
      },
    },
  },
  setup(props, { slots }) {
    return () => <div class={["ivy-grid-item"]}>{slots.default?.()}</div>;
  },
});
