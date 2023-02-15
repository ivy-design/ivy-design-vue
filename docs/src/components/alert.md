# Alert 警告

用于页面中展示重要的提示信息。

## 基本用法

页面中的非浮层元素，不会自动消失。

<ivy-alert header="这是提示信息">
    <div>用来让人注意的提示文字</div>
</ivy-alert>

## 显示Icon

通过设置showIcon为true来显示icon

<ivy-alert showIcon header="这是提示信息">
    <div>用来让人注意的提示文字</div>
</ivy-alert>

## 更改 Icon 大小

通过设置iconSize来更改icon 大小

<ivy-alert showIcon header="这是提示信息" icon-size="24px">
    <div>用来让人注意的提示文字</div>
</ivy-alert>

## 有状态的提示信息

<ivy-alert type="success">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</ivy-alert>

<ivy-alert type="danger">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</ivy-alert>

<ivy-alert type="warning">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</ivy-alert>

<ivy-alert type="info">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</ivy-alert>

## 自定义颜色

通过`props`中的`color`来自定义颜色

<ivy-alert
    :color="{
        background: 'pink',
        font: 'white',
    }"
>
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</ivy-alert>

<ivy-alert
    :color="{ font: 'white', background: 'black' }"
>
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</ivy-alert>

::: warning
`color` 是一个对象<br />`font`--字体颜色；`background`-- 背景颜色
:::

## API

### Props

| 属性| 描述 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
|type|类型|string|`success/warning/danger/info`|success|
|showIcon|是否显示icon|boolean|-|false|

<style lang="scss" scoped>
.page-modal {
    font-size: 14px;
    background-color: #fff;
}
.page-modal-item {
    padding: 20px;
}
h1 {
    font-weight: 500;
    font-size: 1.7em;
}
.page-modal-item-content {
    padding: 20px;
    border: 1px solid #eeeeee;
    width: 600px;
}
</style>
