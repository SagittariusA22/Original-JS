<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todoObj.done"
        @click="getid(todoObj.id)"
      />
      <span v-show="!todoObj.isEdit">{{ todoObj.content }}</span>
      <input
        type="text"
        :value="todoObj.content"
        v-show="todoObj.isEdit"
        @blur="handleBlur(todoObj, $event)"
        ref="inputContent"
      />
      <span class="timeStyle">{{ todoObj.timer }}</span>
    </label>
    <button class="btn btn-danger" @click="getdeleteid(todoObj.id)">
      删除
    </button>
    <button
      class="btn btn-todoEdit"
      @click="handleEdit(todoObj)"
      v-show="!todoObj.isEdit"
    >
      编辑
    </button>
  </li>
</template>

<script>
export default {
  name: "CenterItems",
  props: ["todoObj"],
  methods: {
    // 勾选or取消勾选，获取id
    getid(id) {
      // this.filterid(id)
      this.$bus.$emit("filterid", id);
    },
    //删除
    getdeleteid(id) {
      if (confirm("确认删除吗？")) {
        // this.deleteid(id);
        this.$bus.$emit("deleteid", id);
      }
    },
    //编辑
    handleEdit(todoObj) {
      //添加属性 isEdit 为 true，用其控制 content 、input、按钮的显隐,属性没必要多次添加
      if (todoObj.hasOwnProperty("isEdit")) {
        todoObj.isEdit = true;
      } else {
        this.$set(todoObj, "isEdit", true);
      }
      // 自动获取焦点
      this.$nextTick(function () {
        this.$refs.inputContent.focus();
      });
    },

    //失去焦点回调（真正执行修改逻辑）
    handleBlur(todoObj, event) {
      todoObj.isEdit = false;
      if (!event.target.value.trim()) return alert("内容不能为空");
      this.$bus.$emit("updatetodos", todoObj.id, event.target.value);
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  position: relative;
}
.timeStyle {
  font-size: 14px;
  position: absolute;
  right: 150px;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background: #ddd;
}
li:hover button {
  display: block;
}
</style>