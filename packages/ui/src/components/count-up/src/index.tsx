import { defineComponent, onMounted, ref } from "vue";
import { prefix, requestAnimation, cancelAnimation } from "@/utils";

export default defineComponent({
    name: `${prefix}count-up`,
    props: {
        start: {
            type: Number,
            default: 0,
        },
        end: {
            type: Number,
            default: 0,
        },
        duration: {
            type: Number,
            default: 2000,
        },
        decimalPlaces: {
            type: Number,
            default: 0,
        },
        prefix: {
            type: String,
            default: "",
        },
        suffix: {
            type: String,
            default: "",
        },
    },
    setup(props, { expose }) {
        const raf = ref<null | number>(null);
        const startTime = ref<null | number>(null);
        const currentVal = ref(props.start);
        const finished = ref(false);

        const parseVal = (val: number) => {
            return Number(val.toFixed(props.decimalPlaces));
        };

        const count = (timestamp: number) => {
            if (!startTime.value) {
                startTime.value = timestamp;
            }
            const progress = timestamp - startTime.value;
            currentVal.value = props.start + (props.end - props.start) * (progress / props.duration);

            const isPast = finished.value ? currentVal.value < props.end : currentVal.value > props.end;

            currentVal.value = parseVal(isPast ? props.end : currentVal.value);

            if (timestamp < props.duration) {
                cancelAnimation(raf.value as number);
                requestAnimation(count);
            } else {
                if (!finished.value) {
                    cancelAnimation(raf.value as number);
                    requestAnimation(count);
                }
                finished.value = true;
            }
        };

        const start = () => {
            raf.value = requestAnimation(count);
        };

        const reset = () => {
            if (raf.value !== null) {
                cancelAnimation(raf.value);
                raf.value = null;
            }
            startTime.value = null;
            currentVal.value = props.start;
            finished.value = false;
        };

        onMounted(() => {
            start();
        });

        expose({
            reset,
            start,
        });

        return () => (
            <span>
                {props.prefix}
                {currentVal.value}
                {props.suffix}
            </span>
        );
    },
});
