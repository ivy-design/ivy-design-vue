import { computed, inject, defineComponent } from "vue";
import { prefix } from "@/utils";

export default defineComponent({
  name: `${prefix}step`,
  props: {
    header: String,
    status: {
      type: String,
      validator(val: string) {
        return ["wait", "process", "finish", "error"].includes(val);
      },
    },
    description: String,
  },
  data() {
    return {
      index: 0,
      state: "wait",
    };
  },
  setup(props, { slots }) {
    const generateIndex: any = inject("generateIndex");

    const index = generateIndex();
    const active: any = inject("active");
    const parentStatus: any = inject("status");

    const isFinish = computed(() => {
      return active.value < index;
    });

    const getCurrStatus = computed(() => {
      let state = "wait";
      if (active.value > index) {
        state = parentStatus.value;
      } else if (active.value === index) {
        state = props.status || parentStatus.value;
      } else {
        state = "wait";
      }
      return state;
    });

    const renderIcon = () => {
      if (getCurrStatus.value === "finish") {
        return <ivy-icon name="check" size="16"></ivy-icon>;
      } else if (getCurrStatus.value === "error") {
        return <ivy-icon name="close" size="16"></ivy-icon>;
      } else {
        return index;
      }
    };

    return () => (
      <div class="ivy-step">
        <div class="ivy-step__line">
          <div
            class={[
              "ivy-step__line-status",
              isFinish.value
                ? `ivy-step__line-status-${getCurrStatus.value}`
                : null,
            ]}
          ></div>
        </div>
        <div class="ivy-step__icon">
          <div
            class={[
              "ivy-step__icon-inner",
              `ivy-step__icon-inner-${getCurrStatus.value}`,
            ]}
          >
            {renderIcon()}
          </div>
        </div>
        <div class="ivy-step__main">
          <div
            class={[
              "ivy-step__main-title",
              `ivy-step__main-title-${getCurrStatus.value}`,
            ]}
          >
            {slots.header ? slots.header?.() : props.header}
          </div>
          <div class="ivy-step__main-desc">
            {slots.default ? slots.default?.() : props.description}
          </div>
        </div>
      </div>
    );
  },
});
