# Link 链接

文字超链接

## 基础用法

基础的文字链接用法。

<div class="demo-block">
<ivy-link>default</ivy-link>
<ivy-link type="primary">primary</ivy-link>
<ivy-link type="success">success</ivy-link>
<ivy-link type="warning">warning</ivy-link>
<ivy-link type="danger">danger</ivy-link>
<ivy-link type="info">info</ivy-link>
</div>

```html
<ivy-link>default</ivy-link>
<ivy-link type="primary">primary</ivy-link>
<ivy-link type="success">success</ivy-link>
<ivy-link type="warning">warning</ivy-link>
<ivy-link type="danger">danger</ivy-link>
<ivy-link type="info">info</ivy-link>
```

## 禁用状态

文字链接不可用状态。

<div class="demo-block">
<ivy-link disabled>default</ivy-link>
<ivy-link type="primary" disabled>primary</ivy-link>
<ivy-link type="success" disabled>success</ivy-link>
<ivy-link type="warning" disabled>warning</ivy-link>
<ivy-link type="danger" disabled>danger</ivy-link>
<ivy-link type="info" disabled>info</ivy-link>
</div>

```html
<ivy-link disabled>default</ivy-link>
<ivy-link type="primary" disabled>primary</ivy-link>
<ivy-link type="success" disabled>success</ivy-link>
<ivy-link type="warning" disabled>warning</ivy-link>
<ivy-link type="danger" disabled>danger</ivy-link>
<ivy-link type="info" disabled>info</ivy-link>
```

## 下划线

文字链接下划线。

<div class="demo-block">
<ivy-link underline>Width Underline</ivy-link>
<ivy-link>Without Underline</ivy-link>
</div>

```html
<ivy-link Underline>Width Underline</ivy-link>
<ivy-link>Without Underline</ivy-link>
```

## Props

| 属性      | 描述           | 类型      | 可选值                                        | 默认值  |
| --------- | -------------- | --------- | --------------------------------------------- | ------- |
| type      | 类型           | `enum`    | `default/primary/success/warning/danger/info` | default |
| underline | 下划线         | `boolean` | —                                             | false   |
| disabled  | 禁用按钮       | `boolean` | —                                             | false   |
| href      | 原生 href 属性 | `string`  | -                                             | -       |
