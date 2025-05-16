import { Container } from "@/components/Container";
import { Search } from "@/components/Search";
import { Moon } from "@/components/Moon";
import { Circle } from "@/components/Circle";
import { useEffect, useState } from "react";

export default function Home() {
  const [weather, setWeatherData] = useState({});
  const [city, setCity] = useState("Tokyo");
  const [filteredCity, setFilteredCity] = useState([]);
  const [error, setError] = useState("");

  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}`
      );

      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(weather);

  const getCities = async () => {
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const data = await response.json();

      const result = data?.data?.filter((city) => {
        const findCities = city.cities.find(
          (findCities) => findCities === searchValue
        );
        return findCities;
      });
      const city = result[0].cities.find((city) => city === searchValue);
      setSearchValue(city);
    } catch (error) {
      setError("No location found");
    }
    const allCities = city.flatMap((city) => city[(1, 2)]);
    console.log(allCities);
  };

  useEffect(() => {
    getCities();
    getWeather();
  }, []);

  return (
    <div className="flex w-[100wv] h-[100vh]">
      <div className="bg-[#f3f4f6] w-[50%]  relative flex flex-col items-center justify-center ">
        <div className="relative  w-[800px] h-[1200px]  my-0 mx-auto flex items-center justify-center">
          <Search
            onChange={setCity}
            getWeather={getWeather}
            suggestions={suggestions}
            setSuggestions={setSuggestions}
            setCity={setCity}
          />
          <img
            src="/weather/sun-little.webp"
            className="w-[174px] h-[174px] absolute top-[100px] left-30 z-0"
          />

          <Container weather={weather} />
        </div>
      </div>

      <Circle />

      <div className="bg-[#0F141E] w-[50%] relative flex flex-col items-center justify-center">
        <div className="relative  w-[800px] h-[1200px] my-0 mx-auto flex items-center justify-center">
          <img
            src="/weather/moon-little.webp"
            className="w-[174px] h-[174px] absolute box-border border-none m-auto block bottom-[100px] right-30"
          />
          <Moon weather={weather} />
        </div>
      </div>
    </div>
  );
}
