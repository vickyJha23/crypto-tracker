import type { ChartData } from "../Types/crypto.type";

const generateChartData = (days:number, includeNoise:boolean = false, noiseStrength:number = 0.01):ChartData [] => {
     const data = [];
     for(let i = days; i > 0; i--){
         const date = new Date();
         date.setDate(date.getDate() - i);
         let value = 100 + (Math.random() - 0.5) * 20;
         if(includeNoise){
             value += (Math.random() - 0.5) * noiseStrength * 100;
         }
         data.push({
             time: date.toISOString().split("T")[0],
             price: parseFloat(value.toFixed(2))
         })
     }   
     return data;
}

export default generateChartData;