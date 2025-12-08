🌦️ Weather.EXE — Retro Pixel Weather App

A retro-styled pixel weather application with a custom Figma-designed UI, animated characters, dynamic backgrounds, and a fast Vite + Tailwind CSS setup.
The app provides real-time weather, humidity, AQI, and recommendations based on live data.

🎨 Features

🖌️ Custom UI Designed in Figma
👾 Animated Characters
🌤️ Dynamic Weather Backgrounds

Background image changes based on weather type
Smooth transitions for clear, clouds, rain, snow, fog, etc.

⚡ Super Fast Frontend

Built using:
React + Vite (lightning fast dev + builds)
Tailwind CSS (utility-first styling)
ES Modules backend weather API
🛰️ Backend Weather API
Node.js + Express backend
API key privately handled with .env
Clean /weather?city=Delhi endpoint
Prevents leaking your OpenWeather API key
CORS enabled for frontend use

🚀 Tech Stack
Layer	Technology
UI Design	Figma
Frontend	React + Vite
Styling	Tailwind CSS
Backend	Node.js + Express
Data Source	OpenWeatherMap API
📁 Folder Structure
root/
│
├── weather-frontend/        # React + Vite + Tailwind UI
│   ├── src/
│   │   ├── components/      # Weather UI + animated sprite
│   │   ├── assets/          # Icons, sprites, background images
│   │   └── App.jsx
│   └── public/
│
└── weather-backend/         # Node.js + Express API
    ├── index.js             # Weather route
    ├── .env                 # API key (private)
    ├── package.json
    └── node_modules/

🛠️ Installation & Setup
1. Clone the Repository
git clone <your-repo-url>

⚛️ Frontend Setup (React + Vite + Tailwind)
1. Go to frontend folder:
cd weather-frontend

2. Install dependencies:
npm install

3. Start dev server:
npm run dev


The frontend should run at:
http://localhost:5173/

🌐 Backend Setup (Node.js + Express)
1. Go to backend folder:
cd weather-backend

2. Install dependencies:
npm install

3. Add your .env file:
OPENWEATHER_KEY=YOUR_API_KEY

4. Start server:
node index.js

Backend runs at:

http://localhost:5000/weather?city=Delhi

🙌 Contributing

Contributions are welcome!
Feel free to:

Open issues
Suggest features
Submit pull requests

📝 License

This project is open-source and available under the MIT License.
