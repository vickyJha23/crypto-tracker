import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "../features/crytpoSlice"
import themeReducer from "../features/themeSlice"

// create a redux store 
export const store = configureStore({
     reducer: {
         crypto: cryptoReducer,
         theme: themeReducer
     }
})


export type RootState =  ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch