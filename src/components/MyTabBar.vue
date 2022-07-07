<template>
  <div class="my-tab-bar">
    <div
      class="tab-item"
      v-for="(item, index) in arr"
      :key="index"
      :class="{ current: currentIndex == item.componentName }"
      @click="clickFn(item.componentName)"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconfont"></span>
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
      validator(val) {
        if (val.length >= 2 && val.length <= 5) {
          return true;
        }
        return false;
      },
    },
  },
  data() {
    return {
      currentIndex: "MyGoodsList",
    };
  },
  methods: {
    clickFn(val) {
      this.currentIndex = val;
      this.$emit("change", val);
    },
  },
};
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
  }
}

.current {
  color: #1d7bff;
}
</style>
