# @ivy-design/vue

## 项目介绍

> 正在开发中...

是一个使用ts和vue3开发的通用组件库，目前主体样式来自elementPlus

## 安装

```sh
pnpm i @ivy-design/vue
```

## 在项目中使用

```js
import { createApp } from 'vue'
import App from './App.vue'
import ivyDesign from '@ivy-design/vue'
import '@ivy-design/vue/dist/style.css'
// 省略其它内容

const app = createApp(App)

app.use(ivyDesign)

```


## 项目构成

docs 是文档，使用 `vitepress` 搭建

packages/ui 是组件库的主体

## 参与开发

具体请联系本人