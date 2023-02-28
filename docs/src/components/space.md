# Space 间距

虽然我们拥有 `Divider` 组件，但很多时候我们需要不是一个被 `Divider` 组件 分割开的页面结构，因此我们会重复的使用很多的 `Divider` 组件，这在我们的开发效率上造成了一定的困扰。 间距组件就是为了解决这种困扰应运而生的。

## 基本用法

最基础的用法，通过这个组件来给组件之间提供统一的间距。

<div class="demo-block">
<ivy-space>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>
</div>

## 垂直布局

使用 `vertical` 来控制布局的方式, 背后实际上是利用了 `flex-direction` 来控制.

<div class="demo-block">
<ivy-space vertical>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>
</div>

## 控制间距的大小

通过 `size` 来调整间距大小，默认是 `medium`。

<div class="demo-block">
<ivy-space size="small">
    <ivy-button>small</ivy-button>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>

<ivy-space size="medium" class="margin-top">
    <ivy-button>medium/默认值</ivy-button>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>

<ivy-space size="large" class="margin-top">
    <ivy-button>large</ivy-button>
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>
</div>

## 自定义 Size

很多时候，内建的大小不满足设计师的要求，我们可以通过传入自己定义的大小 (数值类型) 来设置。

自己定义大小通过调整 `gap` 的值来控制。

<div class="demo-block">
<ivy-space gap="24px">
    <ivy-button type="primary">新增</ivy-button>
    <ivy-button type="warning">编辑</ivy-button>
    <ivy-button type="danger">删除</ivy-button>
</ivy-space>
</div>

## API

### Props

| 属性| 描述 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
|vertical|垂直显示|boolean|-|false|
|size|间距大小|string|`small/medium/large`|medium|
|gap|自定义间距大小|string/number|-|-|

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
