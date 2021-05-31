const state ={
    currentUser:null
}
const getters ={
    currentUser:state=>state.currentUser,
}
const mutations ={
    userLogins(state,data){//更改用户在线信息
        state.currentUser=data;
    }
}
const actions ={
    userLogin({commit},data){
        commit("userLogins",data);
    }
}
export default{
    state,getters,mutations,actions
}