import React from 'react';
import WeatherGraphic from './WeatherGraphic';
import WeatherCard from './WeatherCard';

const Pittsburgh = () => {
  const pittsburghForecastData = [
    { day: "Sunday, February 9th", icon: "../assets/sun.png", high: "35°F @ 2:43 PM", low: "10°F @ 6:00 AM" },
    { day: "Monday, February 10th", icon: "../assets/rain.png", high: "44°F @ 3:33 PM", low: "21°F @ 5:10 AM" },
    { day: "Tuesday, February 11th", icon: "../assets/rain.png", high: "31°F @ 5:01 PM", low: "26°F @ 2:02 AM" },
    { day: "Wednesday, February 12th", icon: "../assets/rain.png", high: "49°F @ 6:03 PM", low: "25°F @ 4:44 AM" },
    { day: "Thursday, February 13th", icon: "../assets/rain.png", high: "47°F @ 11:00 AM", low: "23°F @ 6:00 AM" },
    { day: "Friday, February 14th", icon: "../assets/rain.png", high: "50°F @ 7:01 PM", low: "30°F @ 3:00 AM" },
    { day: "Saturday, February 15th", icon: "../assets/cloudy.png", high: "57°F @ 4:13 PM", low: "35°F @ 2:00 AM" },
  ];

  return (
    <>
      <WeatherGraphic city="Pittsburgh" />
      <div className="forecast">
        {pittsburghForecastData.map((data, index) => (
          <WeatherCard key={index} day={data.day} icon={data.icon} high={data.high} low={data.low} />
        ))}
      </div>
    </>
  );
};

export default Pittsburgh;