// import { configureStore } from '@reduxjs/toolkit'
// import userReducer from './userSlice.js'
// import VideoSlice from './VideoSlice.js'

// export const store = configureStore({
//   reducer: {
//     currentUser: userReducer,
//     video:VideoSlice,

//   },
// })

import { configureStore , combineReducers} from '@reduxjs/toolkit'
import userReducer from './userSlice.js'
import VideoSlice from './VideoSlice.js'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({currentUser:userReducer , video:VideoSlice})

const persistedReducer = persistReducer(persistConfig , rootReducer)

export const store = configureStore({
  reducer: {
    persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),   
})


export const persistor = persistStore(store)

