# Divider 分割线

区隔内容的分割线。<br />对不同章节的文本段落进行分割。<br />对行内文字/链接进行分割，例如表格的操作列。

## 基础用法

默认为水平分割线，可在中间加入文字。

<div class="demo-block">
        <p>
            Steven Paul Jobs was an American entrepreneur and
            business magnate. He was the chairman, chief executive
            officer, and a co-founder of Apple Inc.
        </p>
        <ivy-divider></ivy-divider>
        <p>
            Steven Paul Jobs was an American entrepreneur and
            business magnate. He was the chairman, chief executive
            officer, and a co-founder of Apple Inc.
        </p>
        <ivy-divider>文字在中间</ivy-divider>
        <p>
            Steven Paul Jobs was an American entrepreneur and
            business magnate. He was the chairman, chief executive
            officer, and a co-founder of Apple Inc.
        </p>
        <ivy-divider dashed></ivy-divider>
        <p>
            Steven Paul Jobs was an American entrepreneur and
            business magnate. He was the chairman, chief executive
            officer, and a co-founder of Apple Inc.
        </p>
</div>

## 垂直分割线

使用 type="vertical" 设置为行内的垂直分割线。

<div class="demo-block">
        <span>text</span>
        <ivy-divider type="vertical"></ivy-divider>
        <span>image</span>
        <ivy-divider type="vertical"></ivy-divider>
        <span>link</span>
</div>

## 标题位置

修改分割线标题的位置。

<div class="demo-block">
        <p>
            Steven Paul Jobs was an American entrepreneur and
            business magnate. He was the chairman, chief executive
            officer, and a co-founder of Apple Inc.
        </p>
        <ivy-divider placement="left">文字在左侧</ivy-divider>
        <p>
            Steven Paul Jobs was an American entrepreneur and
            business magnate. He was the chairman, chief executive
            officer, and a co-founder of Apple Inc.
        </p>
        <ivy-divider>文字在中间</ivy-divider>
        <p>
            Steven Paul Jobs was an American entrepreneur and
            business magnate. He was the chairman, chief executive
            officer, and a co-founder of Apple Inc.
        </p>
        <ivy-divider placement="right">文字在右侧</ivy-divider>
        <p>
            Steven Paul Jobs was an American entrepreneur and
            business magnate. He was the chairman, chief executive
            officer, and a co-founder of Apple Inc.
        </p>
</div>

## Props


<script>
export default {
    data() {
        return {
            tableData: [
                {
                    parameter: 'direction',
                    explain: '设置分割线方向',
                    type: 'String',
                    optionalValue: 'horizontal / vertical',
                    defaultValue: 'horizontal',
                },
                {
                    parameter: 'placement',
                    explain: '设置分割线文案的位置',
                    type: 'String',
                    optionalValue: 'left / right / center',
                    defaultValue: 'center',
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
        cancel1() {
            this.value = false;
        },
    },
};
</script>

<style lang="scss" scoped>
p {
    line-height: 1.4em;
}
p.light {
    color: #666666;
}
</style>
