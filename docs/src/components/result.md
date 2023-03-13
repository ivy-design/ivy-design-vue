# Result 结果

用于对用户的操作结果或者异常状态做反馈。

## 基础用法

<div class="demo-block" style="display: flex">
    <ivy-result
    icon="success"
    title="Success Tip"
    description="this is description"
    >
    <template #extra>
        <ivy-button>操作</ivy-button>
    </template>
    </ivy-result>
    <ivy-result
    icon="warning"
    title="Warning Tip"
    description="this is description"
    >
    <template #extra>
        <ivy-button>操作</ivy-button>
    </template>
    </ivy-result>
    <ivy-result
    icon="error"
    title="Error Tip"
    description="this is description"
    >
    <template #extra>
        <ivy-button>操作</ivy-button>
    </template>
    </ivy-result>
    <ivy-result
    icon="info"
    title="Info Tip"
    description="this is description"
    >
    <template #extra>
        <ivy-button>操作</ivy-button>
    </template>
    </ivy-result>
</div>

## 自定义内容

<div class="demo-block">
    <ivy-result
    icon="error"
    title="Error Tip"
    description="this is description"
    >
    <template #icon>
        <ivy-icon name="promotion"></ivy-icon>
    </template>
    <template #content>
        slot content 使用来自定义 prop title 和 prop description 部分的内容
    </template>
    <template #extra>
        <ivy-button>操作</ivy-button>
    </template>
    </ivy-result>
</div>

## Props

|属性名|说明|类型|可选值|默认值|
|-|-|-|-|-|
|title|标题|string|—|—|
|description|描述|string|—|—|
|icon|图标类型|string|`success/warning/info/error`|info|

## Slots

|名称|说明|
|-|-:|
|icon|自定义图标|
|content|自定义 prop title 和 prop description 部分的内容|
|extra|自定义底部额外区域|