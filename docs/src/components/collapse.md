# Collapse 折叠面板

通过折叠面板收纳内容区域

## 基础用法

可同时展开多个面板，面板之间不影响

<div class="demo-block">
    <ivy-collapse v-model="value" @change="handleClick">
        <ivy-collapse-item header="史蒂夫·乔布斯">
            <div>
                史蒂夫·乔布斯（Steve
                Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
            </div>
        </ivy-collapse-item>
        <ivy-collapse-item header="盖瑞·沃兹尼亚克">
            <div>
                斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
            </div>
        </ivy-collapse-item>
        <ivy-collapse-item header="乔纳森·伊夫">
            <div>
                乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
            </div>
        </ivy-collapse-item>
    </ivy-collapse>
</div>

## 手风琴效果

每次只能展开一个面板

<div class="demo-block">
    <ivy-collapse
        v-model="value1"
        accordion
        @change="handleClick"
    >
        <ivy-collapse-item header="史蒂夫·乔布斯">
            <div>
                史蒂夫·乔布斯（Steve
                Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
            </div>
        </ivy-collapse-item>
        <ivy-collapse-item header="盖瑞·沃兹尼亚克">
            <div>
                斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
            </div>
        </ivy-collapse-item>
        <ivy-collapse-item header="乔纳森·伊夫">
            <div>
                乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
            </div>
        </ivy-collapse-item>
    </ivy-collapse>
</div>

## 自定义arrow的位置和显示

适用于在多个互斥的选项中选择的场景

<div class="demo-block">
    <p>arrow位于右侧</p>
    <ivy-collapse v-model="value2" accordion arrow="right">
        <ivy-collapse-item header="史蒂夫·乔布斯">
            <div>
                史蒂夫·乔布斯（Steve
                Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
            </div>
        </ivy-collapse-item>
        <ivy-collapse-item header="盖瑞·沃兹尼亚克">
            <div>
                斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
            </div>
        </ivy-collapse-item>
        <ivy-collapse-item header="乔纳森·伊夫">
            <div>
                乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
            </div>
        </ivy-collapse-item>
    </ivy-collapse>
    <p>arrow不显示</p>
    <ivy-collapse v-model="value3" accordion arrow="none">
        <ivy-collapse-item header="史蒂夫·乔布斯">
            <div>
                史蒂夫·乔布斯（Steve
                Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
            </div>
        </ivy-collapse-item>
        <ivy-collapse-item header="盖瑞·沃兹尼亚克">
            <div>
                斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
            </div>
        </ivy-collapse-item>
        <ivy-collapse-item header="乔纳森·伊夫">
            <div>
                乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
            </div>
        </ivy-collapse-item>
    </ivy-collapse>
</div>

## API

### Collapse Props

| 属性| 描述 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
|model-value/v-model|当前激活的面板的 name，可以使用 v-model 双向绑定|Array\|String|—|—|
|accordion|是否开启手风琴模式，开启后每次至多展开一个面板|boolean|—|false|
|arrow|箭头的位置|string|`left/right/none`|left|

### Collapse events

|事件名称|描述|参数|
|-|-|-|
|change|v-model变化时触发|array\<itemName\>|

### Panel Props

| 属性| 描述 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
|header|设置 header|String|—|—|
|name|唯一标识|String\|number|—|—|

<script>
export default {
    data() {
        return {
            value: [2],
            value1: '0',
            value2: '1',
            value3: '2',
            status: true,
            collapseEvents: [
                {
                    parameter: 'change',
                    explain:
                        '切换面板时触发，返回已展开的面板的key，格式为数组',
                    type: 'Array | String',
                    optionalValue: '-',
                    defaultValue: '[]/null',
                },
            ],
            panelProps: [
                {
                    parameter: 'name',
                    explain: '标题',
                    type: 'String',
                    optionalValue: '-',
                    defaultValue: '',
                },
            ],
        };
    },
    methods: {
        handleClick() {},
    },
};
</script>
