<template>
  <div class="my-tab-bar">
    <div class="tab-item" v-for="(item,index) in arr" :key="item.componentName" @click="clickFn(index,item.componentName)" :class="{current:index==currentIndex}">
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconText"></span>
      <!-- 文字 -->
      <span>{{item.text}}</span>
      
    </div>
  </div>
</template>

<script>


export default {
 data() {
    return {
      currentIndex:0,
    };
  },
  props:{
    arr:{
        type:Array,
        validator(val) {
            if(val.length>=2 && val.length<=5) {
                return true
            }
            return false
        }
    }
  },
  methods:{
    clickFn(val,name) {
        this.currentIndex=val
        this.$emit('toggleList',name)
    }
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
    cursor:pointer
  }
}

.current {
  color: #1d7bff;
}
</style>