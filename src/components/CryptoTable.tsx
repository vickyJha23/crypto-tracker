import { useAppSelector, useAppDispatch } from "../redux/hooks/customHook";
import { setSortField, setSortDirection } from "../redux/features/crytpoSlice";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import TableRow from "./TableRow";
// import type { CryptoAsset } from "../Types/crypto.type";

import {filteredSortedCryptoes} from "../redux/features/crytpoSlice";

type Field = 'rank'| 'price' | 'percentChange1h' | 'percentChange24h' | 'percentChange7d'| 'marketCap' | 'volume24h' | 'circulatingSupply';

const CryptoTable = () => {
   const cryptoToDisplay = useAppSelector(filteredSortedCryptoes);
   const sortingField = useAppSelector((state) => state.crypto.sortField);
   const sortingDirection = useAppSelector((state) => state.crypto.sortDirection);
   const dispatch = useAppDispatch();

    const sortingValuesSetter = (field: Field) => {
          if(field === sortingField) {
                const sortNewDirection = sortingDirection === "asc" ? "dsc": "asc";
                return dispatch(setSortDirection(sortNewDirection));
            }
           dispatch(setSortField(field));
           dispatch(setSortDirection("asc"));
   } 

// 
  return (
    <section className="h-full py-5 pb-8 px-5">
         <div className="w-full max-w-sm md:max-w-[1170px] mx-auto h-auto shadow-lg shadow-[#161616] overflow-hidden scrollbar-thin scrollbar-thumb-rounded scrollbar-track-rounded scrollbar-thumb-sky-700 scrollbar-track-[#374152] scrollbar- overflow-x-auto border-1 md:border-b-0 dark:border-white border-black rounded-[5px]">
         <table className="w-full border-collapse shadow-lg shadow-[#161616] text-center overflow-x-auto table-auto">
             <thead className="dark:bg-[#374152] bg-[#f1f5f9] dark:text-white capitalize tracking-wider">
                  <tr className="font-normal text-sm">
                       <th className="border-b-1 dark:border-white px-2 py-3">
                          <div onClick={()  => sortingValuesSetter('rank')} className="flex gap-0.5 items-center cursor-pointer">
                          <span>#</span> {sortingField == "rank" && (sortingDirection === "asc" ? <MdKeyboardArrowUp size={18} />: <MdKeyboardArrowDown />)}
                          </div>
                      </th>
                       <th className="border-b-1 dark:border-white px-2 py-3">
                          logo
                      </th>
                       <th className="border-b-1 dark:border-white px-2 py-3">
                         name
                      </th>
                       <th className="border-b-1 dark:border-white px-2 py-3">
                       <div onClick={(e) => sortingValuesSetter(e.currentTarget.firstChild?.textContent as Field)} className="flex gap-0.5 items-center cursor-pointer">
                          <span>price</span> {sortingField==="price" && (sortingDirection === "asc" ? <MdKeyboardArrowUp size={18} />: <MdKeyboardArrowDown />)}
                          </div>
                      </th>
                       <th className="border-b-1 dark:border-white px-2 py-3">
                          <div onClick={() => sortingValuesSetter("percentChange1h")} className="flex gap-0.5 items-center cursor-pointer">
                          <span>1h%</span> {sortingField === "percentChange1h" && (sortingDirection === "asc" ? <MdKeyboardArrowUp size={18} />: <MdKeyboardArrowDown />)}
                          </div>
                      </th>
                       <th className="border-b-1 dark:border-white px-2 py-3">
                         <div onClick={() => sortingValuesSetter("percentChange24h")} className="flex gap-0.5 items-center cursor-pointer">
                           <span>24h%</span> {sortingField === "percentChange24h" && (sortingDirection === "asc" ? <MdKeyboardArrowUp size={18} />: <MdKeyboardArrowDown />)}
                        </div>
                      </th>
                       <th className="border-b-1 dark:border-white px-2 py-3">
                         <div onClick={(e) => sortingValuesSetter("percentChange7d")} className="flex gap-0.5 items-center cursor-pointer">
                          <span>7d%</span> {sortingField === "percentChange7d" && (sortingDirection === "asc" ? <MdKeyboardArrowUp size={18} />: <MdKeyboardArrowDown />)}
                          </div>
                      </th>
                       <th className="border-b-1 dark:border-white px-2 py-3">
                          <div onClick={(e) => sortingValuesSetter(e.currentTarget.firstChild?.textContent?.split(" ").join("") as Field)} className="flex gap-0.5 items-center cursor-pointer">
                          <span>market Cap</span> {sortingField === "marketCap" && (sortingDirection === "asc" ? <MdKeyboardArrowUp size={18} />: <MdKeyboardArrowDown />)}
                          </div>
                      </th>
                       <th className="border-b-1 dark:border-white px-2 py-3">
                          <div onClick={(e) => sortingValuesSetter(e.currentTarget.firstChild?.textContent?.split(" ").join("") as Field)} className="flex gap-0.5 items-center cursor-pointer">
                          <span>volume 24h</span> {sortingField === "volume24h" && (sortingDirection === "asc" ? <MdKeyboardArrowUp size={18} />: <MdKeyboardArrowDown />)}
                          </div>
                      </th>
                       <th className="border-b-1 dark:border-white px-2 py-3">
                          <div onClick={(e) => sortingValuesSetter(e.currentTarget.firstChild?.textContent?.split(" ").join("") as Field)} className="flex gap-0.5 items-center cursor-pointer">
                          <span>circulating Supply</span> {sortingField === "circulatingSupply" && (sortingDirection === "asc" ? <MdKeyboardArrowUp size={18} />: <MdKeyboardArrowDown />)}
                          </div>
                      </th>
                       <th className="border-b-1 dark:border-white px-2 py-3">
                          Last 7 days
                      </th>
                  </tr>
             </thead>
             <tbody className="dark:bg-[#1F2937] bg-white">
                  { 
                     cryptoToDisplay.map((crypto, index) => {
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
