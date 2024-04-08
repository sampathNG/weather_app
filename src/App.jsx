import React, { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import "./App.css";
const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const handleWeatherData = (data) => {
    setWeatherData(data);
  };
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="p-4 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">Weather App</h1>
        <WeatherForm onWeatherData={handleWeatherData} />
        <WeatherDisplay weatherData={weatherData} />
      </div>
    </div>
  );
};
export default App;
