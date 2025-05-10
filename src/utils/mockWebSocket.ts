import { updateCrypto } from "../redux/features/crytpoSlice";
import mockSampleData from "../assets/mockSampleData";
import type { AppDispatch } from "../redux/stores/store";

const mockWebSocket = (dispatch: AppDispatch) => {
  const interval =   setInterval(() => {
         const index =  Math.floor(Math.random() * 5);
         const data = mockSampleData[index];
         const priceChange = (Math.random() * 0.04 - 0.02) * data.price; 
         const price = data.price + priceChange;  
         const percentChange1h =  data.percentChange1h + (Math.random () * 0.4 - 0.1);
         const percentChange24h = data.percentChange24h + (Math.random () * 0.4 - 0.1);     
         const percentChange7d = data.percentChange7d + (Math.random () * 0.03 - 0.01);      
         const changeVolume24h = data.volume24h * (Math.random() * 0.04 - 0.01);
         const volume24h  = data.volume24h + changeVolume24h;  
         dispatch(updateCrypto({
            id:data.id,
            price,
            percentChange1h,
            percentChange24h,
            percentChange7d,
            volume24h
         }))
    }, 1000 + Math.floor(Math.random() * 1000));

    return () => {
         clearInterval(interval)
    }
}


export default mockWebSocket;