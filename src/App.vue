<template>
  <div>
    <!-- 头部 -->
    <MyHeader title="tabbar"></MyHeader>

    <!-- 中部 -->
    <component :is="comName" style="margin-top: 45px"></component>
    <!-- 底部 -->
    <MyTabBar :arr="tabList" @change="changeFn"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyTabBar from "./components/MyTabBar.vue";
import MyGoodsList from "./views/MyGoodsList.vue";
import MyGoodsSearch from "./views/MyGoodsSearch.vue";
import MyUserInfo from "./views/MyUserInfo.vue";

export default {
  data() {
    return {
      comName: "MyGoodsList",
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
    };
  },
  components: {
    MyHeader,
    MyTabBar,

    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
  methods: {
    changeFn(val) {
      this.comName = val;
    },
  },
};
</script>

<style></style>
