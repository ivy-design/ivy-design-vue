import { prefix } from "@/utils";
import { defineComponent } from "vue";
import "./symbol";

export default defineComponent({
    name: `${prefix}icon`,
    props: {
        name: String,
        size: [Number, String],
    },
    setup(props) {
        return () => (
            <svg class="ivy-icon" style={{ fontSize: props.size }}>
                <use href={`#${props.name}`}></use>
            </svg>
        );
    },
});
