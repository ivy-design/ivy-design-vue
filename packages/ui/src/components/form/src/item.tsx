import { defineComponent, inject, onMounted } from "vue";
import { prefix } from "@/utils";

export default defineComponent({
  name: `${prefix}form-item`,
  props: {
    label: String,
    prop: String,
  },
  setup(props, { slots }) {
    const insertPropList: Function = inject("insertPropList", () => {});
    onMounted(() => {
      if (props.prop) {
        insertPropList(props.prop);
      }
    });
    return () => {
      return (
        <div class="ivy-form-item">
          <div class="ivy-form-item--wrap">
            <div class="ivy-form-item--label">
              {props.label ?? slots.label?.()}
            </div>
            <div class="ivy-form-item--content">{slots.default?.()}</div>
          </div>
          <div class="ivy-form-item--message"></div>
        </div>
      );
    };
  },
});
