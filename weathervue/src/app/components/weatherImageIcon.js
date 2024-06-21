import React from 'react';

function WeatherImageIcon({ icon }) {
  return (
    <img
      className="temp"
      src={`https://openweathermap.org/img/wn/${icon}.png`}
    />
  );
}

export default WeatherImageIcon;