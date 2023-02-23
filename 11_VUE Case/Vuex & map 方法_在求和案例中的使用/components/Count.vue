<template>
    <div>
        <h1>当前求和为{{sum}}</h1>
        <h4>当前求和的十倍{{bigSum}}</h4>
        <h4>以前的工作是{{beforeJob}},现在的工作是{{afterJob}}</h4>
        <select v-model.number="number">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(number)">+</button>
        <button @click="decrement(number)">-</button>
        <button @click="incrementOdd(number)">和为奇数再加</button>
        <button @click="incrementWait(number)">等一等再加</button>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
    name:'Count',
    data() {
        return {
            number:1,
        }
    },
    computed:{
        // 插值语法太长，使用计算属性
        // sum(){
        //    return this.$store.state.sum
        // },
        // beforeJob(){
        //     return this.$store.state.beforeJob
        // },
        // afterJob(){
        //     return this.$store.state.afterJob
        // },

        // 上述计算属性的简写  借助mapState生成计算属性，从state中读取数据。（对象写法）
        // ...mapState({sum:'sum', beforeJob:'beforeJob', afterJob:'afterJob'})

        // 上述计算属性的简写  数组写法
        ...mapState(['sum', 'beforeJob', 'afterJob']),
        ...mapGetters(['bigSum']),


    },
    methods:{
        // 程序员亲自写方法
        // 不跳过 actions 
        // increment(){
        //     this.$store.dispatch('jia',this.number)
        // },
        // decrement(){
        //     this.$store.dispatch('jian',this.number)
        // },

        // 可跳过 actions ,直接调用 commit 接口，与大写的函数 JIA
        // increment(){
        //     this.$store.commit('JIA',this.number)
        // },
        // decrement(){
        //     this.$store.commit('JIAN',this.number)
        // },
        // incrementOdd(){
        //     this.$store.dispatch('jiaOdd',this.number)
        // },
        // incrementWait(){
        //     this.$store.dispatch('jiaWait',this.number)
        // },

    /* ************************************************* */

        // 简写上述接口，借助 map 方法
        //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
        ...mapActions({incrementOdd:'jiaOdd', incrementWait:'jiaWait'}),

        // 数组写法，注意绑定的 事件名 和 数据的 键 一样
        // ...mapActions(['jiaOdd', 'jiaWait']),

    /* ************************************************* */

        //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
        ...mapMutations({increment:'JIA', decrement:'JIAN'})

        // 数组写法,注意绑定的 事件名 和 数据的 键 一样
        // ...mapMutations(['JIA', 'JIAN'])
    
    },

}
</script>

<style scope>
    button{
        margin-left: 10px;
    }
</style>