<div class="page">
    <div class="page-item">
        <div>
            <p class="page-title">Tag 标签</p>
            <p class="page-dec">用于标记和选择。</p>
        </div>
    </div>
    <div class="page-item">
        <div>
            <p class="page-item-title">基本用法</p>
        </div>
        <div class="page-item-content">
                <ivy-tag type="primary">标签 1</ivy-tag>
                <ivy-tag type="success">标签 2</ivy-tag>
                <ivy-tag type="warning">标签 3</ivy-tag>
                <ivy-tag type="danger">标签 4</ivy-tag>
                <ivy-tag type="info">标签 5</ivy-tag>
        </div>
    </div>
    <div class="page-item">
        <div>
            <p class="page-item-title">可移除标签</p>
        </div>
        <div class="page-item-content">
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
    </div>
    <!-- <div class="page-item">
        <div>
            <p class="page-item-title">不同尺寸</p>
            <p class="page-item-dec">
                Tag
                组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
            </p>
        </div>
        <div class="page-item-content">
                <ivy-tag size="large" closable>大型标签</ivy-tag>
                <ivy-tag size="default" closable>默认标签</ivy-tag>
                <ivy-tag size="small" closable>小型标签</ivy-tag>
                <ivy-tag size="mini" closable>超小标签</ivy-tag>
        </div>
    </div>
    <div class="page-item">
        <div>
            <p class="page-item-title">不同主题</p>
            <p class="page-item-dec">
                Tag 组件提供了三个不同的主题：dark、light 和 plain
            </p>
        </div>
        <div class="page-item-content">
                <div>
                    <ivy-button type="text" size="small">Dark </ivy-button>
                    <ivy-tag theme="dark" type="primary">标签 1</ivy-tag>
                    <ivy-tag theme="dark" type="success">标签 2</ivy-tag>
                    <ivy-tag theme="dark" type="warning">标签 3</ivy-tag>
                    <ivy-tag theme="dark" type="danger">标签 4</ivy-tag>
                    <ivy-tag theme="dark" type="info">标签 5</ivy-tag>
                </div>
                <div class="mt-20">
                    <ivy-button type="text" size="small">Plain</ivy-button>
                    <ivy-tag theme="plain" type="primary">标签 1</ivy-tag>
                    <ivy-tag theme="plain" type="success">标签 2</ivy-tag>
                    <ivy-tag theme="plain" type="warning">标签 3</ivy-tag>
                    <ivy-tag theme="plain" type="danger">标签 4</ivy-tag>
                    <ivy-tag theme="plain" type="info">标签 5</ivy-tag>
                </div>
        </div>
    </div> -->
    <!-- <div class="page-item">
        <div>
            <p class="page-title">API</p>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">Tag Props</p>
            </div>
            <div class="page-item-content">
                <ivy-table :data="props"></ivy-table>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">Tag Events</p>
            </div>
            <div class="page-item-content">
                <ivy-table :columns="eventsCol" :data="events"></ivy-table>
            </div>
        </div>
    </div> -->
</div>

<script>

export default {
    data() {
        return {
            props: [
                {
                    parameter: 'type',
                    explain: '类型',
                    type: 'String',
                    optionalValue: 'success/info/warning/danger',
                    defaultValue: '-',
                },
                {
                    parameter: 'size',
                    explain: '尺寸',
                    type: 'String',
                    optionalValue: 'large / small / mini',
                    defaultValue: '-',
                },
                {
                    parameter: 'theme',
                    explain: '主题',
                    type: 'String',
                    optionalValue: 'dark / light / plain',
                    defaultValue: 'light',
                },
            ],
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
