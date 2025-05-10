

const THRESHOLDS = [
     {
        value: 1e12, suffix: "T"
     },
     {
        value: 1e9, suffix: "B"
     },
     {
        value: 1e6, suffix: "M"
     },
     {
        value: 1e3, suffix: "K"
     }
]

const formatCurrency = (value: number): string => {
     for (const { value: threshold, suffix} of THRESHOLDS){
         if(value >= threshold){
            return `${(value / threshold).toFixed(2)}${suffix}`;
         }
     }
     return `${value.toFixed(2)}`;
}

export default formatCurrency;