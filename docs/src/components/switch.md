# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

绑定 `v-model` 到一个 `Boolean` 类型的变量。

<div class="demo-block">
<ivy-switch v-model="value1"></ivy-switch>
</div>

```vue
<ivy-switch v-model="value1"></ivy-switch>
```

## 禁用状态

设置 `disabled` 属性，接受一个 `Boolean`，设置 `true` 即可禁用。

<div class="demo-block">
<ivy-switch v-model="value2" disabled class="margin-right-large"></ivy-switch>
<ivy-switch v-model="value1" disabled></ivy-switch>
</div>

```vue
<ivy-switch v-model="value2" disabled class="margin-right-large"></ivy-switch>
<ivy-switch v-model="value1" disabled></ivy-switch>
```

## 扩展的 value 类型

你可以设置 `active-value` 和 `inactive-value` 属性， 它们接受 `Boolean`、`String` 或 `Number` 类型的值。

<div class="demo-block">
<ivy-switch v-model="value3" active-value="1" inactive-value="0"></ivy-switch>
</div>

```vue
<ivy-switch v-model="value3" active-value="1" inactive-value="0"></ivy-switch>
```

## 文字描述

使用 `active-text` 属性与 `inactive-text` 属性来设置开关的文字描述。如果文字过长可以修改`--ivy-switch-width` 和 `--ivy-switch-height` 手动控制元素的大小

<div class="demo-block">
<ivy-switch v-model="value1" active-text="开" inactive-text="关"></ivy-switch>
<ivy-switch v-model="value1" active-text="开启状态" inactive-text="关闭状态" width="90px" style="--ivy-switch-width:90px;--ivy-switch-height:30px" class="margin-left-large"></ivy-switch>
</div>

```vue
<ivy-switch v-model="value1" active-text="开" inactive-text="关"></ivy-switch>
<ivy-switch
  v-model="value1"
  active-text="开启状态"
  inactive-text="关闭状态"
  width="90px"
  style="--ivy-switch-width:90px;--ivy-switch-height:30px"
  class="margin-left-large"
></ivy-switch>
```

<script setup>
import { ref } from 'vue'

const value1 = ref(true);
const value2 = ref(false);
const value3 = ref('1');
</script>

## Props

| 参数                | 说明                               | 类型                    | 可选值 | 默认值 |
| ------------------- | ---------------------------------- | ----------------------- | ------ | ------ |
| model-value/v-model | switch的状态                       | `String/Boolean/number` | -      | false  |
| disabled            | 是否禁用                           | `Boolean`               | -      | false  |
| active-text         | switch 的状态为 `on` 时的文字描述  | `String`                | -      | -      |
| inactive-text       | switch 的状态为 `off` 时的文字描述 | `String`                | -      | -      |
| active-value        | switch 状态为 `on` 时的值          | `String`                | -      | -      |
| inactive-value      | switch 状态为 `off` 时的值         | `String`                | -      | -      |
| name                | `input` 原生的 `name` 属性         | `String`                | -      | -      |
