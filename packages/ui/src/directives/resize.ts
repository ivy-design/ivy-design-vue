export default {
    name: "resize",
    mounted(el: any, binding: any) {
        const rect = el.getBoundingClientRect();
        el.__width = rect.width;
        el.__height = rect.height;

        el.instance = new MutationObserver(() => {
            const rect = el.getBoundingClientRect();
            if (el.__width !== rect.width || el.__height !== rect.height) {
                el.__width = rect.width;
                el.__height = rect.height;
                if (typeof binding.value === "function") {
                    binding.value({
                        width: rect?.width,
                        height: rect?.height,
                    });
                } else {
                    throw new Error("指令resize的参数不是function类型");
                }
            }
        });

        el.instance.observe(el, {
            childList: false, // 观察目标子节点的变化，是否有添加或者删除
            attributes: true, // 观察属性变动
            attributeFilter: ["style"],
            subtree: false,
        });
    },
    beforeUnmount(el: any) {
        el.__width = null;
        el.__height = null;
        el.instance.disconnect();
        el.instance = null;
    },
};
