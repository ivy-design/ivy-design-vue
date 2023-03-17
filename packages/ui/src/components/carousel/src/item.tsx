import { defineComponent } from "vue";
import { prefix } from "@/utils";

export default defineComponent({
  name: `${prefix}carousel-item`,
  props: {},
  setup(props, { slots }) {
    return () => {
      return <div class="ivy-carousel--item">{slots.default?.()}</div>;
    };
  },
});
