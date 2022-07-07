<template>
  <div>
    <MyHeader title="购物车车" backgroundColor="pink"></MyHeader>
    <MyGoods style="margin-top:45px" v-for="item in list" :key="item.id" :obj='item'></MyGoods>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyGoods from "./components/MyGoods.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name:"App",
  data() {
    return {
      list:[]
    }
  },
  created() {
    this.$axios({
      url: "/api/cart"
    }).then(res => {
      this.list=res.data.list
      console.log(this.list);
    });
  },
  components: {
    MyHeader,
    MyGoods,
    MyFooter
  }
};
</script>

<style>
</style>