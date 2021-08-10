import React from "react";

const TodayWeather = ({ todaysweather }) => {
  return (
    <>
      <div className="TodayWContainer">
        <h1>{todaysweather?.main?.temp}°</h1>
        <p>Feels Like {todaysweather?.main?.feels_like}°</p>
        <p>The High is {todaysweather?.main?.temp_max}°</p>
      </div>
    </>
  );
};

export default TodayWeather;
