"use client"

import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import apiKeys from "../../api/apiKeys";
import ReactAnimatedWeather from "react-animated-weather";
import WeatherImageIcon from "./weatherImageIcon";
import Link from "next/link";

function Forcast(props) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState({});

  const search = (city) => {
    axios.get(
      `${apiKeys.base}weather?q=${city != "[object Object]" ? city : query
      }&units=metric&APPID=${apiKeys.key}`
    )
      .then((response) => {
        setWeather(response.data);
        setQuery("");
      })
      .catch(function (error) {
        console.log(error);
        setWeather("");
        setQuery("");
        setError({ message: "Not Found", query: query });
      });
  };

  const defaults = {
    color: "white",
    size: 110,
    animate: true,
  };

  useEffect(() => {
    search("Delhi");
  }, []);

  return (
    <div className="forecast">
      <center>
        <div className="forecast-icon">
          <ReactAnimatedWeather
            icon={props.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
        </div>
        <div className="today-weather">
          <h3>{props.weather}</h3>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search any city"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <div className="img-box">
              {" "}
              <img
                src="https://images.avishkaar.cc/workflow/newhp/search-white.png"
                onClick={search}
              />
            </div>
          </div>
          <ul>
            {typeof weather.main != "undefined" ?
              (
                <div className="forcastList">
                  {" "}
                  <li className="cityHead">
                    <p>
                      {weather.name}, {weather.sys.country}
                    </p>
                    <WeatherImageIcon icon={weather.weather[0].icon} />
                  </li>
                  <li>
                    Temperature{" "}
                    <span className="temp">
                      {Math.round(weather.main.temp)}°c ({weather.weather[0].main})
                    </span>
                  </li>
                  <li>
                    Humidity{" "}
                    <span className="temp">
                      {Math.round(weather.main.humidity)}%
                    </span>
                  </li>
                  <li>
                    Visibility{" "}
                    <span className="temp">
                      {Math.round(weather.visibility)} mi
                    </span>
                  </li>
                  <li>
                    Wind Speed{" "}
                    <span className="temp">
                      {Math.round(weather.wind.speed)} Km/h
                    </span>
                  </li>
                  <hr />
                  <li className="detailLink">
                    <center>
                      <Link href="/detailerApp">
                        <button href="/detailerApp" className="custom-btn btn-5">
                          More{" "}Detailed{" "}Forecast{" "}Report
                        </button>
                      </Link>
                    </center>
                  </li>
                </div>
              ) : (
                <li>
                  {error.query} {error.message}
                </li>
              )}
          </ul>
        </div>
      </center>
    </div>
  );
}
export default Forcast;
