import React from "react";
import type {CryptoAsset} from "../Types/crypto.type";
import formatCurrency from "../utils/formateCurrency";

import DataChart from "./DataChart";
import { FaS } from "react-icons/fa6";


interface TableProp {
    crypto: CryptoAsset
}

const TableRow:React.FC<TableProp> = ({crypto}) => {
  return (
     <tr className="text-sm md:text-base transition-all duration-400 ease-linear hover:bg-gray-600 cursor-pointer">
          <td className='dark:text-white border-b-1 px-2 py-6'>
              {crypto.rank}  
          </td>   
          <td className={`dark:text-white border-b-1 px-2 py-6`}>
              <img src={crypto.logoUrl} className="w-6 h-6 md:w-8 md:h-8" />  
          </td>   
          <td className={`dark:text-white border-b-1 px-2 py-6`}>
              {crypto.name}  
          </td>   
          <td className={`border-b-1 border-white px-2 py-6 ${crypto.price >=0 ? 'text-green-500': 'text-red-500' }`}>
              ${formatCurrency(crypto.price)}  
          </td>   
          <td className={`border-b-1 border-white px-2 py-6 ${crypto.percentChange1h >=0 ? 'text-green-500': 'text-red-500' }`}>
              {formatCurrency(crypto.percentChange1h)}%  
          </td>   
          <td className={`border-b-1 border-white px-2 py-6 ${crypto.percentChange24h >=0 ? 'text-green-500': 'text-red-500' }`}>
              {formatCurrency(crypto.percentChange24h)}%  
          </td>   
          <td className={`border-b-1 border-white px-2 py-6 ${crypto.percentChange7d >=0 ? 'text-green-500': 'text-red-500'}`}>
              {formatCurrency(crypto.percentChange7d)}%  
          </td>   
          <td className='dark:text-white border-b-1 px-2 py-6'>
              ${formatCurrency(crypto.marketCap)}  
          </td>   
          <td className='dark:text-white border-b-1 px-2 py-6'>
              ${formatCurrency(crypto.volume24h)}  
          </td>   
          <td className='dark:text-white border-b-1 px-2 py-6'>
              ${formatCurrency(crypto.volume24h)}  
          </td>   
          <td className='dark:text-white border-b-1 px-2 py-6'>
             <DataChart data={crypto.chart7d} isPositive={crypto.percentChange7d >=0 ? true: false} />
          </td>   
     </tr>
  )
}

export default TableRow
