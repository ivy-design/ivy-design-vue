import { prefix } from "@/utils";
import { defineComponent } from "vue";

export default defineComponent({
    name: `${prefix}aside`,
    props: {
        width: {
            type: String,
            default: "300px",
        },
    },
    setup(props, { slots }) {
        return () => (
            <div class="ivy-layout-aside" style={{ width: props.width }}>
                {slots.default?.()}
            </div>
        );
    },
});
