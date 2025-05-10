import { useEffect} from "react";
import { useAppSelector, useAppDispatch } from "./redux/hooks/customHook";
import {saveDarkModeToLocalStorage} from "./utils/localStorage"
import { addCryptoAssests } from "./redux/features/crytpoSlice";
import mockSampleData from "./assets/mockSampleData";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CryptoTable from "./components/CryptoTable";
import mockWebSocket from "./utils/mockWebSocket";

const App = () => {
    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
    const dispatch = useAppDispatch();
    useEffect(() => {
       const root = document.documentElement;
       if(isDarkMode){
          root.classList.add("dark");  
       }
       else {
            root.classList.remove("dark");
       }
       saveDarkModeToLocalStorage(isDarkMode);
    }, [isDarkMode])
    useEffect(() => {
        dispatch(addCryptoAssests(mockSampleData))
        mockWebSocket(dispatch)
    }, [dispatch])
  return (
    <section className="dark:bg-slate-900 bg-white min-h-screen">
        <Header />
        <main className="dark:bg-[#111827] bg-white md:h-[calc(100vh-224px)]" style={{
             height: "calc()"
        }}>
            <CryptoTable /> 
        </main>
        <Footer />
    </section>
  );
};

export default App;
