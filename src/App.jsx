import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import WeatherGraphic from './components/WeatherGraphic';
import WeatherCard from './components/WeatherCard';
import Pittsburgh from './components/Pittsburgh'; 
import './index.css';

const App = () => {
  const philadelphiaForecastData = [
    { day: "Sunday, February 9th", icon: "assets/sun.png", high: "60°F @ 2:43 PM", low: "47°F @ 6:00 AM" },
    { day: "Monday, February 10th", icon: "assets/rain.png", high: "75°F @ 4:24 PM", low: "50°F @ 7:10 AM" },
    { day: "Tuesday, February 11th", icon: "assets/sun.png", high: "71°F @ 4:21 PM", low: "55°F @ 3:00 AM" },
    { day: "Wednesday, February 12th", icon: "assets/sun.png", high: "78°F @ 11:00 AM", low: "61°F @ 1:00 AM" },
    { day: "Thursday, February 13th", icon: "assets/sun.png", high: "75°F @ 3:33 PM", low: "55°F @ 8:00 AM" },
    { day: "Friday, February 14th", icon: "assets/cloudy.png", high: "80°F @ 6:40 PM", low: "52°F @ 6:00 AM" },
    { day: "Saturday, February 15th", icon: "assets/rain.png", high: "90°F @ 1:20 PM", low: "65°F @ 5:55 AM" },
  ];

  return (
    <Router>
      <div className="app-container">
        <div className="header">Welcome to CoolWeather!</div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <WeatherGraphic city="Philadelphia" />
                <div className="forecast">
                  {philadelphiaForecastData.map((data, index) => (
                    <WeatherCard key={index} day={data.day} icon={data.icon} high={data.high} low={data.low} />
                  ))}
                </div>
              </>
            }
          />
          <Route path="/pittsburgh" element={<Pittsburgh />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
