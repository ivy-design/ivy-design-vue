<template>
    <div class="page-grid">
        <div class="page-item">
            <div>
                <p class="page-title">Layout 布局</p>
                <p class="page-dec">通过基础的 24 分栏，迅速简便地创建布局。</p>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">基础布局</p>
                <p class="page-item-dec">使用单一分栏创建基础的栅格布局。</p>
            </div>
            <div class="page-item-content">
                <mx-row class="grid">
                    <mx-col :span="24">
                        <div class="grid-content"></div>
                    </mx-col>
                </mx-row>
                <mx-row class="grid">
                    <mx-col :span="12">
                        <div
                            class="grid-content"
                            style="background: #d3dce6;"
                        ></div>
                    </mx-col>
                    <mx-col :span="12">
                        <div
                            class="grid-content"
                            style="background: #e5e9f2;"
                        ></div>
                    </mx-col>
                </mx-row>
                <mx-row class="grid">
                    <mx-col :span="8">
                        <div
                            class="grid-content"
                            style="background: #d3dce6;"
                        ></div>
                    </mx-col>
                    <mx-col :span="8">
                        <div
                            class="grid-content"
                            style="background: #e5e9f2;"
                        ></div>
                    </mx-col>
                    <mx-col :span="8">
                        <div
                            class="grid-content"
                            style="background: #d3dce6;"
                        ></div>
                    </mx-col>
                </mx-row>
                <mx-row class="grid">
                    <mx-col :span="6">
                        <div
                            class="grid-content"
                            style="background: #d3dce6;"
                        ></div>
                    </mx-col>
                    <mx-col :span="6">
                        <div
                            class="grid-content"
                            style="background: #e5e9f2;"
                        ></div>
                    </mx-col>
                    <mx-col :span="6">
                        <div
                            class="grid-content"
                            style="background: #d3dce6;"
                        ></div>
                    </mx-col>
                    <mx-col :span="6">
                        <div
                            class="grid-content"
                            style="background: #e5e9f2;"
                        ></div>
                    </mx-col>
                </mx-row>
                <mx-row class="grid">
                    <mx-col :span="4">
                        <div
                            class="grid-content"
                            style="background: #d3dce6;"
                        ></div>
                    </mx-col>
                    <mx-col :span="4">
                        <div
                            class="grid-content"
                            style="background: #e5e9f2;"
                        ></div>
                    </mx-col>
                    <mx-col :span="4">
                        <div
                            class="grid-content"
                            style="background: #d3dce6;"
                        ></div>
                    </mx-col>
                    <mx-col :span="4">
                        <div
                            class="grid-content"
                            style="background: #e5e9f2;"
                        ></div>
                    </mx-col>
                    <mx-col :span="4">
                        <div
                            class="grid-content"
                            style="background: #d3dce6;"
                        ></div>
                    </mx-col>
                    <mx-col :span="4">
                        <div
                            class="grid-content"
                            style="background: #e5e9f2;"
                        ></div>
                    </mx-col>
                </mx-row>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">分栏间隔</p>
                <p class="page-item-dec">分栏之间存在间隔</p>
            </div>
            <div class="page-grid-item-content">
                <mx-row :gutter="20">
                    <mx-col :span="6">
                        <div
                            class="grid-content"
                            style="background: #d3dce6;"
                        ></div>
                    </mx-col>
                    <mx-col :span="6">
                        <div
                            class="grid-content"
                            style="background: #e5e9f2;"
                        ></div>
                    </mx-col>
                    <mx-col :span="6">
                        <div
                            class="grid-content"
                            style="background: #d3dce6;"
                        ></div>
                    </mx-col>
                    <mx-col :span="6">
                        <div
                            class="grid-content"
                            style="background: #e5e9f2;"
                        ></div>
                    </mx-col>
                </mx-row>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">混合布局</p>
                <p class="page-item-dec">
                    通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。
                </p>
            </div>
            <div class="page-grid-item-content">
                <mx-row :gutter="20" class="grid">
                    <mx-col :span="16">
                        <div
                            class="grid-content"
                            style="background: #d3dce6;"
                        ></div>
                    </mx-col>
                    <mx-col :span="8">
                        <div
                            class="grid-content"
                            style="background: #e5e9f2;"
                        ></div>
                    </mx-col>
                </mx-row>
                <mx-row :gutter="20" class="grid">
                    <mx-col :span="8">
                        <div
                            class="grid-content"
                            style="background: #d3dce6;"
                        ></div>
                    </mx-col>
                    <mx-col :span="8">
                        <div
                            class="grid-content"
                            style="background: #e5e9f2;"
                        ></div>
                    </mx-col>
                    <mx-col :span="4">
                        <div
                            class="grid-content"
                            style="background: #d3dce6;"
                        ></div>
                    </mx-col>
                    <mx-col :span="4">
                        <div
                            class="grid-content"
                            style="background: #e5e9f2;"
                        ></div>
                    </mx-col>
                </mx-row>
                <mx-row :gutter="20" class="grid">
                    <mx-col :span="4">
                        <div
                            class="grid-content"
                            style="background: #d3dce6;"
                        ></div>
                    </mx-col>
                    <mx-col :span="16">
                        <div
                            class="grid-content"
                            style="background: #e5e9f2;"
                        ></div>
                    </mx-col>
                    <mx-col :span="4">
                        <div
                            class="grid-content"
                            style="background: #d3dce6;"
                        ></div>
                    </mx-col>
                </mx-row>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-item-title">分栏偏移</p>
                <p class="page-item-dec">支持偏移指定的栏数。</p>
            </div>
            <div class="page-grid-item-content">
                <mx-row :gutter="20" class="grid">
                    <mx-col :span="6">
                        <div
                            class="grid-content"
                            style="background: #e5e9f2;"
                        ></div>
                    </mx-col>
                    <mx-col :span="6" :offset="6">
                        <div
                            class="grid-content"
                            style="background: #e5e9f2;"
                        ></div>
                    </mx-col>
                </mx-row>
                <mx-row :gutter="20" class="grid">
                    <mx-col :span="6" :offset="6">
                        <div
                            class="grid-content"
                            style="background: #e5e9f2;"
                        ></div>
                    </mx-col>
                    <mx-col :span="6" :offset="6">
                        <div
                            class="grid-content"
                            style="background: #e5e9f2;"
                        ></div>
                    </mx-col>
                </mx-row>
                <mx-row :gutter="20" class="grid">
                    <mx-col :span="12" :offset="6">
                        <div
                            class="grid-content"
                            style="background: #e5e9f2;"
                        ></div>
                    </mx-col>
                </mx-row>
            </div>
        </div>
        <div class="page-item">
            <div>
                <p class="page-title">API</p>
            </div>
            <div class="page-item">
                <div>
                    <p class="page-item-title">Row Attributes</p>
                </div>
                <div class="page-item-content">
                    <mx-table :data="tableData" :columns="tableRowColumns">
                    </mx-table>
                </div>
            </div>
            <div class="page-item">
                <div>
                    <p class="page-item-title">Col Attributes</p>
                </div>
                <div class="page-item-content">
                    <mx-table :data="ColData" :columns="tableRowColumns">
                    </mx-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { columns } from '@/data/table.js';
export default {
    data() {
        return {
            tableRowColumns: columns,
            tableData: [
                {
                    parameter: 'gutter',
                    explain: '栅格间隔',
                    type: 'Number',
                    optionalValue: '—',
                    defaultValue: '0',
                },
            ],
            ColData: [
                {
                    parameter: 'span',
                    explain: '栅格占据的列数',
                    type: 'Number',
                    optionalValue: '—',
                    defaultValue: '24',
                },
                {
                    parameter: 'offset',
                    explain: '栅格左侧的间隔格数',
                    type: 'Number',
                    optionalValue: '—',
                    defaultValue: '0',
                },
            ],
        };
    },
    methods: {
        handleClose(val) {
            this.tags = this.tags.filter(cur => {
                return val != cur.name;
            });
        },
        ok1() {
            this.value = false;
        },
        cancmx1() {
            this.value = false;
        },
    },
};
</script>

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
