import {
  defineComponent,
  onMounted,
  provide,
  ref,
  toRaw,
  toRef,
  type PropType,
} from "vue";
import { prefix } from "@/utils";

export default defineComponent({
  name: `${prefix}form`,
  props: {
    model: {
      type: Object as PropType<{ [x: string]: unknown }>,
      required: true,
    },
    size: {
      type: String,
      default: "medium",
      validator(value: string) {
        return ["small", "medium", "large"].includes(value);
      },
    },
    labelWidth: String,
    labelSuffix: String,
    labelPosition: {
      type: String,
      validator(val: string) {
        return ["top", "left", "right"].includes(val);
      },
    },
    inline: Boolean,
  },
  setup(props, { slots, expose, emit }) {
    const model = toRef(props, "model");
    // 存放formItem中有prop属性的
    const propList = ref<string[]>([]);
    const insertPropList = (val: string) => {
      propList.value.push(val);
    };
    provide("insertPropList", insertPropList);
    // 存放只读的model，方便resetFields方法使用
    let modelRaw: any = null;
    onMounted(() => {
      modelRaw = toRaw(model);
    });
    expose({
      resetFields: () => {
        emit("update:model", modelRaw.value);
      },
    });
    return () => {
      return <form class={["ivy-form"]}>{slots.default?.()}</form>;
    };
  },
});
