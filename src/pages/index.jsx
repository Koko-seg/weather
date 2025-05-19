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
    <div className="flex w-[100wv] h-[100vh]">
      <div className="bg-[#f3f4f6] w-[50%]  relative flex flex-col items-center justify-center ">
        <div className="relative  w-[800px] h-[1200px]  my-0 mx-auto flex items-center justify-center">
          <Search
            handleChange={handleChange}
            getWeather={getWeather}
            setCity={setCity}
            filteredCity={filteredCity}
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
