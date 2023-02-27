const countAbout ={
    namespaced:true,  //模块化编码 配合 命名空间
    actions:{
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
        },
    
    },
    mutations:{
        JIA(state,value){
            state.sum += value
        },
        JIAN(state,value){
            state.sum -= value
        },
    },
    state:{
        sum:0,
        beforeJob:'建筑',
        afterJob:'IT',
    },
    getters:{
        bigSum(state){
            return state.sum * 10;
        },
    },
};
export default countAbout

