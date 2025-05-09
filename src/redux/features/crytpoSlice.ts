import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CryptoAsset, ICryptoState } from "../../Types/crypto.type";
import type { RootState } from "../stores/store";


const initialState:ICryptoState = {
     cryptos: [],
     searchQuery: "",
}



const cryptoSlice = createSlice({
      name:"crypto",
      initialState: initialState,
      reducers: {
          addCryptoAssests: (state, action:PayloadAction <CryptoAsset []>) => {
            const newIds = new Set(action.payload.map((crypto: CryptoAsset) => crypto.id));
            state.cryptos = [
              ...state.cryptos.filter(crypto => !newIds.has(crypto.id)),
              ...action.payload,
            ];
          },
          updateCrypto: (state, action:PayloadAction <{rank:number, price: number, percentChange1h:number, percentChange24h:number, percentChange7d:number, volume24h:number}>) => {
               const cryptoItem = state.cryptos.find((crypto) => crypto.rank === action.payload.rank);
               console.log(cryptoItem);
               if(cryptoItem){
                     cryptoItem.price = action.payload.price;
                     cryptoItem.percentChange1h = action.payload.percentChange1h;
                     cryptoItem.percentChange24h = action.payload.percentChange24h;
                     cryptoItem.percentChange7d = action.payload.percentChange7d;
                    //  cryptoItem.marketCap  = action.payload.marketCap;
                     cryptoItem.volume24h = action.payload.volume24h / action.payload.price;
               }
          },  
          setSearchQuery: (state, action: PayloadAction <string>) => {
                state.searchQuery = action.payload.toLowerCase();
          }
      }
})

 const selectCryptos = (state: RootState) => state.crypto.cryptos;
 const selectSearhQuery = (state: RootState) => state.crypto.searchQuery;
 
 
export const filteredCryptos = createSelector([selectCryptos, selectSearhQuery], (crytos, query) => {
       if(!query) return crytos;
       return crytos.filter((crypto) => crypto.name.includes(query) || crypto.symbol.includes(query))
 }) 





export const {addCryptoAssests, updateCrypto} = cryptoSlice.actions;
export default cryptoSlice.reducer