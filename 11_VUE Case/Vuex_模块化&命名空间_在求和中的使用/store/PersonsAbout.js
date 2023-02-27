import axios from "axios";
import { nanoid } from "nanoid";

const PersonsAbout ={
    namespaced:true, //模块化编码 配合 命名空间
    actions:{
        addServer(content){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    content.commit('ADD_PERSON_NAME', {id:nanoid(), name:response.data})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations:{
        ADD_PERSON_NAME(state,value){
            state.personsList.unshift(value)
        }
    },
    state:{ personsList:[],},
    getters:{
        getFirstPerson(state){
            if(state.personsList.length <= 0) return '';
            return state.personsList[0].name;
        }
    },
};
export default PersonsAbout