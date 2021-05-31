const state ={
    menuItems:{}
}
const getters ={
    getMenuItems:state=>state.menuItems,
}
const mutations ={
    setMenuItems(state,data){
        state.menuItems=data;
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
    }
}
const actions ={
    
}
export default{
    state,getters,mutations,actions
}