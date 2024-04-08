import React, { useState } from "react";
import axios from "axios";
const WeatherForm = ({ onWeatherData }) => {
  const [city, setCity] = useState("");
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const api_key = "048c541445b0fed3cfbfec3564d0a21e";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
      );
      onWeatherData(response.data);
      setCity("");
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleInputChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="mt-2 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Get Weather
      </button>
    </form>
  );
};
export default WeatherForm;
