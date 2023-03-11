import { defineConfig } from "vitepress";

const nav = [
    {
        text: "指引",
        link: "/guide/install.md",
    },
    {
        text: "组件",
        link: "/components/button.md",
    },
];

const sidebar = {
    "/guide/": [
        {
            text: "快速开始",
            link: "/guide/install.md",
        },
        {
            text: "更新日志",
            link: "/guide/changelog.md",
        },
    ],
    "/components/": [
        {
            text: "基础组件",
            items: [
                {
                    text: "Icon 图标",
                    link: "/components/icon.md",
                },
                {
                    text: "Button 按钮",
                    link: "/components/button.md",
                },
                {
                    text: "Space 间距",
                    link: "/components/space.md",
                },
                {
                    text: "Link 链接",
                    link: "/components/link.md",
                },
            ],
        },
        {
            text: "布局组件",
            items: [
                {
                    text: "Layout 布局组件",
                    link: "/components/layout.md",
                },
                {
                    text: "Row/Col 行列",
                    link: "/components/row-col.md",
                },
                {
                    text: "List 列表",
                    link: "/components/list.md",
                },
                {
                    text: "Divider 分割线",
                    link: "/components/divider.md",
                },
            ],
        },
        {
            text: "表单组件",
            items: [
                {
                    text: "Form 表单",
                    link: "/components/form.md",
                },
                {
                    text: "Input 输入框",
                    link: "/components/input.md",
                },
            ],
        },
        {
            text: "导航组件",
            items: [
                {
                    text: "Breadcrumb 面包屑",
                    link: "/components/breadcrumb.md",
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
                {
                    text: "Drawer 抽屉",
                    link: "/components/drawer.md",
                },
            ],
        },
        // {
        //     text: "其它组件",
        //     items: [
        //         {
        //             text: "Divider 分割线",
        //             link: "/components/divider.md",
        //         },
        //     ],
        // },
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
