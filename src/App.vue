<script setup lang="ts">
// import { reactive } from "vue";
</script>

<template>
    <div>
        <ivy-alert style="width: 700px; margin-top: 48px" type="success" header="标题" show-icon>
            <p>dfasfdasdfsadfdsfsadf发射点发大水发的法大师傅撒旦富士达法撒旦法撒旦 书法大赛</p>
        </ivy-alert>
        <ivy-alert style="width: 700px; margin-top: 48px" type="warning" show-icon>
            <template #header> Card 标题 slot </template>
            <p>dfasfdasdfsadfdsfsadf发射点发大水发的法大师傅撒旦富士达法撒旦法撒旦 书法大赛</p>
        </ivy-alert>
        <ivy-alert style="width: 700px; margin-top: 48px" type="danger" show-icon>
            <template #header> Card 标题 slot </template>
            <p>dfasfdasdfsadfdsfsadf发射点发大水发的法大师傅撒旦富士达法撒旦法撒旦 书法大赛</p>
        </ivy-alert>
        <ivy-alert style="width: 700px; margin-top: 48px" type="info" header="标题" show-icon>
            <p>dfasfdasdfsadfdsfsadf发射点发大水发的法大师傅撒旦富士达法撒旦法撒旦 书法大赛</p>
        </ivy-alert>
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
</style>
