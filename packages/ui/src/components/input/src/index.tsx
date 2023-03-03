import { computed, defineComponent, ref } from "vue";
import { prefix, type IvySize } from "@/utils/index";
import FoxIcon from "@/components/icon";

export default defineComponent({
  name: `${prefix}input`,
  components: { FoxIcon },
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

    const showCloseIcon = computed(() => {
      return props.clearable && isFocus.value && curValue.value;
    });

    return () => {
      return (
        <div
          class={[
            "ivy-input",
            { "ivy-input--suffix": !!props.suffix || showCloseIcon },
            { "is-disabled": props.disabled },
            `ivy-input--${props.size}`,
          ]}
          onMouseenter={mouseEnter}
          onMouseleave={mouseLeave}
        >
          {props.type === "text" && props.prefix ? (
            <fox-icon name={props.prefix}></fox-icon>
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
              type="type"
              value={curValue.value}
              focus="fixed"
              blur="blur"
              input="inputs"
            />
          ) : (
            <input
              class="ivy-input__inner"
              max="max"
              min="min"
              placeholder={props.placeholder}
              disabled={props.disabled}
              type="type"
              value={curValue.value}
              focus="fixed"
              blur="blur"
              input="inputs"
            />
          )}

          {props.clearable || props.suffix ? (
            <div class="fox-input__suffix" v-if="clearable || suffixIcon">
              {slots.suffix?.(() =>
                props.suffix ? (
                  <fox-icon
                    class="fox-input__icon"
                    name={props.suffix}
                  ></fox-icon>
                ) : null
              )}
              {showCloseIcon.value ? (
                <fox-icon
                  name="close"
                  class="fox-input-close"
                  v-if="isClose"
                  onClick="clear"
                ></fox-icon>
              ) : null}
            </div>
          ) : null}
        </div>
      );
    };
  },
  data() {
    return {
      cur: this.value,
      isFocus: false,
    };
  },
  methods: {
    mouseEnter() {
      this.isFocus = true;
    },
    mouseLeave() {
      this.isFocus = false;
    },
    fixed(ev: Event) {
      this.$emit("focus", ev);
    },
    blur(ev: Event) {
      this.$emit("blur", ev);
      //   this.dispatch("FormItem", "on-form-blur", this.cur);
    },
    inputs(ev: any) {
      this.cur = ev.target?.value;
      this.$emit("change", this.cur);
      this.$emit("input", this.cur);
      //   this.dispatch("FormItem", "on-form-change", ev.target.value);
    },
    clear() {
      this.cur = null as any;
      this.$emit("change", this.cur);
      //   this.dispatch("FormItem", "on-form-change", this.cur);
      this.$emit("clear");
    },
  },
});
