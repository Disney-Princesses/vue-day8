<template>
  <div>
    <!-- 目标：自定义指令设置表单聚焦 -->
    <!-- 局部 -->
    <input type="text" v-focus/>
    <p v-color='colorstr' @click="colorstr='blue'">点击我可以改变颜色哦</p>
    <!-- 全局 -->
    全局框：<input type="text" v-focusl>
  </div>
</template>

<script>
export default {
    data() {
        return {
            colorstr:'red'
        }
    },
    
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    
    },
    color: {
      inserted(el, bind) {
        console.log(bind);
        el.style.color = bind.value;
      },
      update(el, bind) {
        el.style.color = bind.value;
      }
    }
  }
};
</script>

<style>
</style>