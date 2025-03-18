import React from 'react';

const WeatherGraphic = ({ city }) => {
  return (
    <div className="current-weather-stats">
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" fill="#F0F7FF" />
        <text x="200" y="30" textAnchor="middle" fontFamily="Arial" fontSize="14" fill="#2C3E50" fontWeight="bold">
          {city}'s Weekly Weather Summary
        </text>
        <g transform="translate(50, 50)">
          <rect width="300" height="80" rx="5" fill="white" stroke="#E0E6ED" />
          <polyline points="30,65 70,50 90,55 140,45 160,50 180,40 210,25" fill="none" stroke="#FF7675" strokeWidth="1" />
          <circle cx="30" cy="65" r="3" fill="#FF7675" />
          <circle cx="70" cy="50" r="3" fill="#FF7675" />
          <circle cx="90" cy="55" r="3" fill="#FF7675" />
          <circle cx="140" cy="45" r="3" fill="#FF7675" />
          <circle cx="160" cy="50" r="3" fill="#FF7675" />
          <circle cx="180" cy="40" r="3" fill="#FF7675" />
          <circle cx="210" cy="25" r="3" fill="#FF7675" />
          <text x="150" y="20" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#2C3E50">High Temperature Trend</text>
        </g>
        
        <g transform="translate(50, 150)">
          <g transform="translate(0, 0)">
            <rect width="140" height="60" rx="5" fill="#FFF3CD" />
            <text x="70" y="20" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#2C3E50">Sunny Days</text>
            <text x="70" y="40" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#F39C12" fontWeight="bold">5/7</text>
          </g>
          <g transform="translate(160, 0)">
            <rect width="140" height="60" rx="5" fill="#D1ECF1" />
            <text x="70" y="20" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#2C3E50">Avg Humidity</text>
            <text x="70" y="40" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#17A2B8" fontWeight="bold">65%</text>
          </g>
          <g transform="translate(0, 80)">
            <rect width="140" height="60" rx="5" fill="#E2E3FF" />
            <text x="70" y="20" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#2C3E50">Avg Rain Chance</text>
            <text x="70" y="40" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#6C63FF" fontWeight="bold">30%</text>
          </g>
          <g transform="translate(160, 80)">
            <rect width="140" height="60" rx="5" fill="#F8D7DA" />
            <text x="70" y="20" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#2C3E50">Avg Wind Speed</text>
            <text x="70" y="40" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#C82333" fontWeight="bold">15 mph</text>
          </g>
          <g transform="translate(0, 160)">
            <rect width="140" height="60" rx="5" fill="#D4EDDA" />
            <text x="70" y="20" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#2C3E50">Avg Pressure</text>
            <text x="70" y="40" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#28A745" fontWeight="bold">1015 hPa</text>
          </g>
          <g transform="translate(160, 160)">
            <rect width="140" height="60" rx="5" fill="#FDEBD0" />
            <text x="70" y="20" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#2C3E50">Avg Visibility</text>
            <text x="70" y="40" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#F39C12" fontWeight="bold">10 miles</text>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default WeatherGraphic;