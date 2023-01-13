<script setup lang="ts">
import { ref, onMounted } from "vue";
interface Data {
    text: string;
    id: number;
}
const data = ref<Data[]>([]);

const visible = ref(false);

const open = () => {
    visible.value = true;
};

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

        <ivy-button @click="open" type="primary">打开dialog</ivy-button>

        <ivy-dialog v-model="visible" header="Dialog 标题">
            <ivy-card header="卡片标题" shadow="never">
                <p>
                    通常我们不建议使用嵌套对话框。 如果你需要在页面上呈现多个对话框，你可以简单地打平它们，以便它们彼此之间是平级关系。
                    如果必须要在一个对话框内展示另一个对话框，可以将内部嵌套的对话框属性 append-to-body 设置为 true，嵌套的对话框将附加到
                    body 而不是其父节点，这样两个对话框都可以被正确地渲染。
                </p>
            </ivy-card>
        </ivy-dialog>
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
