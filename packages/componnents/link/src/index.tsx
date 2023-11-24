import { defineComponent } from "vue";
import { prefix } from "@/utils";

export default defineComponent({
  name: `${prefix}link`,
  props: {
    type: {
      type: String,
      default: "default",
      validator(value: string) {
        return ["default", "success", "danger", "warning", "info"].includes(
          value
        );
      },
    },
    href: String,
    disabled: Boolean,
    underline: Boolean,
  },
  setup(props, { slots }) {
    return () => {
      return (
        <a
          class={[
            "ivy-link",
            `ivy-link--${props.type}`,
            { "is-underline": props.underline, "is-disabled": props.disabled },
          ]}
        >
          {slots.default?.()}
        </a>
      );
    };
  },
});
