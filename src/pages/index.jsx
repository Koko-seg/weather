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
  const [cities, setCities] = useState([]);

  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}`
      );

      const data = await response.json();

      setWeatherData(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  const getCities = async () => {
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const data = await response.json();

      setCities(data.data);
    } catch (error) {
      setError("No location found");
    }
  };

  useEffect(() => {
    getCities();
    getWeather();
  }, []);
  const handleChange = (event) => {
    setCity(event.target.value);
    const citiesAndCountry = cities.flatMap((country) =>
      country.cities.map((city) => `${city}, ${country.country}`)
    );

    const filteredCities = citiesAndCountry
      ?.filter((item) => item.toLowerCase().startsWith(city.toLowerCase()))
      .slice(0, 4);

    setFilteredCity(filteredCities);
  };

  return (
    <div className="flex flex-col md:flex-row w-screen h-screen">
      <div className="bg-[#f3f4f6] md:w-1/2 w-full  relative flex flex-col items-center justify-center ">
        <div className="relative md:w-[800px] w-full h-[1200px] my-0 mx-auto flex flex-col items-center justify-start pt-10">
          <div className="w-full flex justify-center z-30">
          <Search
            handleChange={handleChange}
            getWeather={getWeather}
            setCity={setCity}
            filteredCity={filteredCity}
            setFilteredCity={setFilteredCity}
          />
          </div>
          <img
            src="/weather/sun-little.webp"
            className="w-[174px] h-[174px] absolute top-[100px] left-8 md:left-30 z-0"
          />

          <Container weather={weather} />
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center">
      <Circle />
      </div>
      <div className="bg-[#0F141E] md:w-1/2 w-full relative flex flex-col items-center justify-center">
        <div className="relative  md:w-[800px] w-full h-[1200px] my-0 mx-auto flex flex-col items-center justify-start pt-10 px-4">
          <img
            src="/weather/moon-little.webp"
            className="w-[174px] h-[174px] absolute box-border border-none m-auto block bottom-[100px] right-8 md:right-30"
          />
          
          <Moon weather={weather} />
        </div>
      </div>
    </div>
  );
}
