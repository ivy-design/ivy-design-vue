import { computed, defineComponent, onMounted, ref, Transition } from "vue";
import { prefix, type IvyTheme } from "@/utils/index";
import usePopper from "@/use/usePopper";

const prefixCls = "ivy-tooltip";

export type IvyPopperPlacement =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end";

export default defineComponent({
  name: `${prefix}tooltip`,
  props: {
    placement: {
      validator(value: IvyPopperPlacement) {
        const types = [
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
          "left",
          "left-start",
          "left-end",
          "right",
          "right-start",
          "right-end",
        ];
        return types.includes(value);
      },
      default: "bottom",
    },
    content: {
      type: [String, Number],
      default: "",
    },
    delay: {
      type: Number,
      default: 100,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    controlled: {
      // under this prop,Tooltip will not close when mouseleave
      type: Boolean,
      default: false,
    },
    always: {
      type: Boolean,
      default: false,
    },
    transfer: {
      type: Boolean,
    },
    theme: {
      validator(value: IvyTheme) {
        return ["dark", "light"].includes(value);
      },
      default: "dark",
    },
    maxWidth: String,
  },

  setup(props, { slots }) {
    const conf = computed(() => {
      return {
        placement: props.placement,
      };
    });
    const {
      visible,
      targetRef,
      triggerRef,
      arrowRef,
      initPopper,
      updatePopper,
    } = usePopper(conf.value);
    const timeout = ref<any>(null);
    const handleShowPopper = () => {
      if (timeout.value) clearTimeout(timeout.value);
      timeout.value = setTimeout(() => {
        visible.value = true;
        updatePopper();
      }, props.delay);
    };
    const handleClosePopper = () => {
      if (timeout.value) {
        clearTimeout(timeout.value);
        if (!props.controlled) {
          timeout.value = setTimeout(() => {
            visible.value = false;
          }, 100);
        }
      }
    };
    onMounted(() => {
      initPopper();
    });
    return () => {
      return (
        <div
          class={prefixCls}
          onMouseenter={handleShowPopper}
          onMouseleave={handleClosePopper}
        >
          <div class={[prefixCls + "-rel"]} ref={triggerRef}>
            {slots.default?.()}
          </div>
          <Transition name="fade">
            <div
              class={[prefixCls + "-popper", prefixCls + "-" + props.theme]}
              ref={targetRef}
              v-show={!props.disabled && (visible.value || props.always)}
              onMouseenter={handleShowPopper}
              onMouseleave={handleClosePopper}
              data-transfer="transfer"
            >
              <div class={[prefixCls + "-arrow"]} ref={arrowRef}></div>
              <div
                class={`${prefixCls}-inner`}
                style={{ maxWidth: props.maxWidth }}
              >
                {slots.content?.() ?? props.content}
              </div>
            </div>
          </Transition>
        </div>
      );
    };
  },
  computed: {
    innerClasses() {
      return [
        `${prefixCls}-inner`,
        {
          [`${prefixCls}-inner-with-width`]: !!this.maxWidth,
        },
      ];
    },
  },
});
