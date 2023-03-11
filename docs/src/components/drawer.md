# Drawer 抽屉

有些时候, Dialog 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档

## 基础用法

呼出一个临时的侧边栏, 可以通过设置 `placement` 从多个方向呼出

<div class="demo-block">
<ivy-radio-group v-model="placement">
    <ivy-radio label="top">top</ivy-radio>
    <ivy-radio label="right">right</ivy-radio>
    <ivy-radio label="bottom">bottom</ivy-radio>
    <ivy-radio label="left">left</ivy-radio>
</ivy-radio-group>
<ivy-button @click="visible=true">Open Drawer</ivy-button>
<ivy-drawer header="Drawer 标题" v-model="visible" teleported :placement="placement">
    <p>This Is Drawer Content</p>
    <p>This Is Drawer Content</p>
    <p>This Is Drawer Content</p>
    <p>This Is Drawer Content</p>
    <p>This Is Drawer Content</p>
    <p>This Is Drawer Content</p>
</ivy-drawer>
</div>

## 自定义header

可以通过 `header` 属性和 `header slot` 来自定义 `header` 的内容

<div class="demo-block">
<ivy-button @click="visible2=true">Open Drawer</ivy-button>
<ivy-drawer v-model="visible2" teleported>
    <template #header>
        我是通过 header slot 设置的内容，颜色为<span style="color: red;">红色</span>
    </template>
    <p>This Is Drawer Content</p>
    <p>This Is Drawer Content</p>
    <p>This Is Drawer Content</p>
    <p>This Is Drawer Content</p>
    <p>This Is Drawer Content</p>
    <p>This Is Drawer Content</p>
</ivy-drawer>
</div>

## 不显示header部分

当没有设置 `props.header` 和 `slots.header` 时 将不显示 `header` 部分

<div class="demo-block">
<ivy-button @click="visible1=true">Open Drawer</ivy-button>
<ivy-drawer v-model="visible1" teleported>
    <p>This Is Drawer Content</p>
    <p>This Is Drawer Content</p>
    <p>This Is Drawer Content</p>
    <p>This Is Drawer Content</p>
    <p>This Is Drawer Content</p>
    <p>This Is Drawer Content</p>
</ivy-drawer>
</div>

## Props

| 属性| 描述 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
|model-value/v-model|是否显示 Drawer|`boolean`|—|false|
|placement|位置|`string`|`top/right/bottom/left`|right|
|teleported|是否插入的body|`boolean`|-|false|
|showMask|是否显示遮罩|`boolean`|-|false|
|maskClose|点击遮罩是否可以关闭drawer|`boolean`|-|false|
|size|drawer的大小|`string`|-|30%|
|header|设置标题|`string`|-|-|

## Slots

| 名称 | 说明 |
|------|------|
| default | 自定义内容部分 |
| header | 自定义头部内容 |


<script setup>
import { ref } from 'vue'
const visible = ref(false);
const placement = ref('right')
const setPlacement = (val)=> placement.value = val;

const visible1 = ref(false);
const visible2 = ref(false);
</script>