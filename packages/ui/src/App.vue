<script setup lang="ts">
import { reactive, ref } from "vue";

const formItem = reactive({
  name: "",
  age: "",
  sex: "1",
  address: "",
  interest: [],
  status: false,
});
const checked = ref(true);
</script>

<template>
  <div>
    <div class="margin-top: 24px">
      <ivy-form :model="formItem" label-width="100px">
        <ivy-form-item label="姓名">
          <ivy-input v-model="formItem.name" placeholder="请输入" clearable />
        </ivy-form-item>
        <ivy-form-item label="年龄" label-width="200px">
          <input type="text" />
        </ivy-form-item>
        <ivy-form-item label="性别">
          <ivy-radio-group v-model="formItem.sex">
            <ivy-radio label="1">男</ivy-radio>
            <ivy-radio label="0">女</ivy-radio>
          </ivy-radio-group>
        </ivy-form-item>
        <ivy-form-item label="爱好">
          <ivy-checkbox-group v-model="formItem.interest">
            <ivy-checkbox label="1">读书</ivy-checkbox>
            <ivy-checkbox label="2">篮球</ivy-checkbox>
            <ivy-checkbox label="3">乒乓球</ivy-checkbox>
            <ivy-checkbox label="4">羽毛球</ivy-checkbox>
            <ivy-checkbox label="5">旅游</ivy-checkbox>
          </ivy-checkbox-group>
        </ivy-form-item>
        <ivy-form-item label="地址">
          <input type="text" />
        </ivy-form-item>
        <ivy-form-item label="状态">
          <ivy-switch v-model="formItem.status"> </ivy-switch>
        </ivy-form-item>
      </ivy-form>
    </div>
    <div class="margin-top: 24px"></div>
    <ivy-checkbox v-model="checked">旅游</ivy-checkbox>
    <div class="margin-top: 24px"></div>

    <!-- <ivy-count-up :end="400" :duration="6000" prefix="￥"></ivy-count-up> -->
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
