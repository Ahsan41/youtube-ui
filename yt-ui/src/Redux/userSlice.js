import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   currentUser:null,
   loading:false,
   error:false,
};


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
         loginStart: (state)=>{
            state.loading=true
         },
         loginSuccess: (state,action)=>{
            state.loading=false;
            state.currentUser = action.payload;
         },
         loginFailure: (state)=>{
            state.loading=false;
            state.error = true;
         },
         Logout: (state)=>{
            state.currentUser=null;
            state.loading=false;
           state.error=false;
         },
         subscription: (state, action) => {
            if (state.currentUser.subscribeUsers.includes(action.payload)) {
              state.currentUser.subscribeUsers.splice(
                state.currentUser.subscribeUsers.findIndex(
                  (channelId) => channelId === action.payload
                ),
                1
              );
            } else {
              state.currentUser.subscribeUsers.push(action.payload);
            }
          },
    },
  });

  export const{loginStart,loginSuccess,loginFailure , subscription , Logout}= userSlice.actions
  
  export default userSlice.reducer