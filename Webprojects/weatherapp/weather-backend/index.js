import express from "express";
import axios from "axios";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors());

function getBackground(weatherMain) {
  switch (weatherMain) {
    case "Clear": return "/seasons/clear.png";
    case "Clouds": return "/seasons/cloudy.png";
    case "Rain": return "/seasons/rain.png";
    case "Drizzle": return "/seasons/drizzle.png";
    case "Thunderstorm": return "/seasons/thunderstorm.png";
    case "Snow": return "/seasons/snow.png";
    case "Mist": return "/seasons/mist.png";
    case "Fog": return "/seasons/fog.png";
    case "Haze": return "/seasons/haze.png";
    case "Smoke": return "/seasons/smoke.png";
    default: return "/seasons/cloudy.png";
  }
}

function getRecommendation(weatherMain) {
  switch (weatherMain) {
    case "Clear": return "Perfect day!";
    case "Clouds": return "A bit dull today.";
    case "Rain": return "Take an umbrella or raincoat.";
    case "Snow": return "Very cold!";
    case "Mist": return "Visibility is low.";
    case "Fog": return "Foggy weather.";
    case "Thunderstorm": return "Stay indoors!";
    case "Drizzle": return "Light rain—an umbrella needed.";
    case "Haze": return "Wear a mask if going outside.";
    case "Dust": return "Avoid long outdoor exposure.";
    case "Smoke": return "Wear a mask and stay inside if sensitive.";
    default: return "Have a good day!";
  }
}

app.get("/weather", async (req, res) => {
    console.log("QUERY:", req.query)
  try {
    const { lat: queryLat, lon: queryLon, city } = req.query;

    let url;

    if (queryLat && queryLon) {
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${queryLat}&lon=${queryLon}&appid=${process.env.OPENWEATHERAPI_KEY}&units=metric`;
    } else {
      const fallbackCity = city || "Delhi";
      url = `https://api.openweathermap.org/data/2.5/weather?q=${fallbackCity}&appid=${process.env.OPENWEATHERAPI_KEY}&units=metric`;
    }

    const w = await axios.get(url);
    const data = w.data;

    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const daytype = data.weather[0].main;
    const tomorrowday = Math.round(temp + 2); // placeholder

    // ✅ renamed variables (no redeclaration)
    const coordLat = data.coord.lat;
    const coordLon = data.coord.lon;

    const aqiUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${coordLat}&lon=${coordLon}&appid=${process.env.OPENWEATHERAPI_KEY}`;
    const air = await axios.get(aqiUrl);
    const aqi = air.data.list[0].main.aqi;

    const image = getBackground(daytype);
    const recommendation = getRecommendation(daytype);
    const randomIndex = Math.floor(Math.random() * 8) + 1;
    const chibi = `/chibi/Slice${randomIndex}.png`;


    res.json({
      image,
      daytype,
      humidity,
      aqi,
      temp,
      tomorrowday,
      recommendation,
      chibi,
      location: data.name
    });
  } catch (err) {
    res.status(500).json({
      error: "Weather fetch failed",
      details: err.message
    });
  }
});

app.listen(5000, "0.0.0.0", () =>
  console.log("Backend running on http://localhost:5000")

);
