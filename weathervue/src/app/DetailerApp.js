"use client"

import { useEffect, useState } from 'react';
import TimeAndLocation from './components/detailer-components/TimeAndLocation';
import TemperatureDetails from './components/detailer-components/TemperatureDetails';
import Forecast from './components/detailer-components/Forecast';
import TopButton from './components/detailer-components/TopButtons';
import Inputs from './components/detailer-components/Inputs';
import getFormattedWeatherData from '../services/weatherServices';
import './DetailerApp.css';
import Link from 'next/link';


function DetailerApp() {
  const [query, setQuery] = useState({ q: 'delhi' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
        console.log('you are seeing updated weather', weather);
      });
    }
    fetchWeather();
  }, [query, units])


  const formatBackground = () => {
    if (!weather) return ' from-cyan-700 to-blue-700';
    const threshold = units === 'metric' ? 20 : 60;
    if (weather.temp <= threshold) return 'from-cyan-700';
    return 'from-cyan-700 to-blue-700'
  }


  return (
    <div className={`mx-auto max-w-screen-md m-4 rounded-2xl p-5 bg-gradient-to-br h-auto shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <Link href='/' className="font-bold underline">
        <button className="bg-blue-100 hover:bg-blue-300 text-[grey] font-bold py-2 px-4 rounded-full">
          Simplified View
        </button>
      </Link>
      <TopButton setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {/* && if true then render  */}

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureDetails weather={weather} />
          <Forecast title="Hourly forecast" items={weather.hourly} />
          <Forecast title="Daily forecast" items={weather.daily} />
        </div>
      )}

    </div>
  );
}

export default DetailerApp;
