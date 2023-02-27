<template>
  <li>
    <label>
      <input type="checkbox" :checked="todoObj.done" @click="getid(todoObj.id)"/>
      <span>{{ todoObj.content }}</span>
      <span id="timeStyle">{{ todoObj.timer }}</span>
    </label>
    <button class="btn btn-danger" @click="getdeleteid(todoObj.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "CenterItems",
  props:['todoObj','filterid','deleteid'],
	methods: {
		getid(id){
			this.filterid(id)
		},
		getdeleteid(id){
			if(confirm("确认删除吗？")){
				this.deleteid(id);
			}
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
#timeStyle {
  font-size: 14px;
  position: absolute;
  right: 70px;
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
li:hover{
	background: #ddd;
}
li:hover button{
	display: block;
}
</style>