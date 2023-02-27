
import Vue from 'vue'
import Vuex from 'vuex'

import countAbout from './countAbout'
import PersonsAbout from './PersonsAbout'
//应用Vuex插件
Vue.use(Vuex)





// 创建、暴露store
export default new Vuex.Store({
    modules:{
        countAbout,
        PersonsAbout,
    }
})

