import React from "react";
import CountUp from "react-countup";
export const CounterUp = ({ end, label }) => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-4xl font-bold text-[#00BC91]">
        <CountUp end={end} duration={3} />+
      </h4>
      <p className=" text-gray-600">{label}</p>
    </div>
  );
};
