# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。


## 基础布局

使用单一分栏创建基础的栅格布局。


<div class="page-item-content">
    <ivy-row class="grid">
        <ivy-col :span="24">
            <div class="grid-content"></div>
        </ivy-col>
    </ivy-row>
    <ivy-row class="grid">
        <ivy-col :span="12">
            <div
                class="grid-content"
                style="background: #d3dce6;"
            ></div>
        </ivy-col>
        <ivy-col :span="12">
            <div
                class="grid-content"
                style="background: #e5e9f2;"
            ></div>
        </ivy-col>
    </ivy-row>
    <ivy-row class="grid">
        <ivy-col :span="8">
            <div
                class="grid-content"
                style="background: #d3dce6;"
            ></div>
        </ivy-col>
        <ivy-col :span="8">
            <div
                class="grid-content"
                style="background: #e5e9f2;"
            ></div>
        </ivy-col>
        <ivy-col :span="8">
            <div
                class="grid-content"
                style="background: #d3dce6;"
            ></div>
        </ivy-col>
    </ivy-row>
    <ivy-row class="grid">
        <ivy-col :span="6">
            <div
                class="grid-content"
                style="background: #d3dce6;"
            ></div>
        </ivy-col>
        <ivy-col :span="6">
            <div
                class="grid-content"
                style="background: #e5e9f2;"
            ></div>
        </ivy-col>
        <ivy-col :span="6">
            <div
                class="grid-content"
                style="background: #d3dce6;"
            ></div>
        </ivy-col>
        <ivy-col :span="6">
            <div
                class="grid-content"
                style="background: #e5e9f2;"
            ></div>
        </ivy-col>
    </ivy-row>
    <ivy-row class="grid">
        <ivy-col :span="4">
            <div
                class="grid-content"
                style="background: #d3dce6;"
            ></div>
        </ivy-col>
        <ivy-col :span="4">
            <div
                class="grid-content"
                style="background: #e5e9f2;"
            ></div>
        </ivy-col>
        <ivy-col :span="4">
            <div
                class="grid-content"
                style="background: #d3dce6;"
            ></div>
        </ivy-col>
        <ivy-col :span="4">
            <div
                class="grid-content"
                style="background: #e5e9f2;"
            ></div>
        </ivy-col>
        <ivy-col :span="4">
            <div
                class="grid-content"
                style="background: #d3dce6;"
            ></div>
        </ivy-col>
        <ivy-col :span="4">
            <div
                class="grid-content"
                style="background: #e5e9f2;"
            ></div>
        </ivy-col>
    </ivy-row>
</div>

## 分栏间隔

分栏之间存在间隔

<div class="page-grid-item-content">
    <ivy-row :gutter="20">
        <ivy-col :span="6">
            <div
                class="grid-content"
                style="background: #d3dce6;"
            ></div>
        </ivy-col>
        <ivy-col :span="6">
            <div
                class="grid-content"
                style="background: #e5e9f2;"
            ></div>
        </ivy-col>
        <ivy-col :span="6">
            <div
                class="grid-content"
                style="background: #d3dce6;"
            ></div>
        </ivy-col>
        <ivy-col :span="6">
            <div
                class="grid-content"
                style="background: #e5e9f2;"
            ></div>
        </ivy-col>
    </ivy-row>
</div>

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<div class="page-grid-item-content">
    <ivy-row :gutter="20" class="grid">
        <ivy-col :span="16">
            <div
                class="grid-content"
                style="background: #d3dce6;"
            ></div>
        </ivy-col>
        <ivy-col :span="8">
            <div
                class="grid-content"
                style="background: #e5e9f2;"
            ></div>
        </ivy-col>
    </ivy-row>
    <ivy-row :gutter="20" class="grid">
        <ivy-col :span="8">
            <div
                class="grid-content"
                style="background: #d3dce6;"
            ></div>
        </ivy-col>
        <ivy-col :span="8">
            <div
                class="grid-content"
                style="background: #e5e9f2;"
            ></div>
        </ivy-col>
        <ivy-col :span="4">
            <div
                class="grid-content"
                style="background: #d3dce6;"
            ></div>
        </ivy-col>
        <ivy-col :span="4">
            <div
                class="grid-content"
                style="background: #e5e9f2;"
            ></div>
        </ivy-col>
    </ivy-row>
    <ivy-row :gutter="20" class="grid">
        <ivy-col :span="4">
            <div
                class="grid-content"
                style="background: #d3dce6;"
            ></div>
        </ivy-col>
        <ivy-col :span="16">
            <div
                class="grid-content"
                style="background: #e5e9f2;"
            ></div>
        </ivy-col>
        <ivy-col :span="4">
            <div
                class="grid-content"
                style="background: #d3dce6;"
            ></div>
        </ivy-col>
    </ivy-row>
</div>

## 分栏偏移

支持偏移指定的栏数。

<div class="page-grid-item-content">
    <ivy-row :gutter="20" class="grid">
        <ivy-col :span="6">
            <div
                class="grid-content"
                style="background: #e5e9f2;"
            ></div>
        </ivy-col>
        <ivy-col :span="6" :offset="6">
            <div
                class="grid-content"
                style="background: #e5e9f2;"
            ></div>
        </ivy-col>
    </ivy-row>
    <ivy-row :gutter="20" class="grid">
        <ivy-col :span="6" :offset="6">
            <div
                class="grid-content"
                style="background: #e5e9f2;"
            ></div>
        </ivy-col>
        <ivy-col :span="6" :offset="6">
            <div
                class="grid-content"
                style="background: #e5e9f2;"
            ></div>
        </ivy-col>
    </ivy-row>
    <ivy-row :gutter="20" class="grid">
        <ivy-col :span="12" :offset="6">
            <div
                class="grid-content"
                style="background: #e5e9f2;"
            ></div>
        </ivy-col>
    </ivy-row>
</div>


## API

### Row Attributes

| 属性| 描述 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
|gutter|栅格间隔|number|-|0|
### Col Attributes

| 属性| 描述 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
|span|栅格占据的列数|number|-|24|
|offset|栅格左侧的间隔格数|number|-|0|


<style lang="scss" scoped>
.grid + .grid {
    margin-top: 20px;
}
.grid-content {
    height: 32px;
    background: #99a9bf;
    border-radius: 4px;
}
</style>
