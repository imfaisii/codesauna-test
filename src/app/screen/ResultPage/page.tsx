"use client";
import React from "react";
import data from "../../data.json";
import ScoreItem from "@/app/components/ScoreItem";
import { ResultCardProps } from "@/app/types/ResultCardProps";

const ResultCard: React.FC = () => {
  const totalScore = React.useCallback(
    () => data.reduce((acc, item) => acc + item.score, 0),
    [data]
  );

  const totalPossibleScore = data.length * 100; 
  const percentageScore = Math.round((totalScore() / totalPossibleScore) * 100);

  const resultCard: ResultCardProps = {
    score: percentageScore,
    total: 100,
  };

  const categories = data.map((item) => item.category);

  return (
    <div className="bg-cover bg-center items-center justify-center lg:flex bg-[url('/assets/images//background.jpg')] h-[100vh]">
    <div className="flex items-center justify-center min-h-screen lg:min-h-fit bg-white md:p-4 lg:h-[80%] lg:w-[85%]">
      <div className="bg-white rounded-t-[0px] md:rounded-[28px] shadow-lg flex flex-col md:flex-row overflow-hidden max-w-[680px] md:max-w-3xl w-[650px] ">
        {/* Left Section */}
        <div className="flex flex-col rounded-t-[0px] rounded-b-[28px] md:rounded-[28px] items-center justify-center py-8 w-full md:w-1/2 bg-gradient-to-b from-[#6743ff] to-[#312ceb] text-white p-6">
          <h2 className="text-lg md:text-[22px] font-semibold text-[#bdb3ff] pb-4">
            Your Result
          </h2>
          <div className="flex items-center flex-col gap-[4px] pt-6 justify-center w-44 h-44 rounded-full bg-gradient-to-b from-[#4c22cc] to-[#4633ed] mt-4 mb-4 md:mb-6">
            <span className="text-4xl md:text-[64px] font-bold">
              {resultCard.score}
            </span>
            <span className="text-md font-bold md:text-md mt-2 text-[#877aff]">
              of {resultCard.total}
            </span>
          </div>
          <p className="text-xl md:text-[28px] font-semibold pt-1 pb-2">
            Great
          </p>
          <p className="text-center font-semibold mt-2 !leading-5 text-sm md:text-base w-[80%] pb-4 text-[#bdb3ff]">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-9 py-8">
          <h3 className="text-lg md:text-[22px] font-semibold md:font-bold mb-4 text-[#323b4f]">
            Summary
          </h3>
          <div className="space-y-3 mt-6">
            {data.map((item) => (
              <ScoreItem
                key={item.category}
                category={item.category}
                score={item.score}
                icon={item.icon}
                categories={categories}
              />
            ))}
          </div>
          <button className="w-full mt-8 py-3 transition-colors duration-700 ease-in-out bg-[#303b59] hover:bg-gradient-to-b from-[#6743ff] to-[#312ceb] text-white rounded-full font-bold"
          aria-label="Continue to the next page"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ResultCard;
