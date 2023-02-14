import { defineComponent } from "vue";
import { prefix } from "@/utils";

export default defineComponent({
    name: `${prefix}header`,
    props: {
        height: {
            type: String,
            default: "60px",
        },
    },
    setup(props, { slots }) {
        return () => (
            <div class="ivy-layout-header" style={{ height: props.height }}>
                {slots.default?.()}
            </div>
        );
    },
});
