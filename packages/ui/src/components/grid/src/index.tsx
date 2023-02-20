import { defineComponent, onMounted, provide, ref } from "vue";
import { prefix } from "@/utils";

export default defineComponent({
  name: `${prefix}grid`,
  props: {
    columns: {
      type: Number,
      default: 3,
    },
    square: Boolean,
    border: Boolean,
  },
  setup(props, { slots }) {
    const width = ref<number>(0);
    const el = ref<HTMLElement | null>(null);
    provide("width", width);
    provide("square", props.square);
    provide("border", props.border);
    onMounted(() => {
      width.value = ((el.value?.getBoundingClientRect().width || 0) /
        props.columns) as number;
    });
    return () => {
      return (
        <div ref={el} class={["ivy-grid", { "is-border": props.border }]}>
          {slots.default?.()}
        </div>
      );
    };
  },
});
