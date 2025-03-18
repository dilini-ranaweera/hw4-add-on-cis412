import React from 'react';

const WeatherCard = ({ day, icon, high, low }) => {
  return (
    <div className="forecast-card">
      <img src={icon} alt="Weather icon" />
      <p>{day}</p>
      <div className="temp-container">
        <div className="temp-high">High: {high}</div>
        <div className="temp-low">Low: {low}</div>
        <div className="more">View More Details</div>
      </div>
    </div>
  );
};

export default WeatherCard;