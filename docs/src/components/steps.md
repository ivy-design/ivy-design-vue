# Steps 步骤条

## 基础用法

简单的步骤条。

<div class="demo-block">
<ivy-steps v-model="active">
    <ivy-step
        header="步骤一"
        description="这里是该步骤的描述信息"
    ></ivy-step>
    <ivy-step
        header="步骤二"
        description="这里是该步骤的描述信息"
    ></ivy-step>
    <ivy-step
        header="步骤三"
        description="这里是该步骤的描述信息"
    ></ivy-step>
</ivy-steps>
<ivy-button class="mt-20" type="primary" @click="next">
    下一步
</ivy-button>
</div>

## 设置状态

通过status设置当前步骤的状态，通过finishStatus设置已完成步骤的状态

<div class="demo-block">
    <ivy-steps v-model="active1" status="wait">
        <ivy-step
            header="步骤一"
            description="这里是该步骤的描述信息"
        ></ivy-step>
        <ivy-step
            header="步骤二"
            description="这里是该步骤的描述信息"
            status="success"
        ></ivy-step>
        <ivy-step
            header="步骤三"
            description="这里是该步骤的描述信息"
            status="error"
        ></ivy-step>
    </ivy-steps>
    <ivy-button class="mt-20" type="primary" @click="next1">
        下一步
    </ivy-button>
</div>

## 竖式步骤条

竖直方向的步骤条。

<div class="demo-block">
    <div style="height: 240px;">
        <ivy-steps v-model="active1" direction="vertical">
            <ivy-step
                header="步骤一"
                description="这里是该步骤的描述信息"
            ></ivy-step>
            <ivy-step
                header="步骤二"
                description="这里是该步骤的描述信息"
            ></ivy-step>
            <ivy-step
                header="步骤三"
                description="这里是该步骤的描述信息"
            ></ivy-step>
        </ivy-steps>
    </div>
    <ivy-button class="mt-20" type="primary" @click="next1">
        下一步
    </ivy-button>
</div>

<script setup>
import { ref } from 'vue';
const active = ref(2)
const active1 = ref(1)

const next = () => {
    if (active.value < 3) {
        active.value += 1;
    } else {
        active.value = 0;
    }
}
const next1 = () => {
    if (active1.value < 3) {
        active1.value += 1;
    } else {
        active1.value = 0;
    }
}
</script>

## Steps Props

|属性名|说明|类型|可选值|默认值|
|-|-|-|-|-|
|v-model/modelValue|标题|string|—|—|
|direction|方向|string|`horizontal/vertical`|horizontal|
|status|当前步骤的状态|string|`wait/process/finish/error`|info|
|finishStatus|步骤结束的状态|string|`wait/success/process/finish/error`|info|


## Step Props

|属性名|说明|类型|可选值|默认值|
|-|-|-|-|-|
|header|标题|string|—|—|
|description|描述|string|—|—|
|status|步骤的状态|string|`wait/process/finish/error`|wait|
