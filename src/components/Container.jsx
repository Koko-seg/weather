// import { useState } from "react";
import Image from "next/image";
export const Container = ({}) => {
  // const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <div className="relative flex w-[567px] justify-center z-10">
        <div className=" right-[70px] w-full -top-16 z-30">
          <div className="relative overflow-hidden rounded-full">
            <input
              placeholder="Search"
              className="  w-full py-4 pl-20 pr-6 outline-none text-[32px] font-bold"
              type="text"
            />
          </div>
          <div className="z-20 w-103 h-207 rounded-lg overflow-hidden shadow-lg bg-white/75">
            <div className=" relative space-y-12 px-10 py-14">
              <div className=" absolute flex justify-between items-center">
                <div className="space-y-2">
                  <h4 className="text-gray-400"> ""</h4>
                  <h2 className="h-12 text-5xl font-extrabold text-gray-900">
                    {" "}
                    Washington
                  </h2>
                  <Image
                    src="/weather/sun.webp"
                    width={274}
                    height={274}
                    alt="sunpic"
                    className=" flex items-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
