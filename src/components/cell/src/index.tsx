import { computed, defineComponent, type StyleValue } from "vue";
import { prefix } from "@/utils";
import { RouterLink } from "vue-router";

export default defineComponent({
    name: `${prefix}cell`,
    props: {
        title: String,
        name: [String, Number],
        to: [String, Object],
        replace: {
            type: Boolean,
            default: false,
        },
        icon: String,
        label: String,
        extra: String,
        isLink: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        selected: {
            type: Boolean,
            default: false,
        },
        target: {
            type: String,
            default: "_self",
        },
    },
    setup(props, { emit, slots }) {
        const handleClick = () => {
            emit("click", props.name);
        };

        const extraStyle = computed<StyleValue>(() => {
            const flag = !!props.to || props.isLink || !!slots.arrow;
            return {
                right: flag ? "32px" : "0px",
            };
        });

        const renderIcon = () => {
            if (props.icon || slots.icon) {
                return (
                    <div class="ivy-cell-icon">
                        <slot name="icon"></slot>
                    </div>
                );
            } else {
                return [];
            }
        };

        const renderLabel = () => {
            if (props.label || slots.label) {
                return <div class="ivy-cell-label">{slots.label ? slots.label?.() : props.label}</div>;
            } else {
                return [];
            }
        };

        const renderRoute = () => {
            if (props.to) {
                return (
                    <RouterLink class="ivy-cell-item" to={props.to} replace={props.replace} target={props.target}>
                        {renderIcon()}
                        <div class="ivy-cell-text">
                            <div class="ivy-cell-title">{slots.title ? slots.title?.() : props.title}</div>
                            {renderLabel()}
                        </div>
                        <div class="ivy-cell-extra" style={extraStyle.value}>
                            <slot name="extra">{props.extra}</slot>
                        </div>
                    </RouterLink>
                );
            } else {
                return (
                    <div class="ivy-cell-item">
                        {renderIcon()}
                        <div class="ivy-cell-text">
                            <div class="ivy-cell-title">{slots.title ? slots.title?.() : props.title}</div>
                            {renderLabel()}
                        </div>
                        <div class="ivy-cell-extra" style={extraStyle.value}>
                            {slots.extra ? slots.extra?.() : props.extra}
                        </div>
                    </div>
                );
            }
        };

        const renderArrow = () => {
            if (slots.arrow || props.to || props.isLink) {
                return (
                    <div class="ivy-cell__arrow">
                        <ivy-icon name="arrow-right"></ivy-icon>
                    </div>
                );
            } else {
                return [];
            }
        };

        return () => (
            <div class={["ivy-cell", { "is-disabled": props.disabled }, { "is-selected": props.selected }]}>
                <div class="ivy-cell__main" onClick={handleClick}>
                    {renderRoute()}
                </div>
                {renderArrow()}
            </div>
        );
    },
});
