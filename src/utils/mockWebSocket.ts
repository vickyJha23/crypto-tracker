import { updateCrypto } from "../redux/features/crytpoSlice";
import type { AppDispatch } from "../redux/stores/store";

const mockWebSocket = (dispatch: AppDispatch) => {
    setInterval(() => {
         const rank =  Math.floor(Math.random() * 5) + 1;
         const price = (Math.random() * 1E3) + 50000;  
         const percentChange1h =  (Math.random () - 0.5).toFixed(2);
         const percentChange24h = (Math.random () - 0.2).toFixed(2);     
         const percentChange7d = (10 + Math.random () - 0.4)     
        //  const marketCap =  (Math.random() * 1E9) + 100000000000 
         const volume24h =  (Math.random() * 1E12) + 100000000000   
         dispatch(updateCrypto({
            rank,
            price,
            percentChange1h:Number(percentChange1h),
            percentChange24h:Number(percentChange24h),
            percentChange7d:Number(percentChange7d),
            // marketCap,
            volume24h
         }))
    }, 1000 + Math.floor(Math.random() * 1000))
}


export default mockWebSocket;