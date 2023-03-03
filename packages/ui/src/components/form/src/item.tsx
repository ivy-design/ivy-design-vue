import { defineComponent, inject, onMounted, ref, toRef } from "vue";
import { prefix } from "@/utils";

export default defineComponent({
  name: `${prefix}form-item`,
  props: {
    label: String,
    prop: String,
    labelWidth: String,
  },
  setup(props, { slots }) {
    const suffix = inject("labelSuffix", ref(""));

    const labelWidth = props.labelWidth
      ? toRef(props, "labelWidth")
      : inject("labelWidth", ref(""));

    const insertPropList: Function = inject("insertPropList", () => {});
    onMounted(() => {
      if (props.prop) {
        insertPropList(props.prop);
      }
    });
    return () => {
      return (
        <div class="ivy-form-item">
          <div class="ivy-form-item__label" style={{ width: labelWidth.value }}>
            {props.label ? `${props.label}${suffix.value}` : slots.label?.()}
          </div>
          <div class="ivy-form-item__content">
            {slots.default?.()}
            <div class="ivy-form-item__error">2321321</div>
          </div>
        </div>
      );
    };
  },
});
