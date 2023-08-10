# List 列表

最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。

## 基础用法

设置属性 `size` 可以显示三种不同尺寸的列表。

可以设置 `header` 或 `footer` 来自定义列表头部或尾部。

<div class="demo-block">
    <strong>默认尺寸:</strong>
    <br /><br />
    <ivy-list header="Header" footer="Footer" border>
        <ivy-list-item header="This is a piece of text."></ivy-list-item>
        <ivy-list-item header="This is a piece of text."></ivy-list-item>
        <ivy-list-item header="This is a piece of text."></ivy-list-item>
    </ivy-list>
    <br />
    <strong>小尺寸:</strong>
    <br /><br />
    <ivy-list header="Header" footer="Footer" border size="small">
        <ivy-list-item header="This is a piece of text."></ivy-list-item>
        <ivy-list-item header="This is a piece of text."></ivy-list-item>
        <ivy-list-item header="This is a piece of text."></ivy-list-item>
    </ivy-list>
    <br />
    <strong>大尺寸:</strong>
    <br /><br />
    <ivy-list header="Header" footer="Footer" border size="large">
        <ivy-list-item header="This is a piece of text."></ivy-list-item>
        <ivy-list-item header="This is a piece of text."></ivy-list-item>
        <ivy-list-item header="This is a piece of text."></ivy-list-item>
    </ivy-list>
</div>

## 带有其它操作的简单列表

带有图标、标题、描述的简单列表。

也可以带有列表操作组。

<div class="demo-block">
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

## 竖排列表样式

设置属性 `vertical` 为 `true` 可实现竖排列表样式。

<div class="demo-block">
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
            style="width: 200px"
        />
        </template>
    </ivy-list-item>
    </ivy-list>
</div>

## List Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| vertical | 是否竖排 | `Boolean` | - | false |
| header | 列表头部 | `String` | - | - |
| footer | 列表底部 | `String` | - | - |
| border | 是否有边框 | `Boolean` | - | false |
| split | 是否有分割线 | `Boolean` | - | true |
| size | 列表大小 | `String` |`small/medium/large` | medium |

## List Slots

| 名称 | 说明 |
|------|------|
| header | 自定义列表头部 |
| default | 用来放置 `list-item` 元素 |
| footer | 自定义列表底部 |

## ListItem Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| avatar | 头像连接 | `String` | - | false |
| header | 标题内容 | `String` | - | - |
| description | 表述内容 | `String` | - | - |

## ListItem Slots

| 名称 | 说明 |
|------|------|
| default | 自定义内容部分 |
| header | 自定义列表头部 |
| description | 自定义描述区域 |
| extra | 自定义额外的内容，仅当List的 `vertical` 为 true是可用  |
| action | 自定义操作区域 |

<script setup>
import { ref } from "vue";

const data = ref([
  {
    title: "This is title 1",
    description:
      "This is description, this is description.",
    avatar:
      "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
    content:
      "This is the content, this is the content, this is the content, this is the content.",
  },
  {
    title: "This is title 2",
    description:
      "This is description, this is description.",
    avatar:
      "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
    content:
      "This is the content, this is the content, this is the content, this is the content.",
  },
  {
    title: "This is title 3",
    description:
      "This is description, this is description.",
    avatar:
      "https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",
    content:
      "This is the content, this is the content, this is the content, this is the content.",
  },
]);
</script>
