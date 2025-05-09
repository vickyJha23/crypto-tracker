export interface ChartData {
  time: string;
  price: number;
}

export interface CryptoAsset {
    id: string;           
    rank:number        
    name: string;               
    symbol: string;              
    logoUrl: string;            
    price: number;               
    percentChange1h: number;     
    percentChange24h: number;   
    percentChange7d: number;     
    marketCap: number;           
    volume24h: number;          
    volumeCrypto: number
    circulatingSupply: number;   
    maxSupply: number | null;    
    chart7d: ChartData[];             
  }

export interface ICryptoState {
    cryptos: CryptoAsset [] | [];
    searchQuery: string;
  }
  export interface IThemeState {
       isDarkMode: boolean
  }