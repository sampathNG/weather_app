import React from "react";
const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;
  const { name, main, weather } = weatherData;
  const { temp, humidity } = main;
  const weatherDescription = weather[0].description;
  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Weather in {name}</h2>
      <p className="mb-2">Temperature: {temp} °C</p>
      <p className="mb-2">Humidity: {humidity}%</p>
      <p className="mb-2">Conditions: {weatherDescription}</p>
    </div>
  );
};
export default WeatherDisplay;
