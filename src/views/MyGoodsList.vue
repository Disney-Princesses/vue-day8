<template>
  <div>
    <MyTable :glist="list"></MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable";
export default {
  data() {
    return {
      list: []
    };
  },
  components: {
    MyTable
  },
  created() {
    this.$axios({
      url: "/api/goods"
    }).then(res => {
      console.log(res.data.data);
      this.list = res.data.data;
    });
  }
};
</script>

<style>
</style>