import { defineComponent, type SetupContext } from "vue";
import { prefix } from "@/utils";

export default defineComponent({
    name: `${prefix}table-column`,
    props: {
        prop: String,
        label: String,
        width: String,
        align: {
            type: String,
            validator(val: string) {
                return ["left", "center", "right"].includes(val);
            },
        },
    },

    setup(props, { slots }: SetupContext) {
        return () => [slots.default?.()];
    },
});
