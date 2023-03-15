# Checkbox 多选框

一组备选项中进行多选

## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 `checkbox` 按钮后的介绍。

<div class="demo-block">
    <ivy-checkbox v-model="value">选项一</ivy-checkbox>
    <ivy-checkbox
        v-model="value1"
        true-label="1"
        false-label="0"
        @change="changes"
    >
        选项二
    </ivy-checkbox>
</div>

## 禁用状态

单选框不可用的状态。

<div class="demo-block">
        <ivy-checkbox v-model="value" disabled>选项一</ivy-checkbox>
        <ivy-checkbox v-model="value1" disabled>选项二</ivy-checkbox>
</div>

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

<div class="demo-block">
    <ivy-checkbox-group v-model="value2" @change="handleWitch">
        <ivy-checkbox label="1">选项一</ivy-checkbox>
        <ivy-checkbox label="2">选项二</ivy-checkbox>
        <ivy-checkbox label="3">选项三</ivy-checkbox>
        <ivy-checkbox label="4" disabled>禁用</ivy-checkbox>
        <ivy-checkbox label="5" disabled>选中且禁用</ivy-checkbox>
    </ivy-checkbox-group>
</div>

## indeterminate 状态

`indeterminate` 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果

<div class="demo-block">
    <ivy-checkbox
        class="margin-bottom-large"
        v-model="checkAll"
        :indeterminate="isIndeterminate"
        @change="handleCheckAllChange"
    >
        全选
    </ivy-checkbox>
    <ivy-checkbox-group
        v-model="value3"
        @change="handleCheckedCitiesChange"
    >
        <ivy-checkbox label="1">选项一</ivy-checkbox>
        <ivy-checkbox label="2">选项二</ivy-checkbox>
        <ivy-checkbox label="3">选项三</ivy-checkbox>
        <ivy-checkbox label="4">禁用</ivy-checkbox>
        <ivy-checkbox label="5">选中且禁用</ivy-checkbox>
    </ivy-checkbox-group>
</div>

<script>
const cityOptions = ['1', '2', '3', '4', '5'];
export default {
    data() {
        return {
            value: true,
            value1: '0',
            value2: ['1', '5'],
            value3: ['1', '4'],
            checkAll: false,
            isIndeterminate: true,
        };
    },
    methods: {
        handleWitch(val) {
            console.log(val, 'v-model');
        },
        changes(val) {
            console.log(val, this.value1);
        },
        handleCheckAllChange(val) {
            this.value3 = val ? [...cityOptions] : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            const checkedCount = value.length;
            this.checkAll = checkedCount === cityOptions.length;
            this.isIndeterminate =
                checkedCount > 0 && checkedCount < cityOptions.length;
        },
    },
};
</script>
