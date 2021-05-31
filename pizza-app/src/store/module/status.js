const state ={
    isLogin:false
}
const getters ={
    isLogin:state=>state.isLogin
}
const mutations ={
    changeLogins(state){
        state.isLogin=!(state.isLogin)
    }
}
const actions ={
    changeLogin({commit}){
        commit("changeLogins")
    }
}
export default{
    state,getters,mutations,actions
}