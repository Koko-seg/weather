import { HeartIcon, HomeIcon, MapPin, UserIcon } from "lucide-react";

export const Moon = ({ weather }) => {
  return (
    <div className="w-103 h-207 rounded-[48px] bg-white/750 backdrop-blur-lg shadow-lg absolute z-20">
      <div className="py-14 px-10 space-y-12">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h1 className="text-gray-400">
              {weather?.forecast?.forecastday[0]?.hour[23]?.time}
            </h1>
            <h2 className="text-gray-400 font-extrabold text-5xl">
              {weather?.location?.name}
            </h2>
          </div>
          <MapPin className="w-[32px] h-[32px] text-gray-700" />
        </div>
        <img src="/weather/moon.webp" className="w-[274px] h-[274px] m-auto" />
      </div>
      <div className="px-10">
        <div className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white">
          {weather?.forecast?.forecastday[0].day.mintemp_c}°C
        </div>
        <div className=" mb-12 flex items-center gap-5">
          <h3 className="text-indigo-500 font-extrabold  ">
            {weather?.forecast?.forecastday[0]?.hour[23]?.condition?.text}
          </h3>
          <img
            className=""
            src={weather?.forecast?.forecastday[0]?.hour[23]?.condition?.icon}
            alt="jijgee"
          />
        </div>
        <div className="flex items-center justify-between">
          <HomeIcon className="w-[32px] h-[32px] text-gray-800" />
          <MapPin className="w-[32px] h-[32px] text-gray-300" />
          <HeartIcon className="w-[32px] h-[32px] text-gray-300" />
          <UserIcon className="w-[32px] h-[32px] text-gray-300" />
        </div>
      </div>
    </div>
  );
};
