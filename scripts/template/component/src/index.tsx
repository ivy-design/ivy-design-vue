import { defineComponent, renderSlot, type SetupContext } from "vue";
import { prefix } from "@/utils";

export default defineComponent({
    name: `${prefix}button`,
    props: {
        type: String,
    },
    emits: ["click"],
    setup(props, { emit, slots }: SetupContext) {
        const handleClick = (event: Event) => {
            emit("click", event);
        };

        return () => (
            <button onClick={handleClick}>
                <span>{renderSlot(slots, "default")}</span>
            </button>
        );
    },
});
