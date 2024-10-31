import Image from "next/image";
import React from "react";
import { ScoreData } from "@/app/types/ScoreItemProps";

const ScoreItem: React.FC<ScoreData> = ({ category, score, icon, categories }) => {
  const colorClasses = [
    "bg-[#fff6f5] text-[#d96665]",
    "bg-[#fffbf2] text-[#fabc4e]",
    "bg-[#f2fbfa] text-[#26a386]",
    "bg-[#f3f3fd] text-[#3943be]",
  ];
  
  const colorMap = React.useMemo(() => {
    const map: { [key: string]: string } = {};
    categories.forEach((category, index) => {
      map[category] = colorClasses[index] || "bg-gray-200 text-gray-800";
    });
    return map;
  }, [categories]);
  

  return (
    <div
      className={`flex items-center justify-between px-4 py-[14px] rounded-lg ${colorMap[category]}`}
    >
      <div className="flex items-center">
        <Image
          src={icon || "/public/assets/images/default.svg" }
          alt={`${category} icon`}
          width={20}
          height={20}
          className="w-5 h-5 mr-2"
        />
        <span className="font-bold">{category}</span>
      </div>
      <div>
        <span className="font-bold text-[#323b4f]">{`${score}`}</span>
        <span className="font-semibold text-[#9a9a94]"> / 100</span>
      </div>
    </div>
  );
};

export default ScoreItem;
