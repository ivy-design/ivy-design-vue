import { defineConfig } from "vitepress";
import sidebar from "./config/sidebar";

const nav = [
  {
    text: "指引",
    link: "/guide/install",
  },
  {
    text: "组件",
    link: "/components/button",
  },
];

export default defineConfig({
  lang: "zh-CN",
  title: "@ivy-design/vue",
  lastUpdated: true,
  titleTemplate: ":title",
  themeConfig: {
    lastUpdatedText: "最后更新时间",
    outlineTitle: "目录导航",
    nav,
    socialLinks: [
      { icon: "github", link: "https://github.com/GuoJikun/fox-design" },
    ],
    sidebar,
  },
});
