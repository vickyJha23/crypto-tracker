import React, { useRef, useEffect } from "react";
import type {CryptoAsset} from "../Types/crypto.type";
import formatCurrency from "../utils/formateCurrency";

import DataChart from "./DataChart";


interface TableProp {
    crypto: CryptoAsset
}

const TableRow:React.FC<TableProp> = ({crypto}) => {
     const priceRef = useRef<HTMLTableDataCellElement | null>(null);
     const prevPrice = useRef<number | null>(null);

     useEffect(() => {
        if(priceRef.current !== null && prevPrice.current !== null && prevPrice.current !== crypto.price) {
              const className = crypto.price > prevPrice.current ? "!text-green-500": "!text-red-500";
              priceRef.current.classList.add(className);
              const timer = setTimeout(() => {
                if(priceRef.current){
                priceRef.current.classList.remove(className); 
            }
              }, 1000)
            prevPrice.current = crypto.price;
            return () => clearTimeout(timer);
            }
            prevPrice.current = crypto.price;  
     }, [crypto.price])
  return (
     <tr className="text-sm md:text-base transition-all duration-400 ease-linear dark:hover:bg-gray-600 cursor-pointer hover:bg-[#f1f8f9]">
          <td className='dark:text-white border-b-1 px-2 py-6'>
              {crypto.rank}  
          </td>   
          <td className={`dark:text-white border-b-1 px-2 py-6`}>
              <img src={crypto.logoUrl} className="w-6 h-6 md:w-8 md:h-8" />  
          </td>   
          <td className={`dark:text-white dark:border-white border-black border-b-1 px-2 py-6`}>
              {crypto.name}  
          </td>   
          <td ref={priceRef} className={`border-b-1 dark:text-white transition-all duration-400 ease-linear dark:border-white border-black  px-2 py-6`}>
              ${formatCurrency(crypto.price)}  
          </td>   
          <td className={`border-b-1 dark:border-white border-black  px-2 py-6 ${crypto.percentChange1h >=0 ? 'text-green-500': 'text-red-500' }`}>
              {formatCurrency(crypto.percentChange1h)}%  
          </td>   
          <td className={`border-b-1 dark:border-white border-black  px-2 py-6 ${crypto.percentChange24h >=0 ? 'text-green-500': 'text-red-500' }`}>
              {formatCurrency(crypto.percentChange24h)}%  
          </td>   
          <td className={`border-b-1 dark:border-white border-black  px-2 py-6 ${crypto.percentChange7d >=0 ? 'text-green-500': 'text-red-500'}`}>
              {formatCurrency(crypto.percentChange7d)}%  
          </td>   
          <td className='dark:text-white dark:border-white border-black  border-b-1 px-2 py-6'>
              ${formatCurrency(crypto.marketCap)}  
          </td>   
          <td className='dark:text-white dark:border-white border-black  border-b-1 px-2 py-6'>
              ${formatCurrency(crypto.volume24h)}  
          </td>   
          <td className='dark:text-white dark:border-white border-black  border-b-1 px-2 py-6'>
             <div className="flex flex-col justify-center items-center gap-1">
                <span>
                  ${formatCurrency(crypto.circulatingSupply)}
                </span>
                {crypto.maxSupply && <div className="w-full h-1.5 bg-slate-600 rounded-[5px]">
                    <div className="bg-blue-500 h-1.5 rounded-[5px]" style={{
                        width: `${(crypto.circulatingSupply / crypto.maxSupply) * 100}%`
                    }}>

                    </div>
               </div>}
             </div>  
          </td>   
          <td className='dark:text-white dark:border-white border-black border-b-1 px-2 py-6'>
             <DataChart data={crypto.chart7d} isPositive={crypto.percentChange7d >=0 ? true: false} />
          </td>   
     </tr>
  )
}

export default TableRow
