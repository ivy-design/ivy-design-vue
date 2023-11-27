# 内置过渡动画

ivy-design 内应用在部分组件的过渡动画，你也可以直接使用。 在使用之前请阅读 transition 组件文档 。

## fade 淡入淡出

<div class="page-item-content">
    <ivy-button @click="show = !show">click me</ivy-button>
    <div class="transition-parent">
        <transition name="mx-fade-in-linear">
            <div v-show="show" class="transition-box">
                .mx-fade-in-linear
            </div>
        </transition>
        <transition name="mx-fade-in">
            <div v-show="show" class="transition-box">
                .mx-fade-in
            </div>
        </transition>
    </div>
</div>

## zoom 缩放

<div class="page-item-content">
    <ivy-button @click="show2 = !show2">Click Me</ivy-button>
    <div class="transition-parent">
        <transition name="mx-zoom-in-center">
            <div v-show="show2" class="transition-box">
                .mx-zoom-in-center
            </div>
        </transition>
        <transition name="mx-zoom-in-top">
            <div v-show="show2" class="transition-box">
                .mx-zoom-in-top
            </div>
        </transition>
        <transition name="mx-zoom-in-bottom">
            <div v-show="show2" class="transition-box">
                .mx-zoom-in-bottom
            </div>
        </transition>
    </div>
</div>

## collapse 展开折叠

使用 mx-collapse-transition 组件实现折叠展开效果。

<div class="page-item-content">
    <ivy-button @click="show3 = !show3">Click Me</ivy-button>
    <div style="margin-top: 20px; height: 200px;">
        <ivy-collapse-transition>
            <div v-show="show3">
                <div class="transition-box">
                    mx-collapse-transition
                </div>
                <div class="transition-box">
                    mx-collapse-transition
                </div>
            </div>
        </ivy-collapse-transition>
    </div>
</div>

<script>
export default {
    data() {
        return {
            show: true,
            show2: true,
            show3: true,
        };
    },
};
</script>

<style lang="scss" scoped>
.page-modal {
    font-size: 14px;
    background-color: #fff;
}
.page-modal-item {
    padding: 20px;
}
h1 {
    font-weight: 500;
    font-size: 1.7em;
}
.page-modal-item-content {
    padding: 20px;
    border: 1px solid #eeeeee;
    width: 600px;
}
p {
    line-height: 1.4em;
}
p.light {
    color: #666666;
}
.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409eff;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
}
.transition-parent {
    display: flex;
    margin-top: 20px;
}
</style>
