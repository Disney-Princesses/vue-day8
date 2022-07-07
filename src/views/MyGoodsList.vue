<template>
  <div>
    <MyTable :glist="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #tbody="scope">
        <td>{{scope.row.id}}</td>
        <td>{{scope.row.goods_name}}</td>
        <td>{{scope.row.goods_price}}</td>
        <td>
          <span
            class="badge badge-warning"
            v-for="(item,index) in scope.row.tags"
            :key="index"
            style="margin-right:10px"
          >{{item}}</span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm">删除</button>
        </td>
      </template>
    </MyTable>
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