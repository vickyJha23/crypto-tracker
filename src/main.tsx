import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { store } from "./redux/stores/store.ts";
import { Provider } from 'react-redux';

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider  store={ store } >
         <App />
    </Provider>
  </StrictMode>,
)
