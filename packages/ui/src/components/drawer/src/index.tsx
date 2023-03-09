import {
  defineComponent,
  onBeforeUpdate,
  ref,
  Teleport,
  Transition,
  nextTick,
  type PropType,
} from "vue";
import { prefix } from "@/utils";

export type IvyDrawerPlacement = "left" | "right" | "top" | "bottom";

export default defineComponent({
  name: `${prefix}drawer`,
  props: {
    modelValue: Boolean,
    header: String,
    showMask: {
      type: Boolean,
      default: true,
    },
    maskClose: {
      type: Boolean,
      default: true,
    },
    teleported: Boolean,
    placement: {
      type: String as PropType<IvyDrawerPlacement>,
      default: "right",
      validator: (val: IvyDrawerPlacement) => {
        return ["left", "right", "top", "bottom"].includes(val);
      },
    },
    size: {
      type: String,
      default: "30%",
    },
  },
  setup(props, { slots, emit }) {
    const visible = ref(props.modelValue);

    const handleClose = () => {
      if (props.showMask && props.maskClose) {
        visible.value = false;
        emit("update:modelValue", false);
        emit("close");
      }
    };

    onBeforeUpdate(() => {
      nextTick(() => {
        if (props.modelValue !== visible.value) {
          visible.value = props.modelValue;
          if (props.modelValue) {
            emit("open");
          }
        }
      });
    });

    return () => {
      return (
        <Teleport to="body" disabled={!props.teleported}>
          <Transition>
            <div
              class={[`${prefix}drawer`, { "is-mask": props.showMask }]}
              style={{ "--ivy-drawer-size": props.size }}
              onClick={handleClose}
              v-show={visible.value}
            >
              <div
                class={`${prefix}drawer__wrapper`}
                data-placement={props.placement}
              >
                {slots.header?.() ?? (
                  <div class={`${prefix}drawer__header`}>{props.header}</div>
                )}
                <div class={`${prefix}drawer__body`}>{slots.default?.()}</div>
              </div>
            </div>
          </Transition>
        </Teleport>
      );
    };
  },
});
