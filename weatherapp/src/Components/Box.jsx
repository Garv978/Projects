import "../App.css";

function minimizeWindow() {
  // Simulate minimize by hiding the app
  const app = document.getElementById("app-window");
  if (app) app.style.display = "none";
}

function resetWindow() {
  // Blue: maybe reload the UI
  window.location.reload();
}

function closeWindow() {
  // Only works if the page was opened by JS / window.open()
  window.close();

  // Otherwise navigate away (looks like close)
  window.location.href = "about:blank";
}

function Box({
  image,
  daytype,
  humidity,
  aqi,
  temp,
  tomorrowday,
  recommendation,
  chibi,
}) {
  return (
    <div className="relative h-[400px] w-[500px] bg-[#bad4f3] rounded-xl shadow-lg overflow-hidden border-4 border-gray-600 font-[VT323]">
      <div className="flex flex-row items-center justify-between text-3xl p-2">
        <span>WEATHER.EXE</span>

        <div className="flex space-x-2">
          <div
            className="w-4 h-4 rounded-full bg-yellow-400"
            onClick={minimizeWindow}
          ></div>

          {/* //  //make this work later */}

          <div
            className="w-4 h-4 rounded-full bg-blue-500"
            onClick={resetWindow}
          ></div>
          <div
            className="w-4 h-4 rounded-full bg-red-500"
            onClick={closeWindow}
          ></div>
        </div>
      </div>

      <div className="absolute top-[50px] left-5 right-5 bottom-2.5 overflow-hidden shadow-md border-2 border-grey-400">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        {/* Text Overlay */}
        <div className="absolute inset-0 z-10 font-[VT323] text-white">
          <p className="absolute top-10 left-4 text-3xl">
            It's a {daytype} day...
          </p>
          <p className="absolute top-18 left-4 text-2xl">
            Humidity:{humidity}%
          </p>
          <p className="absolute top-24 left-4 text-2xl">AQI: {aqi}</p>
          <p className="absolute inset-0 flex items-center justify-center text-4xl">
            Temp: {temp}°C
          </p>
          <p className="absolute bottom-20 left-4 text-2xl">
            Tomorrow: {tomorrowday}
          </p>
          <p className="absolute bottom-12 left-4 text-2xl">Recommendation:</p>
          <p className="absolute bottom-7 left-4 text-2xl">{recommendation}</p>

          <div className="absolute bottom-6 right-6 w-20 h-20 rounded-lg overflow-hidden border-2 border-white/70">
            <img
              src={chibi} // <-- pass another image prop
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
