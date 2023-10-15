import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser:null,
  loading:false,
 error:false,
};


export const VideoSlice = createSlice({
    name: 'video',
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
         // Logout: (state)=>{
         //    state.currentUser=null,
         //    state.loading=false;
         //   state.error=false;
         // }
    },
  });

  export const{loginStart,loginSuccess,loginFailure}= VideoSlice.actions
  
  export default VideoSlice.reducer