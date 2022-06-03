import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : []
}

function handleToDoAdd (state,action){
    console.log('inside reducer',action)
    console.log(action.payload.text)
    state.value.push(action.payload.text)
}
function handleToDoRemove(state,action){
    console.log('inside remove action',action)
    console.log(action.payload.evt)
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        todoAdd : handleToDoAdd,
        toDoRemove : handleToDoRemove
    }
})
export const {todoAdd,toDoRemove} = todoSlice.actions
export default todoSlice.reducer