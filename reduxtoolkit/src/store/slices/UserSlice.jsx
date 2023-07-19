import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers:{
        addUser(state, action){
            state.push(action.payload);
        },

        removeUser(state, action){
            //console.log('hi', action.payload);
            state.splice(action.payload,1);
        },
        deleteUsers(state, action){
            // console.log('delete all user');
            // state.length = 0;
            return [];
        }
    }
})

export {userSlice} ;
// console.log(users.actions);
export const {addUser, removeUser, deleteUsers} = userSlice.actions; 