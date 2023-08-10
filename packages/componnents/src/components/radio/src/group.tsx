import { defineComponent, provide, ref, toRef, getCurrentInstance } from "vue";
import { prefix } from "@/utils/index";

export type IvyRadioGroupValue = string | number | boolean;

export default defineComponent({
  name: `${prefix}radio-group`,

  props: {
    modelValue: {
      type: [Number, String, Boolean],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: [String, Number],
  },
  setup(props, { slots, emit }) {
    const vm: any = getCurrentInstance();

    const curValue = ref(props.modelValue);
    const updateValue = (val: IvyRadioGroupValue) => {
      curValue.value = val;
      emit("update:modelValue", curValue.value);
      emit("change", curValue.value);
    };
    provide("updateGroupValue", updateValue);
    provide("disabled", toRef(props, "disabled"));
    provide("value", curValue);
    provide(
      "name",
      props.name ? toRef(props, "name") : ref("ivy-radio-name" + vm.uid)
    );
    provide("hasParent", true);

    return () => {
      return <div class="ivy-radio-group">{slots.default?.()}</div>;
    };
  },
});
