export default{

changeLogin({commit}){
    commit("changeLogins")
},
userLogin({commit},data){
    commit("userLogins",data);
}

}