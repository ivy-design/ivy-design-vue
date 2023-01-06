import {defineComponent} from 'vue'
export default defineComponent({
    name: "Button",
    props: {
        type: {
            type: String,
            default: "default",
            validator(value) {
                const flag = ["default", "primary", "success", "warning", "danger", "info", "text"].includes(value);
                return flag;
            },
        },
        size: {
            type: String,
            default: "default",
            validator(value) {
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
    emits:["click"],
    setup(props){
        const handleClick = (event) => {
                this.$emit("click", event);
            }
        return () => (<button
                class="fox-button"
                :disabled="disabled"
                :class="['fox-button--' + type, 'fox-button--' + size, { 'is-disabled': disabled }, { 'is-plain': plain }, { 'is-round': round }]"
                @click="handleClick"
            >
                <slot></slot>
            </button>)
    }
});