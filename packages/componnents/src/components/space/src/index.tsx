import { computed, defineComponent } from "vue";
import { prefix } from "@/utils";

export default defineComponent({
  name: `${prefix}space`,
  props: {
    size: {
      type: String,
      default: "medium",
      validator(val: string) {
        return ["small", "medium", "large"].includes(val);
      },
    },
    vertical: Boolean,
    gap: [String, Number],
  },
  setup(props, { slots }) {
    const getGap = computed(() => {
      if (props.gap) {
        if (typeof props.gap === "number") {
          return `${props.gap}px`;
        } else {
          return `${parseFloat(props.gap)}px`;
        }
      } else {
        return "";
      }
    });
    return () => {
      return (
        <div
          class={[
            "ivy-space",
            props.gap ? "" : `is-${props.size}`,
            { "is-vertical": props.vertical },
          ]}
          style={{ gap: getGap.value }}
        >
          {slots.default?.().map((c) => {
            return <div class="ivy-space-item">{c}</div>;
          })}
        </div>
      );
    };
  },
});
