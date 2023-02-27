<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="content"
      @keyup.enter="add"
      autofocus="autofocus"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import moment from "moment";
export default {
  name: "TopBox",
  data() {
    return {
      content: "",
    };
  },
  methods: {
    add() {
      // 空串不能输入，去掉前后空格，弹出提示
      if (!this.content.trim()) return alert("输入不能为空");

      // 获取时间戳
      const settime = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
      
      //  声明变量，将拿到的value 包成对象
      const todoObj = {
        id: nanoid(),
        content: this.content,
        done: false,
        timer: settime,
      };

      //  调用从app传过来的函数，将拿到的value传回去
      // this.addTodo(todoObj);
      this.$emit("addTodo",todoObj)

    //  清空input
    this.content = "";
    },
  },
};
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>