# Grid 宫格组件

宫格组件（Grid）与 24 列栅格布局不同的是，栅格组件（Row、Col）可以自定义一行内的列数，及各列所占比例，宫格组件则是将每行等分为宽度相等的列，甚至可以将单元格设置为正方形，并支持动态适应屏幕，就像九宫格一样。

## 基础用法

宫格共包含两个组件：`Grid` 和 `GridItem`。

设置 `Grid` 属性 `col` 可以指定最大支持的列数

<div class="demo-block">
<ivy-grid border cols="4">
    <ivy-grid-item>
        1
    </ivy-grid-item>
    <ivy-grid-item>2</ivy-grid-item>
    <ivy-grid-item>3</ivy-grid-item>
    <ivy-grid-item>4</ivy-grid-item>
    <ivy-grid-item>5</ivy-grid-item>
    <ivy-grid-item>6</ivy-grid-item>
    <ivy-grid-item>7</ivy-grid-item>
    <ivy-grid-item>8</ivy-grid-item>
</ivy-grid>
</div>

## 宽高一致

设置属性 `border` 可以控制是否显示边框，默认为显示（true）。

<div class="demo-block">
<ivy-grid border square mode="flex">
    <ivy-grid-item>
        1
    </ivy-grid-item>
    <ivy-grid-item>2</ivy-grid-item>
    <ivy-grid-item>3</ivy-grid-item>
    <ivy-grid-item>4</ivy-grid-item>
    <ivy-grid-item>5</ivy-grid-item>
    <ivy-grid-item>6</ivy-grid-item>
    <ivy-grid-item>7</ivy-grid-item>
    <ivy-grid-item>8</ivy-grid-item>
</ivy-grid>
</div>

## 是否显示边框

设置属性 `square` 为 `true`，宫格的高度会与宽度一致，并会自动适应窗口的改变。

<div class="demo-block">
<ivy-switch v-model="border"></ivy-switch>
<ivy-grid :border="border" square>
    <ivy-grid-item>
        1
    </ivy-grid-item>
    <ivy-grid-item>2</ivy-grid-item>
    <ivy-grid-item>3</ivy-grid-item>
    <ivy-grid-item>4</ivy-grid-item>
    <ivy-grid-item>5</ivy-grid-item>
    <ivy-grid-item>6</ivy-grid-item>
    <ivy-grid-item>7</ivy-grid-item>
    <ivy-grid-item>8</ivy-grid-item>
</ivy-grid>
</div>

## Props

| 属性| 描述 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
|mode|布局方式|`string`|`flex/grid`|grid|
|cols|列数|`number`|—|3|
|border|是否显示边框|`Boolean`|—|true|
|square|是否宽高一致|`Boolean`|—|false|

<script setup>
import { ref } from "vue"
const border = ref(false)
</script>
