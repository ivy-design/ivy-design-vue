<script setup lang="ts">
import { reactive, ref } from "vue";

const data = ref([
  {
    title: "This is title 1",
    description:
      "This is description, this is description, this is description.",
    avatar:
      "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
    content:
      "This is the content, this is the content, this is the content, this is the content.",
  },
  {
    title: "This is title 2",
    description:
      "This is description, this is description, this is description.",
    avatar:
      "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
    content:
      "This is the content, this is the content, this is the content, this is the content.",
  },
  {
    title: "This is title 3",
    description:
      "This is description, this is description, this is description.",
    avatar:
      "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
    content:
      "This is the content, this is the content, this is the content, this is the content.",
  },
]);

const formItem = reactive({
  name: "",
  age: "",
  sex: "",
  address: "",
});
</script>

<template>
  <div>
    <div class="margin-top: 24px">
      <ivy-form :model="formItem">
        <ivy-form-item label="姓名">
          <input type="text" />
        </ivy-form-item>
        <ivy-form-item label="年龄">
          <input type="text" />
        </ivy-form-item>
        <ivy-form-item label="性别">
          <input type="text" />
        </ivy-form-item>
        <ivy-form-item label="地址">
          <input type="text" />
        </ivy-form-item>
      </ivy-form>
    </div>
    <div class="margin-top: 24px">
      <ivy-list>
        <ivy-list-item
          avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
          header="This is title"
          description="This is description, this is description."
        >
        </ivy-list-item>
        <ivy-list-item
          avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
          header="This is title"
          description="This is description, this is description."
        >
        </ivy-list-item>
        <ivy-list-item
          avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
          header="This is title"
          description="This is description, this is description."
        >
          <template #action>
            <a href="">Edit</a>
            <a href="">More</a>
          </template>
        </ivy-list-item>
        <ivy-list-item
          avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
          header="This is title"
          description="This is description, this is description."
        >
          <template #action>
            <a href="">Edit</a>
            <a href="">More</a>
          </template>
        </ivy-list-item>
      </ivy-list>
    </div>
    <div class="margin-top: 24px">
      <ivy-list vertical border>
        <ivy-list-item
          v-for="item in data"
          :key="item.title"
          :avatar="item.avatar"
          :header="item.title"
          :description="item.description"
        >
          {{ item.content }}
          <template #action>
            <ivy-icon name="star"></ivy-icon> 123
            <ivy-icon name="pointer"></ivy-icon> 234
            <ivy-icon name="chat-square"></ivy-icon> 345
          </template>
          <template #extra>
            <img
              src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large"
              style="width: 280px"
            />
          </template>
        </ivy-list-item>
      </ivy-list>
    </div>

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
