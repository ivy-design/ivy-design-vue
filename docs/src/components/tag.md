# Tag 标签

用于标记和选择。

## 基本用法

<div class="demo-block">
        <ivy-tag type="primary">标签 1</ivy-tag>
        <ivy-tag type="success">标签 2</ivy-tag>
        <ivy-tag type="warning">标签 3</ivy-tag>
        <ivy-tag type="danger">标签 4</ivy-tag>
        <ivy-tag type="info">标签 5</ivy-tag>
</div>

## 可移除标签

<div class="demo-block">
        <ivy-tag
            v-for="tag in tags"
            :key="tag.type"
            :type="tag.type"
            closable
            @close="handleClose(tag.name)"
        >
            {{ tag.name }}
        </ivy-tag>
</div>

## 不同尺寸

Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

<div class="demo-block">
    <ivy-tag size="large" closable>大型标签</ivy-tag>
    <ivy-tag size="default" closable>默认标签</ivy-tag>
    <ivy-tag size="small" closable>小型标签</ivy-tag>
    <ivy-tag size="mini" closable>超小标签</ivy-tag>
</div>

## 不同主题

Tag 组件提供了三个不同的主题：dark、light 和 plain

<div class="demo-block">
    <div class="margin-bottom">
        <span class="margin-right">Light</span>
        <ivy-tag theme="light" type="primary">标签 1</ivy-tag>
        <ivy-tag theme="light" type="success">标签 2</ivy-tag>
        <ivy-tag theme="light" type="warning">标签 3</ivy-tag>
        <ivy-tag theme="light" type="danger">标签 4</ivy-tag>
        <ivy-tag theme="light" type="info">标签 5</ivy-tag>
    </div>
    <div class="margin-bottom">
        <span class="margin-right">Dark&nbsp;</span>
        <ivy-tag theme="dark" type="primary">标签 1</ivy-tag>
        <ivy-tag theme="dark" type="success">标签 2</ivy-tag>
        <ivy-tag theme="dark" type="warning">标签 3</ivy-tag>
        <ivy-tag theme="dark" type="danger">标签 4</ivy-tag>
        <ivy-tag theme="dark" type="info">标签 5</ivy-tag>
    </div>
    <div class="mt-20">
        <span class="margin-right">Plain</span>
        <ivy-tag theme="plain" type="primary">标签 1</ivy-tag>
        <ivy-tag theme="plain" type="success">标签 2</ivy-tag>
        <ivy-tag theme="plain" type="warning">标签 3</ivy-tag>
        <ivy-tag theme="plain" type="danger">标签 4</ivy-tag>
        <ivy-tag theme="plain" type="info">标签 5</ivy-tag>
    </div>
</div>

## Props

| 属性| 描述 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
|type|类型|string|`primary/success/warning/danger/info`|primary|
|size|尺寸|string|`large/small/mini`|-|
|theme|主题|boolean|`dark / light / plain`|light|
|closable|是否可关闭|boolean|-|false|

### Events

|事件名称|描述|参数|
|-|-|-|
|click|点击 Tag 时触发的事件|-|
|close|关闭 Tag 时触发的事件|-|

<script>

export default {
    data() {
        return {
            
            events: [
                {
                    name: 'click',
                    explain: '点击 Tag 时触发的事件',
                    args: '-',
                },
                {
                    name: 'close',
                    explain: '关闭 Tag 时触发的事件',
                    args: '-',
                },
            ],
            tags: [
                { name: '标签一', type: 'primary' },
                { name: '标签二', type: 'success' },
                { name: '标签四', type: 'warning' },
                { name: '标签五', type: 'danger' },
                { name: '标签三', type: 'info' },
            ],
        };
    },
    methods: {
        handleClose(val) {
            this.tags = this.tags.filter(cur => {
                return val != cur.name;
            });
        },
    },
};
</script>
