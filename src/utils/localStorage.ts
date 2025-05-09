
export const loadDarkMode = ():boolean => {
   const darkMode = localStorage.getItem("darkMode");
   return darkMode === "true"; 
}


export const saveDarkModeToLocalStorage = (darkMode:boolean) => {
       localStorage.setItem("darkMode", String(darkMode));
} 