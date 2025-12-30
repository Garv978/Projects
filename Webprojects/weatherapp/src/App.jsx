import { useEffect, useState } from "react";
import "./App.css";
import Box from "./Components/Box.jsx";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ✅ Success callback
    const fetchWithLocation = async (latitude, longitude) => {
      try {
        const res = await fetch(
          `http://localhost:5000/weather?lat=${latitude}&lon=${longitude}`
        );
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError("Failed to fetch weather");
      }
    };

    // ✅ Fallback (Delhi)
    const fetchFallback = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/weather?city=Delhi"
        );
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError("Failed to fetch weather");
      }
    };

    // ✅ Ask for location
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          fetchWithLocation(latitude, longitude);
        },
        (err) => {
          console.warn("Location denied, using fallback");
          fetchFallback();
        }
      );
    } else {
      fetchFallback();
    }
  }, []);

  if (error) {
    return <p className="text-red-400 p-10">{error}</p>;
  }

  if (!weather) {
    return <p className="text-white text-xl p-10">Loading weather...</p>;
  }

  return (
    <Box
      image={weather.image}
      daytype={weather.daytype}
      humidity={weather.humidity}
      aqi={weather.aqi}
      temp={weather.temp}
      tomorrowday={weather.tomorrowday}
      recommendation={weather.recommendation}
      chibi={weather.chibi}
    />
  );
}

export default App;
