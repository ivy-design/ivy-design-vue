import { computed, defineComponent, ref } from "vue";
import { prefix, type IvySize } from "@/utils/index";
import IvyIcon from "@/components/icon";

export default defineComponent({
  name: `${prefix}input`,
  props: {
    modelValue: [String, Number],
    clearable: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    prefix: String,
    suffix: String,
    type: {
      type: String,
      default: "text",
    },
    size: {
      type: String,
      default: "medium",
      validator(value: IvySize) {
        return ["large", "small", "medium"].includes(value);
      },
    },
    max: Number,
    min: Number,
    placeholder: {
      type: String,
      default: "",
      required: false,
    },
  },
  setup(props, { slots, emit }) {
    const curValue = ref(props.modelValue);
    const isFocus = ref(false);

    const mouseEnter = () => {
      isFocus.value = true;
    };
    const mouseLeave = () => {
      isFocus.value = false;
    };

    const fixed = (ev: Event) => {
      emit("focus", ev);
    };
    const blur = (ev: Event) => {
      emit("blur", ev);
    };
    const inputs = (ev: any) => {
      curValue.value = ev.target?.value;
      emit("change", curValue.value);
      emit("input", curValue.value);
    };
    const clear = () => {
      curValue.value = null as any;
      emit("change", curValue.value);
      emit("clear");
    };

    const showCloseIcon = computed(() => {
      return props.clearable && isFocus.value && curValue.value;
    });

    return () => {
      return (
        <div
          class={[
            "ivy-input",
            { "ivy-input--suffix": !!props.suffix || showCloseIcon.value },
            { "is-disabled": props.disabled },
            `ivy-input--${props.size}`,
          ]}
          onMouseenter={mouseEnter}
          onMouseleave={mouseLeave}
        >
          {props.type === "text" && props.prefix ? (
            <IvyIcon name={props.prefix}></IvyIcon>
          ) : (
            slots.prefix?.()
          )}
          {props.readonly ? (
            <input
              readonly
              class="ivy-input__inner"
              max="max"
              min="min"
              placeholder={props.placeholder}
              disabled={props.disabled}
              type={props.type}
              value={curValue.value}
              onFocus={fixed}
              onBlur={blur}
              onInput={inputs}
            />
          ) : (
            <input
              class="ivy-input__inner"
              max="max"
              min="min"
              placeholder={props.placeholder}
              disabled={props.disabled}
              type={props.type}
              value={curValue.value}
              onFocus={fixed}
              onBlur={blur}
              onInput={inputs}
            />
          )}

          {props.clearable || props.suffix ? (
            <div class="ivy-input__suffix">
              {slots.suffix?.(() =>
                props.suffix ? (
                  <IvyIcon
                    class="ivy-input__icon"
                    name={props.suffix}
                  ></IvyIcon>
                ) : null
              )}
              {showCloseIcon.value ? (
                <IvyIcon
                  name="circle-close"
                  class="ivy-input-close"
                  onClick={clear}
                ></IvyIcon>
              ) : null}
            </div>
          ) : null}
        </div>
      );
    };
  },
});
