<template>
    <div class="my-tab-bar">
        <div class="tab-item" :class="{ current: color == item.componentName }" v-for="item in arr"
            :key="item.componentName" @click="changeFn(item.componentName)">
            <!-- 图标 -->
            <span class="iconfont" :class="item.iconText"></span>
            <!-- 文字 -->
            <span>{{ item.text }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        arr: {
            type: Array,
            required: true,
            validators(val) {
                if (val.length >= 2 && val.length <= 5) {
                    return true
                } else {
                    return false
                }
            }
        }
    },
    data() {
        return {
            color: 'MyGoodsList'
        }
    },
    methods: {
        changeFn(val) {
            this.color = val
            this.$emit('changeFooter', val)
        }
    }
}
</script>

<style lang="less" scoped>
.my-tab-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;

    .tab-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
    }
}

.current {
    color: #1d7bff;
}
</style>