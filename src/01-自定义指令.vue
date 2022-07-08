<template>
  <div>
    <input type="text" v-gfocus v-model='num' v-number='num'>
  </div>
</template>
<script>
export default {
  data(){
    return {
      num:'',
    }
  },
  directives:{
    focus:{
      inserted(el){
        el.focus();
      }
    },
    number:{
      // inserted(el){
      //   el.value=el.value.replace(/[^\d.]g/,'');
      // },
      update(el,bind,vnode){
        el.value=el.value.replace(/[^\d.]/g,'');
        // 只是修改了input中渲染的数据，data中的数据仍然有字母
        // 由于自定义指令中无法使用this表示vue实例，因此要借助自定义指令方法提供的参数
        // 方法中的第一个参数表示指令所在的标签元素，第二个参数表示指令相关信息的集合，第三个参数表示虚拟节点
        // console.log(bind);//自定义指令的相关信息的集合
        // console.log(vnode);//虚拟节点，里面的context属性表示vue实例
        // vnode.context.num=el.value;
        // 直接将el.value赋值给this.num不够灵活，因为在自定义指令中只能指定num的值，用户也只能用num
        vnode.context[bind.expression]=el.value;
      }
    }
  }
};
</script>

<style>
</style>
