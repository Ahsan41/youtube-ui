// import { configureStore } from '@reduxjs/toolkit'
// import userReducer from './userSlice.js'
// import VideoSlice from './VideoSlice.js'

// export const store = configureStore({
//   reducer: {
//     currentUser: userReducer,
//     video:VideoSlice,

//   },
// })

import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice.js'
import VideoSlice from './VideoSlice.js'

export const store = configureStore({
  reducer: {
    currentUser: userReducer,
    video: VideoSlice,
  },
})

