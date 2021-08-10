import { useState } from "react";

const WeekCard = ({ index, temp_day, maxTemp, minTemp, humidity }) => {
  return (
    <div className="col weeklyWeather" key={index}>
      <p>{temp_day}°</p>
      <p>High of {maxTemp}°</p>
      <p>Low of {minTemp}°</p>
      <p>{humidity}% Humidity</p>
    </div>
  );
};

export default WeekCard;
