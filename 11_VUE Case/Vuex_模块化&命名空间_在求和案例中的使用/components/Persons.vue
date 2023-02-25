<template>
<div>
    <h3>Count的求和为{{sum}}</h3>
    <h3>第一个人的名字{{getPerson}}</h3>
    <input type="text" placeholder="请输入名字" v-model="personName" @keyup.enter='addPersonName'>
    <button @click="addPersonName">添加</button>
    <button @click="addZhang">添加姓张的人</button> 
    <button @click="addServer">服务器添加人</button> 
    <ul>
        <li v-for="p in personsList" :key="p.id">{{p.name}}</li>
    </ul>
</div>
  
</template>

<script>
import { mapState } from 'vuex'
import {nanoid} from 'nanoid'
export default {
    name:'Persons',
    data() {
        return {
            personName:''
        }
    },
    computed:{
        sum(){
          return this.$store.state.countAbout.sum
        },
        personsList(){
            return this.$store.state.PersonsAbout.personsList
        },
        getPerson(){
            return this.$store.getters['PersonsAbout/getFirstPerson']
        }
    },
    methods: {
        addPersonName(){
            const person = {id:nanoid(),name:this.personName};
            this.$store.commit('PersonsAbout/ADD_PERSON_NAME', person);
            this.personName = '';
        },
        addZhang(){
            if(this.personName.indexOf('张') === 0){
                const person = {id:nanoid(),name:this.personName};
                this.$store.commit('PersonsAbout/ADD_PERSON_NAME', person);
                this.personName = '';
            }else{
                alert('不对')
                this.personName = '';
            }
        },
        addServer(){
            this.$store.dispatch('PersonsAbout/addServer')
        },
    },
}
</script>

<style>

</style>