import { useState, useEffect } from "react";
import { useAppSelector } from "../redux/hooks/customHook";
import TableRow from "./TableRow";
import type { CryptoAsset } from "../Types/crypto.type";
import { filteredCryptos } from "../redux/features/crytpoSlice";

type field = 'rank'| 'price' | 'percentChange1h' | 'percentChange24h' | 'percentChange7d'| 'marketCap' | 'volume24h' | 'circulatingSupply';

const CryptoTable = () => {
   let filteredCryptoes = useAppSelector(filteredCryptos);
   const [sortField, setSortField] = useState<field>('rank');
   const [sortingDirection, setSortingDirection] = useState <'asc' | 'dsc'>('asc');
   
    const sortingValuesSetter = (field: field) => {
          if(field === sortField) {
              return setSortingDirection((prevDir) =>  prevDir === 'asc' ? 'dsc': 'asc')     
           }
           setSortField(field);
           setSortingDirection('asc');
   } 

  const handleSorting = (): CryptoAsset[] => {
      filteredCryptoes = filteredCryptoes.sort((a, b) => {
           switch (sortField) {
               case 'rank':
                   return sortingDirection === 'asc' ? a.rank - b.rank : b.rank - a.rank;
               case 'price':
                   return sortingDirection === 'asc' ? a.price - b.price : b.price - a.price;
               case 'percentChange1h':
                   return sortingDirection === 'asc' ? a.percentChange1h - b.percentChange1h : b.percentChange1h - a.percentChange1h;
               case 'percentChange24h':
                   return sortingDirection === 'asc' ? a.percentChange24h - b.percentChange24h : b.percentChange24h - a.percentChange24h;
               case 'percentChange7d':
                   return sortingDirection === 'asc' ? a.percentChange7d - b.percentChange7d : b.percentChange7d - a.percentChange7d;
               case 'marketCap':
                   return sortingDirection === 'asc' ? a.marketCap - b.marketCap : b.marketCap - a.marketCap;
               case 'volume24h':
                   return sortingDirection === 'asc' ? a.volume24h - b.volume24h : b.volume24h - a.volume24h;
               case 'circulatingSupply':
                   return sortingDirection === 'asc' ? a.circulatingSupply - b.circulatingSupply : b.circulatingSupply - a.circulatingSupply;
               default:
                   return 0;
           }
         });
         return filteredCryptoes;
 
   }
     
  useEffect(() => {
      handleSorting()
  }, [sortField])


  return (
    <section className="h-full py-5 pb-8 px-5">
         <div className="w-full max-w-sm md:max-w-[1170px] mx-auto h-auto shadow-lg shadow-[#161616] overflow-hidden scrollbar-thin scrollbar-thumb-rounded scrollbar-track-rounded scrollbar-thumb-sky-700 scrollbar-track-[#374152] scrollbar- overflow-x-auto border-1 md:border-b-0 dark:border-white border-black rounded-[5px]">
         <table className="w-full border-collapse shadow-lg shadow-[#161616] text-center overflow-x-auto table-auto">
             <thead className="dark:bg-[#374152] bg-[#f1f5f9] dark:text-white capitalize tracking-wider">
                  <tr className="font-normal text-sm md:text-base">
                       <th onClick={()  => sortingValuesSetter('rank')} className="border-b-1 dark:border-white px-2 py-3">
                         # {sortingDirection === "asc" ? "": ""}
                      </th>
                       <th className="border-b-1 dark:border-white px-2 py-3">
                          logo
                      </th>
                       <th className="border-b-1 dark:border-white px-2 py-3">
                         name
                      </th>
                       <th className="border-b-1 dark:border-white px-2 py-3">
                         Price
                      </th>
                       <th className="border-b-1 dark:border-white px-2 py-3">
                         1h %
                      </th>
                       <th className="border-b-1 dark:border-white px-2 py-3">
                         24h %
                      </th>
                       <th className="border-b-1 dark:border-white px-2 py-3">
                         7d %
                      </th>
                       <th className="border-b-1 dark:border-white px-2 py-3">
                          Market cap
                      </th>
                       <th className="border-b-1 dark:border-white px-2 py-3">
                          Volume(24h)
                      </th>
                       <th className="border-b-1 dark:border-white px-2 py-3">
                          Circulating supply
                      </th>
                       <th className="border-b-1 dark:border-white px-2 py-3">
                          Last 7 days
                      </th>
                  </tr>
             </thead>
             <tbody className="dark:bg-[#1F2937] bg-white">
                  {
                    filteredCryptoes.map((crypto, index) => {
                        return <TableRow key={index} crypto={crypto} />
                    })
                  }
             </tbody>
         </table>   
         </div>
    </section>
  )
}

export default CryptoTable
