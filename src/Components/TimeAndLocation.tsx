import React from "react";

type Props = {};

const TimeAndLocation = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          Tuesday,31 May 2022 | Localtime :12:46 PM
        </p>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <p className="text-white text-3xl font-medium">Berlin, DE</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
