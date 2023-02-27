<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- <TopBox :addTodo="addTodo"></TopBox> -->   <!-- props -->
        <TopBox @addTodo="addTodo"></TopBox>  <!-- 自定义事件 -->
        <center-box
          :todos="todos"
        ></center-box>
        <!-- <FootBox :todos="todos" :checkAllTodos="checkAllTodos" :clearAll="clearAll"></FootBox> -->
        <FootBox :todos="todos" @checkAllTodos="checkAllTodos" @clearAll="clearAll"></FootBox>
      </div>
    </div>
  </div>
</template>

<script>
import CenterBox from "./components/CenterBox.vue";
import CenterItems from "./components/CenterItems.vue";
import FootBox from "./components/FootBox.vue";
import TopBox from "./components/TopBox.vue";
import { nanoid } from "nanoid";
import { watch } from 'vue';

export default {
  name: "App",
  components: {
    CenterBox,
    CenterItems,
    FootBox,
    TopBox,
  },
  data() {
    return {
      todos:[],
    };
  },
  methods:{
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },
    filterid(id){
      this.todos.forEach((todoObj)=>{
        if(todoObj.id === id) todoObj.done = !todoObj.done;
      })
    },
    updatetodos(id,content){
      this.todos.forEach((todoObj)=>{
        if(todoObj.id === id) todoObj.content = content;
      })
    },
    deleteid(id){
      //遍历数组，利用id拿到对应的索引，根据索引删除数组的元素
      // this.todos.forEach((todoObj)=>{
      //     var index = this.todos.findIndex(todoObj=>{
      //       if(todoObj.id === id) return true
      //     });
      //     this.todos.splice(index,1);
      // })

      // 利用过滤器删除 filter
      this.todos = this.todos.filter(todoObj=>{
        return todoObj.id !== id
      });
    },

    checkAllTodos(done){
        this.todos.forEach((todoObj)=>{
          todoObj.done = done
        })
    },
    clearAll(){
      this.todos = this.todos.filter((todoObj)=>{
         return !todoObj.done 
      })
    }
  },
  // 本地存储
  // watch:{
  //   todos:{
  //     deep:true,
  //     handler(value){
  //       localStorage.setItem("todos",JSON.stringify(value))
  //     }
  //   }
  // }
  mounted() {
    this.$bus.$on('filterid',this.filterid)
    this.$bus.$on('deleteid',this.deleteid)
    // 编辑
    this.$bus.$on('updatetodos',this.updatetodos)
  },
  beforeDestroy(){
    this.$bus.$off(['filterid','deleteid'])
  },
}
</script>

<style>
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-todoEdit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(50, 122, 151);
  margin-right: 8px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>