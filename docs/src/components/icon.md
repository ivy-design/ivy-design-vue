# Icon 图标

提供了一套常用的图标集合。

## 使用方法

直接通过设置 `name` 来使用。

<ivy-icon name="close" size="24"></ivy-icon>
<ivy-icon name="plus" style="margin: 0 24px;" size="24"></ivy-icon>
<ivy-icon name="minus" size="24"></ivy-icon>

## 所有图标

<div class="flex flex-wrap" style="border: 1px solid #ddd;border-width: 1px 0 0 1px;">
<div 
    v-for="(it,i) in iconList"
    :key="i"
    class="flex flex-justify-content-center align-items-center"
    style="border: 1px solid #ddd;border-width: 0 1px 1px 0;width: 20%;aspect-ratio: 1.6;flex-direction: column;">
    <ivy-icon :name="it" size="24" />
    <span class="margin-top-small">{{ it }}</span>
</div>
</div>

## Props

| 属性 | 描述     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| name | 名称     | String | —      | —      |
| size | 大小(px) | string | —      | -      |

<script setup>
import { ref } from 'vue';

const iconList = ref([
    "avatar",
    "caret-top",
    "arrow-left-bold",
    "chat-dot-round",
    "camera-filled",
    "brush-filled",
    "camera",
    "burger",
    "arrow-up-bold",
    "chat-line-square",
    "alarm-clock",
    "chat-square",
    "close",
    "coffee-cup",
    "bowl",
    "crop",
    "arrow-right",
    "back",
    "caret-left",
    "box",
    "caret-bottom",
    "arrow-left",
    "aim",
    "arrow-down-bold",
    "add-location",
    "basketball",
    "arrow-right-bold",
    "circle-check",
    "cloudy",
    "arrow-up",
    "close-bold",
    "bell",
    "collection",
    "circle-check-filled",
    "circle-plus-filled",
    "bottom-left",
    "bell-filled",
    "cpu",
    "connection",
    "check",
    "circle-plus",
    "collection-tag",
    "caret-right",
    "apple",
    "chrome-filled",
    "circle-close",
    "bicycle",
    "comment",
    "cellphone",
    "compass",
    "baseball",
    "arrow-down",
    "chat-line-round",
    "bottom-right",
    "circle-close-filled",
    "chicken",
    "coin",
    "bottom",
    "chat-round",
    "briefcase",
    "coffee",
    "brush",
    "cherry",
    "clock",
    "cold-drink",
    "coordinate",
    "checked",
    "chat-dot-square",
    "calendar",
    "credit-card",
    "copy-document",
    "data-board",
    "edit-pen",
    "document",
    "d-arrow-right",
    "delete-filled",
    "delete-location",
    "drizzling",
    "edit",
    "d-caret",
    "data-analysis",
    "data-line",
    "download",
    "document-remove",
    "folder-opened",
    "element-plus",
    "folder-add",
    "folder-delete",
    "full-screen",
    "fries",
    "folder",
    "eleme",
    "film",
    "delete",
    "d-arrow-left",
    "document-copy",
    "food",
    "discount",
    "eleme-filled",
    "folder-remove",
    "document-delete",
    "first-aid-kit",
    "football",
    "fold",
    "flag",
    "dessert",
    "expand",
    "female",
    "document-checked",
    "folder-checked",
    "fork-spoon",
    "dish-dot",
    "failed",
    "finished",
    "dish",
    "filter",
    "files",
    "document-add",
    "ice-cream-square",
    "ice-cream",
    "home-filled",
    "goods-filled",
    "info-filled",
    "help",
    "headset",
    "goblet-square-full",
    "house",
    "ice-tea",
    "hide",
    "hot-water",
    "goblet-full",
    "grape",
    "goblet-square",
    "guide",
    "iphone",
    "goblet",
    "gold-medal",
    "goods",
    "histogram",
    "grid",
    "handbag",
    "ice-drink",
    "ice-cream-round",
    "help-filled",
    "location-filled",
    "map-location",
    "lock",
    "lollipop",
    "location",
    "memo",
    "lightning",
    "menu",
    "more",
    "mouse",
    "mostly-cloudy",
    "medal",
    "list",
    "moon-night",
    "minus",
    "microphone",
    "milk-tea",
    "management",
    "loading",
    "mute-notification",
    "magic-stick",
    "message",
    "male",
    "mug",
    "knife-fork",
    "mic",
    "moon",
    "money",
    "key",
    "link",
    "mute",
    "location-information",
    "message-box",
    "monitor",
    "magnet",
    "more-filled",
    "no-smoking",
    "opportunity",
    "paperclip",
    "place",
    "reading-lamp",
    "notebook",
    "operation",
    "phone-filled",
    "quartz-watch",
    "remove-filled",
    "right",
    "reading",
    "picture-rounded",
    "refresh-right",
    "remove",
    "rank",
    "refresh-left",
    "promotion",
    "position",
    "pouring",
    "printer",
    "odometer",
    "refresh",
    "partly-cloudy",
    "orange",
    "picture-filled",
    "notification",
    "office-building",
    "postcard",
    "open",
    "present",
    "pear",
    "plus",
    "pointer",
    "refrigerator",
    "question-filled",
    "platform",
    "phone",
    "pie-chart",
    "price-tag",
    "picture",
    "select",
    "star-filled",
    "shopping-trolley",
    "service",
    "tools",
    "school",
    "setting",
    "scale-to-original",
    "share",
    "sort-up",
    "semi-select",
    "sold-out",
    "wallet",
    "shopping-bag",
    "switch-filled",
    "success-filled",
    "stamp",
    "suitcase-line",
    "shop",
    "watch",
    "user-filled",
    "timer",
    "sunny",
    "upload",
    "sunrise",
    "sort-down",
    "ship",
    "sunset",
    "user",
    "turn-off",
    "top",
    "smoking",
    "switch-button",
    "zoom-out",
    "umbrella",
    "shopping-cart",
    "sugar",
    "warning",
    "stopwatch",
    "wallet-filled",
    "warn-triangle-filled",
    "unlock",
    "zoom-in",
    "video-pause",
    "top-left",
    "video-camera",
    "view",
    "trend-charts",
    "takeaway-box",
    "ticket",
    "set-up",
    "sell",
    "tickets",
    "scissor",
    "switch",
    "trophy",
    "suitcase",
    "trophy-base",
    "soccer",
    "top-right",
    "video-camera-filled",
    "watermelon",
    "upload-filled",
    "star",
    "van",
    "warning-filled",
    "shopping-cart-full",
    "search",
    "wind-power",
    "sort",
    "video-play",
    "toilet-paper"
])
</script>
