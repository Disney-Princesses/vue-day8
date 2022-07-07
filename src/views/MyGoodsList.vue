<template>
  <div>
    <MyTable :arr="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            v-focus
            v-if="scope.row.inputVisible"
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            @blur="scope.row.inputVisible = false"
            @keydown.enter="enterFn(scope.row)"
            @keydown.esc="scope.row.inputValue = ''"
            v-model="scope.row.inputValue"
          />
          <button
           v-else
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            style="margin-right: 8px"
            class="badge badge-info"
            v-for="(item, index) in scope.row.tags"
            :key="index"
            >{{ item }}</span
          >
        </td>
        <td>
          <button class="btn btn-danger" @click="del(scope.row.id)">
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable.vue";
export default {
  components: {
    MyTable,
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.$axios({
      url: "/api/goods",
    }).then((res) => {
    //   console.log(res);
      this.list = res.data.data;
    });
  },
  methods: {
    del(id) {
      let index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    enterFn(obj){
        // console.log(val);
        if(obj.inputValue.trim().length == 0){
            return alert("Please enter")
        }
        obj.tags.push(obj.inputValue)
        obj.inputValue = ''
    }
  },
};
</script>

<style></style>
