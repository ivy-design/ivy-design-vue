# Breadcrumb 面包屑

显示当前页面的路径，快速返回之前的任意页面。

## 基本用法

适用广泛的基础用法。

<div class="demo-block">
    <ivy-breadcrumb>
        <ivy-breadcrumb-item href="/name">首页</ivy-breadcrumb-item>
        <ivy-breadcrumb-item href="/age">组件</ivy-breadcrumb-item>
        <ivy-breadcrumb-item>面包屑</ivy-breadcrumb-item>
    </ivy-breadcrumb>
</div>

## 自定义分隔符

<div class="demo-block">
    <ivy-breadcrumb separator=">">
        <ivy-breadcrumb-item href="/name">首页</ivy-breadcrumb-item>
        <ivy-breadcrumb-item href="/age">组件</ivy-breadcrumb-item>
        <ivy-breadcrumb-item>面包屑</ivy-breadcrumb-item>
    </ivy-breadcrumb>
</div>


## Breadcrumb Props

## BreadcrumbItem Props


<script>
export default {
    data() {
        return {
            tableData: [
                {
                    parameter: 'separator',
                    explain: '自定义分隔符',
                    type: 'String',
                    optionalValue: '—',
                    defaultValue: '>',
                },
            ],
            tableData2: [
                {
                    parameter: 'to',
                    explain: '	链接，不传则没有链接，支持 vue-router 对象',
                    type: 'String | Object	',
                    optionalValue: '—',
                    defaultValue: '—',
                },
                {
                    parameter: 'replace',
                    explain:
                        '路由跳转时，开启 replace 将不会向 history 添加新记录',
                    type: 'Boolean',
                    optionalValue: '—',
                    defaultValue: 'false',
                },
                {
                    parameter: 'append',
                    explain: '同 vue-router append',
                    type: 'Boolean',
                    optionalValue: '—',
                    defaultValue: 'false',
                },
                {
                    parameter: 'target',
                    explain: '相当于 a 链接的 target 属性',
                    type: 'String',
                    optionalValue: '—',
                    defaultValue: '_self',
                },
            ],
        };
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.page-table {
    font-size: 14px;
    background-color: #fff;
}
.page-table-item {
    padding: 20px;
}
h1 {
    font-weight: 500;
    font-size: 1.7em;
}
.page-table-item-content {
    padding: 20px;
    border: 1px solid #eeeeee;
}
.progress-item + .progress-item {
    margin-top: 20px;
}
</style>
