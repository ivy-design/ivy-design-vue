import { defineComponent } from "vue";
import { prefix } from "@/utils";

export default defineComponent({
    name: `${prefix}main`,
    setup(props, { slots }) {
        return () => <div class="ivy-layout-main">{slots.default?.()}</div>;
    },
});
