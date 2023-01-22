import React from "react";
import { cities } from "@/shared/cities";

type Props = {};

const TopButtons = (props: Props) => {
  return (
    <div className="flex items-center justify-center gap-10 my-6">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium">
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
