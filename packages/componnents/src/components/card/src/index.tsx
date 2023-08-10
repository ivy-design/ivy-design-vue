import { defineComponent } from "vue";
import { prefix } from "@/utils";

export default defineComponent({
    name: `${prefix}card`,
    props: {
        shadow: {
            type: String,
            default: "always",
            validator(value: string) {
                return ["always", "hover", "never"].includes(value);
            },
        },
        header: String,
        bodyStyle: {
            type: Object,
            default() {
                return {
                    padding: "16px 20px",
                };
            },
        },
    },
    setup(props, { slots }) {
        const header = () => {
            if (slots.header) {
                return <div class="ivy-card-header">{slots.header?.()}</div>;
            } else if (props.header) {
                return <div class="ivy-card-header">{props.header}</div>;
            } else {
                return [];
            }
        };
        return () => (
            <div class={["ivy-card", `is-${props.shadow}-shadow`]}>
                {header()}
                <div class="ivy-card-body" style={props.bodyStyle}>
                    {slots.default?.()}
                </div>
            </div>
        );
    },
});
