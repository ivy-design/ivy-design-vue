<template>
    <div class="page">
        <div class="page-item">
            <div>
                <h1 class="page-title">Tooltip 文字提示</h1>
                <p class="page-dec">常用于展示鼠标 hover 时的提示信息。</p>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1 class="page-item-title">基础用法</h1>
                <p class="page-item-dec">
                    在这里我们提供9种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。
                </p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <div style="width: 400px;">
                        <div class="text-center">
                            <ivy-tooltip
                                content="Top Left 提示文字"
                                placement="top-start"
                            >
                                <ivy-button>上左</ivy-button>
                            </ivy-tooltip>
                            <ivy-tooltip
                                class="ml-10"
                                content="Top Center 提示文字"
                                placement="top"
                            >
                                <ivy-button>上边</ivy-button>
                            </ivy-tooltip>
                            <ivy-tooltip
                                class="ml-10"
                                content="Top Right 提示文字"
                                placement="top-end"
                            >
                                <ivy-button>上右</ivy-button>
                            </ivy-tooltip>
                        </div>
                        <div class="flex-between">
                            <div style="width: 70px;">
                                <ivy-tooltip
                                    class="margin-top-large"
                                    content="Left Top 提示文字"
                                    placement="left-start"
                                >
                                    <ivy-button>左上</ivy-button>
                                </ivy-tooltip>
                                <ivy-tooltip
                                    class="margin-top-large"
                                    content="Left Center 提示文字"
                                    placement="left"
                                >
                                    <ivy-button>左边</ivy-button>
                                </ivy-tooltip>
                                <ivy-tooltip
                                    class="margin-top-large"
                                    content="Left Bottom 提示文字"
                                    placement="left-end"
                                >
                                    <ivy-button>左下</ivy-button>
                                </ivy-tooltip>
                            </div>
                            <div style="width: 70px;">
                                <ivy-tooltip
                                    class="margin-top-large"
                                    content="Right Top 提示文字"
                                    placement="right-start"
                                >
                                    <ivy-button>右上</ivy-button>
                                </ivy-tooltip>
                                <ivy-tooltip
                                    class="margin-top-large"
                                    content="Right Center 提示文字"
                                    placement="right"
                                >
                                    <ivy-button>右边</ivy-button>
                                </ivy-tooltip>
                                <ivy-tooltip
                                    class="margin-top-large"
                                    content="Right Bottom 提示文字"
                                    placement="right-end"
                                >
                                    <ivy-button>右下</ivy-button>
                                </ivy-tooltip>
                            </div>
                        </div>
                        <div class="text-center">
                            <ivy-tooltip
                                class="ml-10"
                                content="Bottom Left 提示文字"
                                placement="bottom-start"
                            >
                                <ivy-button>下左</ivy-button>
                            </ivy-tooltip>
                            <ivy-tooltip
                                class="ml-10"
                                content="Bottom Center 提示文字"
                                placement="bottom"
                            >
                                <ivy-button>下边</ivy-button>
                            </ivy-tooltip>
                            <ivy-tooltip
                                class="ml-10"
                                content="Bottom Right 提示文字"
                                placement="bottom-end"
                            >
                                <ivy-button>下右</ivy-button>
                            </ivy-tooltip>
                        </div>
                    </div>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1 class="page-item-title">主题</h1>
                <p class="page-item-dec">
                    Tooltip 组件提供了两个不同的主题：dark和light。
                </p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <ivy-tooltip
                        content="Bottom Left 提示文字"
                        placement="bottom-start"
                    >
                        <ivy-button>dart(default)</ivy-button>
                    </ivy-tooltip>
                    <ivy-tooltip
                        class="margin-left-large"
                        content="Bottom Center 提示文字"
                        theme="light"
                    >
                        <ivy-button>light</ivy-button>
                    </ivy-tooltip>
                </page-demo>
            </div>
        </div>
        <div class="page-item">
            <div>
                <h1 class="page-item-title">更多 Content</h1>
                <p class="page-item-dec">
                    展示多行文本或者是设置文本内容的格式
                </p>
            </div>
            <div class="page-item-content">
                <page-demo>
                    <ivy-tooltip placement="top">
                        <ivy-button>slot content</ivy-button>
                        <template v-slot:content>
                            多行信息
                            <br />
                            第二行信息
                        </template>
                    </ivy-tooltip>
                </page-demo>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
};
</script>
<style>
.flex-between {
    display: flex;
    justify-content: space-between;
}
.text-center {
    text-align: center;
}
.ml-0 {
    margin-left: 0;
    margin-top: 10px;
}
</style>
