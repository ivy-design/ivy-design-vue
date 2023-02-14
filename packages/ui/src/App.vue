<script setup lang="ts">
import { ref } from "vue";
interface Data {
  text: string;
  id: number;
  name: string;
  age: number;
}
const data = ref<Data[]>([
  {
    id: 1,
    name: "张三",
    age: 18,
    text: "随便写的",
  },
  {
    id: 2,
    name: "张三",
    age: 18,
    text: "随便写的",
  },
  {
    id: 3,
    name: "张三",
    age: 18,
    text: "随便写的",
  },
  {
    id: 4,
    name: "张三",
    age: 18,
    text: "随便写的",
  },
  {
    id: 5,
    name: "张三",
    age: 18,
    text: "随便写的",
  },
  {
    id: 6,
    name: "张三",
    age: 18,
    text: "随便写的",
  },
  {
    id: 7,
    name: "张三",
    age: 18,
    text: "随便写的",
  },
  {
    id: 8,
    name: "张三",
    age: 18,
    text: "随便写的",
  },
  {
    id: 9,
    name: "张三",
    age: 18,
    text: "随便写的",
  },
  {
    id: 10,
    name: "张三",
    age: 18,
    text: "随便写的",
  },
]);
</script>

<template>
  <router-view></router-view>
  <div>
    <ivy-count-up :end="400" :duration="6000" prefix="￥"></ivy-count-up>
    <!-- <ivy-virtual-list height="600px" style="width: 700px; margin-top: 48px" :source="data" item-height="42px">
            <ivy-virtual-list-item v-for="item in data" :key="item.id">{{ item.text }}</ivy-virtual-list-item>
        </ivy-virtual-list> -->

    <!-- <ivy-table :data="data" header="Dialog 标题">
            <ivy-table-column prop="id" label="id" width="100px"> </ivy-table-column>
            <ivy-table-column prop="name" label="姓名"> </ivy-table-column>
            <ivy-table-column prop="age" label="年龄"> </ivy-table-column>
            <ivy-table-column prop="text" label="备注"> </ivy-table-column>
        </ivy-table> -->
  </div>
</template>

<style scoped>
.margin-top {
  margin-top: 24px;
}
.margin-right {
  margin-right: 24px;
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
