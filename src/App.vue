<script setup lang="ts">
import { ref, onMounted } from "vue";
interface Data {
    text: string;
    id: number;
}
const data = ref<Data[]>([]);

const value = ref(["1"]);
const value1 = ref(1);
const value2 = ref(1);
const value3 = ref(1);

onMounted(() => {
    for (let index = 0; index < 1000; index++) {
        data.value.push({
            text: `第${index}个子项`,
            id: index,
        });
    }
});
</script>

<template>
    <router-view></router-view>
    <div>
        <!-- <ivy-count-up :end="400" :duration="6000" prefix="￥"></ivy-count-up> -->
        <!-- <ivy-virtual-list height="600px" style="width: 700px; margin-top: 48px" :source="data" item-height="42px">
            <ivy-virtual-list-item v-for="item in data" :key="item.id">{{ item.text }}</ivy-virtual-list-item>
        </ivy-virtual-list> -->
        <div class="page-item">
            <div>
                <p class="page-item-title">基础用法</p>
                <p class="page-item-dec">可同时展开多个面板，面板之间不影响</p>
            </div>
            <div class="page-item-content">
                <div>
                    <ivy-collapse v-model="value">
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
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">手风琴效果</p>
                <p class="page-item-dec">每次只能展开一个面板</p>
            </div>
            <div class="page-item-content">
                <div>
                    <ivy-collapse v-model="value1" accordion>
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
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">自定义arrow的位置和显示</p>
                <p class="page-item-dec">适用于在多个互斥的选项中选择的场景</p>
            </div>
            <div class="page-item-content">
                <p>arrow位于右侧</p>
                <ivy-collapse v-model="value2" accordion arrow="right">
                    <ivy-collapse-item header="史蒂夫·乔布斯" index="1">
                        <div>
                            史蒂夫·乔布斯（Steve
                            Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
                        </div>
                    </ivy-collapse-item>
                    <ivy-collapse-item header="盖瑞·沃兹尼亚克" index="2">
                        <div>
                            斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                            Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                            Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
                        </div>
                    </ivy-collapse-item>
                    <ivy-collapse-item header="乔纳森·伊夫" index="3">
                        <div>
                            乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
                        </div>
                    </ivy-collapse-item>
                </ivy-collapse>
                <p>arrow不显示</p>
                <ivy-collapse v-model="value3" accordion arrow="none">
                    <ivy-collapse-item header="史蒂夫·乔布斯" index="1">
                        <div>
                            史蒂夫·乔布斯（Steve
                            Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
                        </div>
                    </ivy-collapse-item>
                    <ivy-collapse-item header="盖瑞·沃兹尼亚克" index="2">
                        <div>
                            斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
                            Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
                            Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
                        </div>
                    </ivy-collapse-item>
                    <ivy-collapse-item header="乔纳森·伊夫" index="3">
                        <div>
                            乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
                        </div>
                    </ivy-collapse-item>
                </ivy-collapse>
            </div>
        </div>
    </div>
</template>

<style scoped>
.margin-top {
    margin-top: 24px;
}
.margin-top > div {
    text-align: center;
}
.margin-top > div:nth-child(odd) {
    background-color: aqua;
}
.margin-top > div:nth-child(even) {
    background-color: blanchedalmond;
}
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
