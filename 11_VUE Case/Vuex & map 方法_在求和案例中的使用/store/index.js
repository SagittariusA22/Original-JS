

import Vue from 'vue'
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//actions——用于响应组件中的动作
const actions = {
    jia(content,value){
        content.commit('JIA',value)
    },
    jian(content,value){
        content.commit('JIAN',value)
    },
    jiaOdd(content,value){
        if(content.state.sum % 2){
            content.commit('JIA',value)
        }
    },
    jiaWait(content,value){
        setTimeout(()=>{
            content.commit('JIA',value)
        },1000)
    }
};

//mutations——用于操作数据（state）
const mutations = {
    JIA(state,value){
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    }
};

//准备state——用于存储数据
const state = {
    sum:0,
    beforeJob:'建筑',
    afterJob:'IT'
};

//getters——用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum * 10
    }
};

// 创建、暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})

