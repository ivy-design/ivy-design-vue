# cell 单元格

在一组备选项中进行单选

## 基础用法

包含各类用法的综合示例。

<div class="demo-block">
    <ivy-card style="width: 400px;">
        <div slot="name">选项</div>
        <ivy-cell-group>
            <ivy-cell title="只显示标题"></ivy-cell>
            <ivy-cell
                title="显示label"
                label="label的内容"
            ></ivy-cell>
            <ivy-cell title="显示extra" extra="extra"></ivy-cell>
            <ivy-cell
                title="显示向右的icon"
                is-link
                name="link"
            ></ivy-cell>
            <ivy-cell
                title="链接"
                is-link
                name="link"
                to="/layout"
                @click="handleClick"
                extra="详细信息"
            ></ivy-cell>
            <ivy-cell
                title="新窗口打开"
                is-link
                name="link"
                to="/layout"
                @click="handleClick"
                target="_blank"
            ></ivy-cell>
            <ivy-cell title="禁用" disabled></ivy-cell>
            <ivy-cell title="选中" selected></ivy-cell>
            <ivy-cell title="开关">
                <ivy-switch
                    slot="extra"
                    v-model="status"
                ></ivy-switch>
            </ivy-cell>
        </ivy-cell-group>
    </ivy-card>
</div>

## 是否显示border

给cell加上边框

<div class="demo-block">
    <ivy-card style="width: 400px;">
        <ivy-cell-group border>
            <ivy-cell title="只显示标题"></ivy-cell>
            <ivy-cell
                title="显示label"
                label="label的内容"
            ></ivy-cell>
            <ivy-cell title="显示extra" extra="extra"></ivy-cell>
            <ivy-cell
                title="显示向右的icon"
                is-link
                name="link"
            ></ivy-cell>
            <ivy-cell
                title="链接"
                is-link
                name="link"
                to="/layout"
                @click="handleClick"
                extra="详细信息"
            ></ivy-cell>
            <ivy-cell
                title="新窗口打开"
                is-link
                name="link"
                to="/layout"
                @click="handleClick"
                target="_blank"
            ></ivy-cell>
            <ivy-cell title="禁用" disabled></ivy-cell>
            <ivy-cell title="选中" selected></ivy-cell>
            <ivy-cell title="开关">
                <ivy-switch
                    slot="extra"
                    v-model="status"
                ></ivy-switch>
            </ivy-cell>
        </ivy-cell-group>
    </ivy-card>
</div>


<script>
export default {
    data() {
        return {
            value: '2',
            value2: '1',
            status: true,
        };
    },
    methods: {
        handleClick() {
            return false;
        },
        changeStatus() {
            this.status = !this.status;
        },
        cancel1() {
            this.value = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.page-radio {
    font-size: 14px;
    background-color: #fff;
}
.page-radio-item {
    padding: 20px;
}
h1 {
    font-weight: 500;
    font-size: 1.7em;
}
.page-radio-item-content {
    padding: 20px;
    border: 1px solid #eeeeee;
}
.progress-item + .progress-item {
    margin-top: 20px;
}
</style>
