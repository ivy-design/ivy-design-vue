import { defineComponent, renderSlot, type SetupContext } from "vue";
import { prefix } from "@/utils";
export default defineComponent({
    name: `${prefix}button`,
    props: {
        type: {
            type: String,
            default: "default",
            validator(value: string) {
                return ["default", "primary", "success", "warning", "danger", "info", "text"].includes(value);
            },
        },
        size: {
            type: String,
            default: "default",
            validator(value: string) {
                const flag = ["default", "large", "small", "mini"];
                return flag.includes(value);
            },
        },
        disabled: {
            type: Boolean,
        },
        plain: {
            type: Boolean,
        },
        round: {
            type: Boolean,
        },
    },
    emits: ["click"],
    setup(props, { emit, attrs, slots }: SetupContext) {
        const handleClick = (event: Event) => {
            emit("click", event);
        };

        const classList = ["ivy-button", `ivy-button--${props.type}`, `ivy-button--${props.size}`];
        if (props.disabled) {
            classList.push("is-disabled");
        }
        if (props.plain) {
            classList.push("is-plain");
        }
        if (props.round) {
            classList.push("is-round");
        }

        if (attrs.class) {
            classList.push(attrs.class as string);
        }

        return () => (
            <button class={classList.join(" ")} style={attrs.style as string} disabled={props.disabled} onClick={handleClick}>
                <span>{renderSlot(slots, "default")}</span>
            </button>
        );
    },
});
