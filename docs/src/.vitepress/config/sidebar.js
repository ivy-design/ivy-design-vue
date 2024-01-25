const guide = [
  { text: "快速开始", link: "/guide/install" },
  { text: "更新日志", link: "/guide/changelog" },
];

const basicComponents = [
  { text: "Icon 图标", link: "/components/icon" },
  { text: "Button 按钮", link: "/components/button" },
  { text: "Space 间距", link: "/components/space" },
  { text: "Link 链接", link: "/components/link" },
  { text: "Text 文字", link: "/components/text" },
];

const layoutComponents = [
  { text: "Layout 布局组件", link: "/components/layout" },
  { text: "Grid 宫格", link: "/components/grid" },
  { text: "Row/Col 行列", link: "/components/row-col" },
  { text: "List 列表", link: "/components/list" },
  { text: "Divider 分割线", link: "/components/divider" },
  { text: "AspectRatio 比例容器", link: "/components/aspect-ratio" },
  { text: "Scrollbar 滚动条", link: "/components/scrollbar" },
];

const formComponents = [
  { text: "Form 表单", link: "/components/form" },
  { text: "Input 输入框", link: "/components/input" },
  { text: "InputNumber 数字输入框", link: "/components/input-number" },
  { text: "Select 下拉选择框", link: "/components/select" },
  { text: "Radio 单选框", link: "/components/radio" },
  { text: "Checkbox 多选框", link: "/components/checkbox" },
  { text: "Switch 开关", link: "/components/switch" },
];

const navigationComponents = [
  { text: "Breadcrumb 面包屑", link: "/components/breadcrumb" },
  { text: "Steps 步骤条", link: "/components/steps" },
  { text: "Dropdown 下拉菜单", link: "/components/dropdown" },
];
const dataComponents = [
  { text: "Badge 徽章", link: "/components/badge" },
  { text: "Card 卡片", link: "/components/card" },
  { text: "Collapse 折叠面板", link: "/components/collapse" },
  { text: "Tag 标签", link: "/components/tag" },
  { text: "Result 结果", link: "/components/result" },
  { text: "Timeline 时间线", link: "/components/timeline" },
  { text: "Empty 空状态", link: "/components/empty" },
  { text: "Progress 进度条", link: "/components/progress" },
  { text: "Image 图片", link: "/components/image" },
];

const feedbackComponents = [
  { text: "Alert 提示", link: "/components/alert" },
  { text: "Dialog 弹窗", link: "/components/dialog" },
  { text: "Drawer 抽屉", link: "/components/drawer" },
  { text: "Tooltip 文字提示", link: "/components/tooltip" },
];

const components = [
  { text: "基础组件", items: basicComponents },
  { text: "布局组件", items: layoutComponents },
  { text: "表单组件", items: formComponents },
  { text: "导航组件", items: navigationComponents },
  { text: "数据组件", items: dataComponents },
  { text: "反馈组件", items: feedbackComponents },
];

export default {
  "/guide/": guide,
  "/components/": components,
};
