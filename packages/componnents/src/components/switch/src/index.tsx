import { ref, onMounted, defineComponent, computed } from "vue";
import { prefix } from "@/utils/index";

export default defineComponent({
  name: `${prefix}switch`,
  props: {
    modelValue: {
      type: [Number, String, Boolean],
      default: false,
    },
    activeValue: {
      type: [String, String, Boolean],
      default: true,
    },
    inactiveValue: {
      type: [String, String, Boolean],
      default: false,
    },
    activeText: String,
    inactiveText: String,
    disabled: Boolean,
    name: String,
  },
  setup(props, { emit }) {
    const curValue = ref(props.modelValue);
    onMounted(() => {
      curValue.value = props.modelValue;
    });
    const handlerSwitch = () => {
      if (props.disabled) {
        return false;
      }
      if (curValue.value == props.activeValue) {
        curValue.value = props.inactiveValue;
      } else {
        curValue.value = props.activeValue;
      }

      emit("update:modelValue", curValue.value);
      emit("change", curValue.value);
      //   this.dispatch("foxFormItem", "on-form-change", this.curValue);
    };

    const isChecked = computed(() => {
      return curValue.value == props.activeValue;
    });
    const showText = computed(() => {
      return curValue.value == props.activeValue
        ? props.activeText
        : props.inactiveText;
    });
    return () => {
      return (
        <div
          class={[
            "ivy-switch",
            { "is-checked": isChecked.value },
            { "is-disabled": props.disabled },
          ]}
          onClick={handlerSwitch}
        >
          <input
            value={curValue.value}
            name={props.name}
            type="checkbox"
            hidden
          />
          <span class="ivy-switch__core">
            {props.activeText || props.inactiveText ? (
              <span v-if="activeText || inactiveText">{showText.value}</span>
            ) : null}
          </span>
        </div>
      );
    };
  },
});
