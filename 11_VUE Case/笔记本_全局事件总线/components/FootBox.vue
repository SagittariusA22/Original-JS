<template>
  <div class="todo-footer" v-show="todosAll">
          <label>
            <!-- <input type="checkbox" :checked = "checkAll" @click="isAll"/> -->
            <input type="checkbox" v-model="checkAll"/>
          </label>
          <span> <span>已完成{{todosTotal}}</span> / 全部{{todosAll}} </span>
          <button class="btn btn-danger" @click="clearTodo">清除已完成任务</button>
        </div>
</template>
  
<script>
    export default {
      name: "FootBox",
      // props:["todos","checkAllTodos","clearAll"],
      props:["todos"],
      computed: {
        todosTotal(){
          // 方法1：判断，i++
          // let i = 0;
          // this.todos.forEach((todoObj)=>{
          //   if(todoObj.done === true) i++
          // });
          // return i
          
          // 方法2
          // return this.todos.reduce((per,todoObj)=>{
          //     return per + (todoObj.done ? 1 : 0)
          // },0);

          // 方法2简写
           return this.todos.reduce((per,todoObj)=> per + (todoObj.done ? 1 : 0),0);
        },
        todosAll(){
          return this.todos.length;
        },

        checkAll:{
          get(){
            return this.todosTotal === this.todosAll && this.todosAll > 0
          },
          set(value){
            // this.checkAllTodos(value)
            this.$emit("checkAllTodos",value)
          }
        }

      },
      methods:{
       clearTodo(){
        if(confirm("确定删除吗？"))
          // this.clearAll()
          this.$emit('clearAll')
       }
      }
    };
</script>

<style scoped>
    .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
    }

    .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    }

    .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
    }

    .todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>