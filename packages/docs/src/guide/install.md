# 快速开始

## 安装

```bash
pnpm i @ivy-design/vue
```

## 使用

```js
import { createApp } from "vue";
import App from './App.vue';
import ivyDesign from "@ivy-design/vue";
import "@ivy-design/vue/dist/index.css";

const app = createApp(App);
app.use(ivyDesign);
```