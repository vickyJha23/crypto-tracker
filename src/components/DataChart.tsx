import React from "react";
import type { ChartData } from "../Types/crypto.type";
import { LineChart, Line, ResponsiveContainer } from "recharts";

interface dataChartProp {
  data: ChartData [];
  isPositive: boolean
}

const DataChart: React.FC<dataChartProp> = ({ data, isPositive = true }) => {
  return (
    <div className="w-[160px] h-[40px]">
       <ResponsiveContainer className="w-full h-full">
         <LineChart width={160} height={40} data={data}>
            <Line type="monotone" dataKey="price" stroke={isPositive ? "#008000":"#ff0000"} />
         </LineChart>
       </ResponsiveContainer>
    </div>
  );
};

export default DataChart;
