import { createSlice } from "@reduxjs/toolkit";
import type { IThemeState } from "../../Types/crypto.type";
import { loadDarkMode } from "../../utils/localStorage";


const initialState:IThemeState = {
     isDarkMode: loadDarkMode()
}

const themeSlice = createSlice({
     name: "theme",
     initialState:initialState,
     reducers: {
          toggleDarkMode: (state) => {
             state.isDarkMode = !state.isDarkMode
          }
     }      
})



export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer