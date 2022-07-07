<template>
    <div>
        <MyTable :arr="list">
            <template v-slot:thead>
                <th>序号</th>
                <th>商品名称</th>
                <th>价格</th>
                <th>标签</th>
                <th>操作</th>
            </template>
            <template v-slot:tbody="scope">
                <!-- {{ scope.row }} -->
                <td>{{ scope.row.id }}</td>
                <td>{{ scope.row.goods_name }}</td>
                <td>{{ scope.row.goods_price }}</td>
                <td>
                    <input type="text" class="tag-input form-control" style="width: 100px" v-if="scope.row.inputVisible"
                        v-focus @blur="scope.row.inputVisible = false" @keydown.enter="addFn(scope.row)"
                        @keydown.esc="scope.row.inputValue = ''" v-model="scope.row.inputValue" />
                    <button class="btn btn-primary btn-sm add-tag" v-else
                        @click="scope.row.inputVisible = true">+Tag</button>
                    <span style="margin-left:8px" class="badge badge-primary" v-for="(item, index) in scope.row.tags"
                        :key="index">{{ item }}</span>
                </td>
                <td>
                    <button class="btn btn-danger btn-sm" @click="delFn(scope.row.id)" v-isShow="dome">删除</button>
                    <button class="btn  btn-sm" style="background:skyblue;margin-left:8px">编辑</button>
                </td>
            </template>

        </MyTable>
    </div>
</template>

<script>
import MyTable from '../components/MyTable'
export default {
    data() {
        return {
            list: [],
            newList: ['admin', 'test', 'developer'],
            dome: 'admin'
        }
    },
    components: {
        MyTable
    },
    created() {
        this.$axios({
            url: '/api/goods'
        }).then(res => {
            this.list = res.data.data
        })
    },
    methods: {
        delFn(id) {
            const index = this.list.findIndex(item => item.id == id)
            this.list.splice(index, 1)
        },
        addFn(val) {
            if (val.inputValue.trim() == '') {
                return alert('内容不能为空')
            }
            val.tags.push(val.inputValue)
            val.inputValue = ''
        }
    }
}
</script>

<style>
</style>