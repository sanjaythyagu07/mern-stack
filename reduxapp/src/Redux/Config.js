import { configureStore}  from '@reduxjs/toolkit'

const counterLogic = (state=0,action) =>{
    switch(action.type){
        case "add":
            return state+1;
        break;
        case "sub":
            return state-1;
        

    }
    return state;
}
const storeMyDetailsReducer=(state,action) =>{
    switch(action.type){
        case "saveDetails":
            re

    }
}
export const myStore = configureStore({
    reducer:{
        "counter": counterLogic
        
    }
})