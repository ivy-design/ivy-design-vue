# Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

## 线形进度条 — 百分比外显

<div class="demo-block">
    <ivy-progress :percentage="0"></ivy-progress>
    <ivy-progress class="margin-top-large" :percentage="50"></ivy-progress>
    <ivy-progress
        class="margin-top-large"
        :percentage="80"
        color="pink"
    ></ivy-progress>
    <ivy-progress
        class="margin-top-large"
        :percentage="100"
        status="success"
    ></ivy-progress>
    <ivy-progress
        class="margin-top-large"
        :percentage="100"
        status="danger"
    ></ivy-progress>
</div>

## ⾃线形进度条 — 百分比内显

百分比不占用额外控件，适用于文件上传等场景。

可通过 `stroke-width` 属性更改进度条的高度，并可通过 `text-inside` 属性来将进度条描述置于进度条内部。

<div class="demo-block">
    <page-demo>
        <ivy-progress
            :percentage="0"
            text-inside
            :stroke-width="18"
        ></ivy-progress>
        <ivy-progress
            class="margin-top-large"
            :percentage="70"
            text-inside
            :stroke-width="18"
        ></ivy-progress>
        <ivy-progress
            class="margin-top-large"
            :percentage="80"
            color="pink"
            text-inside
            :stroke-width="18"
        ></ivy-progress>
        <ivy-progress
            class="margin-top-large"
            :percentage="100"
            status="success"
            text-inside
            :stroke-width="18"
        ></ivy-progress>
        <ivy-progress
            class="margin-top-large"
            :percentage="50"
            status="danger"
            text-inside
            :stroke-width="18"
        ></ivy-progress>
    </page-demo>
</div>

## 环形进度条

可通过 `type` 属性来指定使用环形进度条，在环形进度条中，还可以通过 `width` 属性来设置其大小。

<div class="demo-block">
    <page-demo>
        <ivy-progress type="circle" :percentage="0"></ivy-progress>
        <ivy-progress
            class="margin-left-small"
            type="circle"
            :percentage="25"
        ></ivy-progress>
        <ivy-progress
            class="margin-left-small"
            type="circle"
            :percentage="80"
            color="#8e71c7"
        ></ivy-progress>
        <ivy-progress
            class="margin-left-small"
            type="circle"
            :percentage="100"
            status="success"
        ></ivy-progress>
        <ivy-progress
            class="margin-left-small"
            type="circle"
            :percentage="100"
            status="danger"
        ></ivy-progress>
    </page-demo>
</div>

## Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| percentage | 百分比（必填） | `String` | `0-100` | 0% |
| type | 进度条类型 | `String` | `line/circle` | - |
| stroke-width | 进度条的宽度，单位 px | `number` | - | 6 |
| status | 进度条当前状态 | `String` | `success/danger` | - |
| color | 进度条背景色（会覆盖 status 状态颜色） | `string` | - | - |
| width | 环形进度条画布宽度（只在type为circle时可用） | `number` | - | 126 |
| show-text | 是否显示进度条文字内容 | `boolean` | - | true |


<style lang="scss" scoped>
.progress-item + .progress-item {
    margin-top: 20px;
}
</style>
