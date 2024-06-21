import React from "react";
import "../../../app/DetailerApp.css";

const TopButton = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "Mumbai",
    },
    {
      id: 2,
      title: "Kolkata",
    },
    {
      id: 3,
      title: "Bangalore",
    },
    {
      id: 4,
      title: "Gurgaon",
    },
    {
      id: 5,
      title: "Chennai",
    },
  ];

  return (
    <div className="hidden md:flex items-center justify-around my-6">
      {cities.map((city, index) => (
        <button
          className="text-white text-lg font-medium"
          key={index}
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButton;
