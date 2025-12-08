import express from "express";
import axios from "axios";
import cors from "cors";
import "dotenv/config";


const app = express();
app.use(cors());

function getBackground(weatherMain) {
  switch (weatherMain) {
    case "Clear": return "/seasons/cloudy.png";
    case "Clouds": return "/seasons/cloudy.png";
    case "Rain": return "/seasons/cloudy.png";
    case "Snow": return "/seasons/cloudy.png";
    case "Mist": return "/seasons/cloudy.png";
    case "Fog": return "/seasons/cloudy.png";
    default: return "/seasons/cloudy.png";
  }
}
function getRecommendation(weatherMain) {
  switch (weatherMain) {
    case "Clear":
      return "Perfect day! .";
    case "Clouds":
      return "A bit dull today. ";
    case "Rain":
      return "Take an umbrella or raincoat.";
    case "Snow":
      return "Very cold!";
    case "Mist":
      return "Visibility is low.";
    case "Fog":
      return "Foggy weather.aint it";
    case "Thunderstorm":
      return "Stay indoors!";
    case "Drizzle":
      return "Light rain—an umbrella needed";
    case "Haze":
      return "wear a mask if going outside.";
    case "Dust":
      return "avoid long outdoor exposure.";
    case "Smoke":
      return "wear a mask and stay inside if sensitive.";
    default:
      return "Have a good day! Weather seems normal.";
  }
}


app.get("/weather", async (req, res) => {
  try {
    const city = req.query.city || "Delhi";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHERAPI_KEY}&units=metric`;

    const w = await axios.get(url);
    const data = w.data;

    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const daytype = data.weather[0].main;
    const tomorrowday = Math.round(temp + 2);// placeholder
    const aqi = 50;  // placeholder
    const image = getBackground(daytype);
const recommendation = getRecommendation(daytype);
    const chibi = "/chibi/Slice1.png"
    res.json({
      image,
      daytype,
      humidity,
      aqi,
      temp,
      tomorrowday,
      recommendation,
      chibi
    });

  } catch (err) {
    res.status(500).json({ error: "Weather fetch failed", details: err.message });
  }
});

app.listen(5000, "0.0.0.0", () =>
  console.log("Backend running on http://localhost:5000")
);
