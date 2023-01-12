import { defineComponent, provide } from "vue";
import { prefix } from "@/utils";

export default defineComponent({
    name: `${prefix}breadcrumb`,
    props: {
        separator: {
            type: String,
            default: "/",
        },
    },
    setup(props, { slots }) {
        provide("separator", props.separator);
        return () => <div class="ivy-breadcrumb">{slots.default?.()}</div>;
    },
});
