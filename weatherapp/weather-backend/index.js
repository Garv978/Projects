import express from "express";
import axios from "axios";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors());

app.get("/weather", async (req, res) => {
  const city = req.query.city || "Delhi";

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_KEY}&units=metric`
  );

  res.json(response.data);
});

app.listen(5000, () => console.log("Backend running"));
