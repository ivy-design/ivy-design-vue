# Rate 评分

## 基本用法

<ivy-rate v-model="value"></ivy-rate>

## click 选择

<ivy-rate v-model="value1" trigger="click"></ivy-rate>

## 自定义 icon

<ivy-rate v-model="value1" trigger="click" icon="ios-heart-empty" active-icon="ios-heart"> </ivy-rate>

## 只读

<ivy-rate v-model="value2" disabled></ivy-rate>

## Props

<script>
export default {
    data() {
        return {
            value: 1,
            value1: 2,
            value2: 2,
            propCol: columns,
            tableData: [
                {
                    parameter: 'value',
                    explain: '绑定值',
                    type: 'Number',
                    optionalValue: '—',
                    defaultValue: '0',
                },
                {
                    parameter: 'disabled',
                    explain: '是否为只读',
                    type: 'Boolean',
                    optionalValue: '—',
                    defaultValue: 'false',
                },
                {
                    parameter: 'allow-half',
                    explain: '是否允许半选',
                    type: 'Boolean',
                    optionalValue: '—',
                    defaultValue: 'false',
                },
                {
                    parameter: 'tigger',
                    explain: '选择方式',
                    type: 'String',
                    optionalValue: 'click,hover',
                    defaultValue: 'hover',
                },
            ],
        };
    },
};
</script>
