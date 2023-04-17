import React, { useState, useEffect } from "react";
import Weather from "./Weather";

const Banner = () => {

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

          //navigator.geolocation is js api which takes permission from the user to access the location
          navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          });

          await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&&appid=${process.env.REACT_APP_API_KEY}`)
          .then(res => res.json())
          .then(result => {
              setData(result)
              console.log(result);
            });
        } 
        fetchData();   
    }, [lat, long]);

    return (
        <div className="flex justify-center">
            <div className=" backdrop-blur-md shadow-2xl shadow-slate-500 bg-opacity-80 self-center p-16 lg:mt-56 mt-20 ml-64 mr-64 grow rounded-md">
                {(typeof data.main !== 'undefined') ? (
                    <Weather weatherData={data} />
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    )
}

export default Banner;