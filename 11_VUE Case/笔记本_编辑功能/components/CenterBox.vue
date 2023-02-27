<template>
  <ul class="todo-main">
    <CenterItems
      v-for="todoObj in todos"
      :todoObj="todoObj"
      :key="todoObj.id"
      :done="todoObj.done"
      :content="todoObj.content"
      :timer="todoObj.timer"
    ></CenterItems>
  </ul>
</template>

<script>
import CenterItems from "./CenterItems.vue";
export default {
  name: "CenterBox",
  components: {
    CenterItems,
  },
  props: ["todos"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>