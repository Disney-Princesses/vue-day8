<template>
  <div>
    <MyHeader title="tabbar"></MyHeader>
    <div style="margin-top:45px">
      <components :is="comName"></components>
    </div>
   <MyTabBar :arr='tabList' @toggleList='toggleListFn'></MyTabBar>
   <!-- <component :is="comName"></component> -->
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyTabBar from "./components/MyTabBar.vue";

import MyGoodsList from './views/MyGoodsList.vue'
import MyGoodsSearch from './views/MyGoodsSearch.vue'
import MyUserInfo from './views/MyUserInfo.vue'

export default {
  name:"App",
  data() {
    return {
      comName:'MyGoodsList',
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList"
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch"
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo"
        }
      ],
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
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo
  },
  methods:{
    toggleListFn(val){
      this.comName=val
    }
  }
};
</script>

<style>
</style>