export default{//改变数据
    setMenuItems(state,data){
        state.menuItems=data;
    },
    changeLogins(state){
        state.isLogin=!(state.isLogin)
    },
    removeMenuItems(state,data){
        data=data-1;
        state.menuItems.splice(data,1)
        state.menuItems.forEach((value,index) => {//处理剩余的id
            if(index>=data){
                value.id-=1;
            }
        });  
    },
    pushToMenuItems(state,data){
        data.id=state.menuItems.length+1;
        state.menuItems.push(data);
    },
    userLogins(state,data){//更改用户在线信息
        state.currentUser=data;
    }
}