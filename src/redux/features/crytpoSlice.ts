import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CryptoAsset, ICryptoState } from "../../Types/crypto.type";
import type { RootState } from "../stores/store";
// import mockSampleData from "../../assets/mockSampleData";


const initialState:ICryptoState = {
     cryptos: [],
     searchQuery: "",
     sortField: 'rank',
     sortDirection: 'asc'
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
          updateCrypto: (state, action:PayloadAction <{id:string, price: number, percentChange1h:number, percentChange24h:number, percentChange7d:number, volume24h:number}>) => {
               const cryptoItem = state.cryptos.find((crypto) => crypto.id === action.payload.id);
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
          },
          setSortField: (state, action: PayloadAction <'rank'| 'price' | 'percentChange1h' | 'percentChange24h' | 'percentChange7d'| 'marketCap' | 'volume24h' | 'circulatingSupply'>) => {
               state.sortField = action.payload   
          },
          setSortDirection: (state, action: PayloadAction <'asc' | 'dsc'>) => {
                state.sortDirection = action.payload     
          }
      }
})

// creating input selectors

 const selectCryptos = (state: RootState) => state.crypto.cryptos;
 const selectSearhQuery = (state: RootState) => state.crypto.searchQuery;
 const selectSortField = (state: RootState) => state.crypto.sortField;
 const selectSortFieldDirection = (state: RootState) => state.crypto.sortDirection;
 

 // helps to memoised selectors 

export const filteredCryptos = createSelector([selectCryptos, selectSearhQuery], (crytos, query) => {
       if(!query) return crytos;
       return crytos.filter((crypto) => crypto.name.toLowerCase().includes(query) || crypto.symbol.toLowerCase().includes(query))
 });

 export const filteredSortedCryptoes = createSelector([filteredCryptos, selectSortField, selectSortFieldDirection], (crypto, field, direction) => {
      return [...crypto].sort((a, b) => {
             let comparison = 0; 
         switch (field) {
               case 'rank':
                   comparison = a.rank - b.rank;
                   break;
               case 'price':
                  comparison = a.price - b.price;
                  break;
               case 'percentChange1h':
                  comparison = a.percentChange1h - b.percentChange1h;
                  break;
               case 'percentChange24h':
                  comparison = a.percentChange24h - b.percentChange24h;
                  break;
               case 'percentChange7d':
                  comparison = a.percentChange7d - b.percentChange7d;
                  break;
               case 'marketCap':
                  comparison = a.marketCap - b.marketCap;
                  break;
               case 'volume24h': 
                  comparison = a.volume24h - b.volume24h
                  break;
               case 'circulatingSupply':
                  comparison = a.circulatingSupply - b.circulatingSupply;
                  break;
               default: 
                  comparison = 0;
                 break;
                 
               }
            return direction === 'asc' ? comparison : -comparison;
         });
 })    
 

export const {addCryptoAssests, updateCrypto, setSearchQuery, setSortField, setSortDirection} = cryptoSlice.actions;
export default cryptoSlice.reducer