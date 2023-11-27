# Layout 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

mx-container：外层容器。当子元素中包含 mx-header 或 mx-footer 时，全部子元素会垂直上下排列，否则会水平左右排列。

mx-header：顶栏容器。<br />mx-aside：侧边栏容器。<br />mx-main：主要区域容器。<br />mx-footer：底栏容器。

## 常见页面布局

<ivy-layout class="page-layout-item">
    <ivy-header class="page-layout-hf">Header</ivy-header>
    <ivy-main class="page-layout-main">Main</ivy-main>
</ivy-layout>
<ivy-layout class="page-layout-item">
    <ivy-header class="page-layout-hf">Header</ivy-header>
    <ivy-main class="page-layout-main">Main</ivy-main>
    <ivy-footer class="page-layout-hf">Footer</ivy-footer>
</ivy-layout>
<ivy-layout class="page-layout-item">
    <ivy-aside class="page-layout-hf" width="200px"
        >Aside</ivy-aside
    >
    <ivy-main class="page-layout-main">Main</ivy-main>
</ivy-layout>
<ivy-layout class="page-layout-item">
    <ivy-header class="page-layout-hf">Header</ivy-header>
    <ivy-layout>
        <ivy-aside class="page-layout-hf" width="200px"
            >Aside</ivy-aside
        >
        <ivy-main class="page-layout-main">Main</ivy-main>
    </ivy-layout>
</ivy-layout>
<ivy-layout class="page-layout-item">
    <ivy-header class="page-layout-hf">Header</ivy-header>
    <ivy-layout>
        <ivy-aside class="page-layout-hf" width="200px"
            >Aside</ivy-aside
        >
        <ivy-layout>
            <ivy-main class="page-layout-main">Main</ivy-main>
            <ivy-footer class="page-layout-hf">Footer</ivy-footer>
        </ivy-layout>
    </ivy-layout>
</ivy-layout>

<style scoped>
.page-layout {
    background-color: #ffffff;
    font-size: 14px;
}
p {
    margin: 10px 0;
    line-height: 1.5em;
}
h1 {
    font-weight: 500;
    font-size: 1.7em;
}
.page-layout-item + .page-layout-item {
    margin-top: 20px;
}
.page-layout-hf {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
}
.page-layout-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
}
</style>
