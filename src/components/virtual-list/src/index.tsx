import { defineComponent, provide, ref, type SetupContext } from "vue";
import { prefix, isSupportCssAttribute } from "@/utils";

export default defineComponent({
    name: `${prefix}virtual-list`,
    props: {
        height: {
            type: String,
            require: true,
        },
        source: {
            type: Array,
            default() {
                return [];
            },
        },
        itemHeight: String,
        bufferSize: {
            type: [String, Number],
        },
    },
    setup(props, { slots }: SetupContext) {
        const isSupportContentVisibility = isSupportCssAttribute("content-visibility");
        const itemHeight = ref(props.itemHeight);
        if (isSupportContentVisibility) {
            return () => (
                <div
                    class="ivy-virtual-list"
                    style={{ contentVisibility: "auto", containIntrinsicSize: `auto ${props.itemHeight}`, height: props.height } as any}
                >
                    {slots.default?.()}
                </div>
            );
        } else {
            const topHeight = ref(0);
            const bottomHeight = ref(0);

            // const itemHeight = parseFloat(props.itemHeight || );

            const bufferHeight = itemHeight;

            const handlerScroll = (ev: any) => {
                console.log(ev);
            };

            return () => (
                <div class="ivy-virtual-list" style={{ height: props.height }} onScroll={handlerScroll}>
                    <div class="ivy-virtual-list__top" style={{ height: `${topHeight.value}px` }}></div>
                    {slots.default?.()}
                    <div class="ivy-virtual-list__bottom" style={{ height: `${bottomHeight.value}px` }}></div>
                </div>
            );
        }
    },
});
