import { useEffect, useState } from "react";
import "./App.css";
import Box from "./Components/Box.jsx";

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/weather?city=Delhi")
      .then((res) => res.json())
      .then((data) => {
        console.log("Weather data:", data);
        setWeather(data);
      })
      .catch((err) => console.log("Error fetching weather:", err));
  }, []);

  if (!weather) {
    return <p className="text-white text-xl p-10">Loading weather...</p>;
  }

  return (
    <>
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
    </>
  );
}

export default App;
