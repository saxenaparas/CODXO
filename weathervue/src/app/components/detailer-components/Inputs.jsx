import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    // when input feild are typed it gets auto filled and  city is not empty on submit query would be changed!
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div className=" flex flex-row justify-center items-center my-6">
      <div className=" flex w-full items-center justify-center space-x-4">
        <div>
          <input
            type="text"
            className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-xl"
            placeholder="Search Your Location..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <BiSearchAlt2
            size={40}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSearchClick}
          />
        </div>
        <div>
          <HiLocationMarker
            size={40}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocationClick}
          />
        </div>
        <div className=" flex flex-row items-center justify-center">
          <button
            name="metric"
            className="text-2xl text-white font-bold hover:scale-125 transition ease-out"
            onClick={handleUnitsChange}
          >
            °C
          </button>
          <p className="text-2xl text-white mx-2 font-bold">|</p>
          <button
            name="imperial"
            className="text-2xl text-white font-bold hover:scale-125 transition ease-out"
            onClick={handleUnitsChange}
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
