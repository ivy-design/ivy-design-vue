import { defineComponent, inject } from "vue";
import { RouterLink } from "vue-router";
import { prefix } from "@/utils";

export default defineComponent({
    name: `${prefix}breadcrumb-item`,
    inject: ["separator"],
    props: {
        to: {
            type: [String, Object],
        },
        append: {
            type: Boolean,
            default: false,
        },
        replace: {
            type: Boolean,
            default: false,
        },
        target: {
            type: String,
            default: "_self",
        },
    },
    setup(props, { slots }) {
        const separator = inject("separator");

        const renderInner = () => {
            if (props.to) {
                return (
                    <RouterLink to={props.to} replace={props.replace} target={props.target} class="ivy-breadcrumb-item-text">
                        {slots.default?.()}
                    </RouterLink>
                );
            } else {
                return <span class="ivy-breadcrumb-item-text">{slots.default?.()}</span>;
            }
        };

        return () => (
            <div class="ivy-breadcrumb-item">
                {renderInner()}
                <div class="ivy-breadcrumb-item-symbol">{separator}</div>
            </div>
        );
    },
});
