# Card 卡片

将信息聚合在卡片容器中展示。

## 基础用法

包含标题，内容和操作

Card 组件由 `header` 和 `body` 组成。 `header` 是可选的，其内容取决于一个具名的 slot。

<ivy-card>
    <template #header>
        <div
            style="display: flex;justify-content: space-between;align-items: center;"
        >
            <span>卡片名称</span>
            <ivy-button>操作按钮</ivy-button>
        </div>
    </template>
    <div>
        <p>列表内容 1</p>
        <p>列表内容 2</p>
        <p>列表内容 3</p>
    </div>
</ivy-card>

```html
<ivy-card>
    <template #header>
        <div
            style="display: flex;justify-content: space-between;align-items: center;"
        >
            <span>卡片名称</span>
            <ivy-button>操作按钮</ivy-button>
        </div>
    </template>
    <div>
        <p>列表内容 1</p>
        <p>列表内容 2</p>
        <p>列表内容 3</p>
    </div>
</ivy-card>
```

## 简单卡片

卡片可以只有内容区域

<ivy-card>
    <p>列表内容 1</p>
    <p>列表内容 2</p>
    <p>列表内容 3</p>
</ivy-card>

## 卡片阴影

可对阴影的显示进行配置。

通过 `shadow` 属性设置卡片阴影出现的时机。 该属性的值可以是：`always`、`hover` 或 `never`。

<div class="padding-top">
    <div style="display: inline-block;width: 30%;">
        <ivy-card>
            <p>总是显示</p>
        </ivy-card>
    </div>
    <div style="display: inline-block;width: 30%;margin: 0 5%;">
        <ivy-card shadow="hover">
            <p>Hover显示</p>
        </ivy-card>
    </div>
    <div style="display: inline-block;width: 30%;">
        <ivy-card shadow="never">
            <p>永不显示</p>
        </ivy-card>
    </div>
</div>



## API

### Props

| 属性| 描述 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
|header|设置 header|String|—|—|
|body-style|设置 body 的样式|Object|—|`{padding: '16px 20px'}`|
|shadow|设置阴影显示时机|String|always/hover/never|always|


<style scoped>
.page-card {
    background-color: #ffffff;
}
p {
    margin: 10px 0;
}
h1 {
    font-weight: 500;
    font-size: 1.7em;
}
</style>
