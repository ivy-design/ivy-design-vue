# Empty 空状态

空状态的占位提示。

## 基础用法

<div class="demo-block">
    <ivy-empty></ivy-empty>
</div>

## 自定义图片

通过设置 `image` 属性传入图片 URL ， 还可以通过 `alt` 属性来设置图片的 alt

<div class="demo-block">
    <ivy-empty image="https://blog.jikun.dev/images/basic/filter.jpg"></ivy-empty>
</div>


## 图片尺寸

通过使用css变量 `--ivy-empty-image-size` 属性来控制图片大小。

<div class="demo-block">
    <ivy-empty style="--ivy-empty-image-size: 300px"></ivy-empty>
</div>

## 底部内容

使用默认插槽可在底部插入内容。

<div class="demo-block">
    <ivy-empty>
        <ivy-button type="primary">按钮</ivy-button>
    </ivy-empty>
</div>

## Props

|属性名|说明|类型|可选值|默认值|
|-|-|-|-|-|
|image| 图片地址 |string|—|—|
|alt| 同 `img` alt 属性|string|—|—|
|description| 描述|string|—|—|

## Slots

|名称|说明|
|-|-:|
|image|自定义图片|
|description|自定义描述|
|default|自定义底部内容|