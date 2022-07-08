<template>
  <div>
    <MyTable :arr="goodsList">
      <template v-slot:header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template v-slot:tbody="scoped">
        <td>{{ scoped.row.id }}</td>
        <td>{{ scoped.row.goods_name }}</td>
        <td>{{ scoped.row.goods_price }}</td>
        <td>
          <input
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-if="scoped.row.inputVisible"
            v-focus
            @blur="scoped.row.inputVisible = false"
            @keydown.enter="enterFn(scoped.row)"
            v-model="scoped.row.inputValue"
            @keydown.esc="scoped.row.inputValue = ''"
          />
          <button
            class="btn btn-primary btn-sm add-tag"
            v-else
            @click="scoped.row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            class="badge badge-warning"
            v-for="item in scoped.row.tags"
            :key="item"
            style="margin-right: 8px"
            >{{ item }}</span
          >
        </td>
        <td>
          <button
            class="btn btn-danger btn-sm"
            @click="delFn(scoped.row.id)"
            style="margin-right: 5px"
          >
            删除
          </button>
          <button
            class="btn badge-primary btn-sm"
            @click="editFn"
            v-isShow="ismount"
          >
            编辑
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable.vue";
export default {
  data() {
    return {
      goodsList: [],
      ismount: '',
    };
  },
  components: {
    MyTable,
  },
  created() {
    this.$axios({
      url: "/api/goods",
    }).then((res) => {
      this.goodsList = res.data.data;
    });
  },
  methods: {
    delFn(id) {
      const index = this.goodsList.findIndex((ele) => ele.id == id);
      this.goodsList.splice(index, 1);
    },
    enterFn(obj) {
      if (obj.inputValue.trim() == "") {
        return alert("请输入内容");
      }
      obj.tags.push(obj.inputValue);
      obj.inputValue = "";
    },
    editFn() {
      const yourname = prompt("请输入名字：");
      if (yourname == "admin") {
        this.ismount = 1;
      } else {
        this.ismount = 0;
      }
    },
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
    isShow: {
      update(el, bind, vnode) {
        if (vnode.context[bind.expression] == 1) {
          console.log(1);
          el.disabled = false;
        } else if (vnode.context[bind.expression] == 0) {
          console.log(0);
          el.disabled = true;
        }
      },
    },
  },
};
</script>

<style>
</style>