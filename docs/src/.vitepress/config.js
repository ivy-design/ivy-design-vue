import { defineConfig } from "vitepress";

const nav = [
    {
        text: "组件",
        link: "/components/button.md",
    },
];

const sidebar = {
    "/components/": [
        {
            text: "基础组件",
            items: [
                {
                    text: "Layout 布局组件",
                    link: "/components/layout.md",
                },
                {
                    text: "Button 按钮",
                    link: "/components/button.md",
                },
                {
                    text: "Row/Col 行列",
                    link: "/components/row-col.md",
                },
            ],
        },
        {
            text: "表单组件",
            items: [
                {
                    text: "Button 按钮",
                    link: "/components/button.md",
                },
            ],
        },
        {
            text: "数据组件",
            items: [
                {
                    text: "Badge 徽章",
                    link: "/components/badge.md",
                },
                {
                    text: "Card 卡片",
                    link: "/components/card.md",
                },
                {
                    text: "Collapse 折叠面板",
                    link: "/components/collapse.md",
                },
                {
                    text: "Tag 标签",
                    link: "/components/tag.md",
                },
                {
                    text: "Timeline 时间线",
                    link: "/components/timeline.md",
                },
            ],
        },
        {
            text: "反馈组件",
            items: [
                {
                    text: "Alert 提示",
                    link: "/components/alert.md",
                },
                {
                    text: "Dialog 弹窗",
                    link: "/components/dialog.md",
                },
            ],
        },
    ],
};

export default defineConfig({
    lang: "zh-CN",
    title: "@ivy-design/vue",
    lastUpdated: true,
    titleTemplate: ":title",
    outDir: "./dist",
    themeConfig: {
        lastUpdatedText: "最后更新时间",
        outlineTitle: "目录导航",
        nav,
        socialLinks: [{ icon: "github", link: "https://github.com/GuoJikun/fox-design" }],
        sidebar,
    },
});
