<script setup lang="ts">
import { ref, onMounted } from "vue";
interface Data {
    text: string;
    id: number;
}
const data = ref<Data[]>([]);

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

        <ivy-breadcrumb>
            <ivy-breadcrumb-item to="/">首页</ivy-breadcrumb-item>
            <ivy-breadcrumb-item to="/layout">Layout</ivy-breadcrumb-item>
            <ivy-breadcrumb-item>current</ivy-breadcrumb-item>
        </ivy-breadcrumb>
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
