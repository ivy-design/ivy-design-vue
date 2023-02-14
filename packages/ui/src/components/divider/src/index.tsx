import { defineComponent, ref } from "vue";
import { prefix } from "@/utils";

export default defineComponent({
    name: `${prefix}divider`,
    props: {
        placement: {
            type: String,
            default: "center",
            validator(value: string) {
                return ["left", "center", "right"].includes(value);
            },
        },
        type: {
            type: String,
            default: "horizontal",
            validator(value: string) {
                return ["horizontal", "vertical"].includes(value);
            },
        },
        dashed: Boolean,
        textStyle: {
            type: String,
            default: "",
        },
    },
    setup(props, { slots }) {
        const classList = ref(["ivy-divider", `ivy-divider-${props.type}`]);

        if (slots.default) {
            classList.value.push(`ivy-divider-text-${props.placement}`);
        } else {
            classList.value.push(`ivy-divider-default`);
        }

        if (props.dashed) {
            classList.value.push("is-dashed");
        }

        const createSlot = () => {
            if (props.type === "horizontal" && slots.default) {
                return [
                    <span class="ivy-divider-inner__text" style={props.textStyle}>
                        {slots.default?.()}
                    </span>,
                ];
            } else {
                return [];
            }
        };

        return () => <div class={classList.value.join(" ")}>{createSlot()}</div>;
    },
});
