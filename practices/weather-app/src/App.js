import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [id, setId] = useState(null);
  const [cel, setCel] = useState(false);
  const [fetched, setFetched] = useState(false);

  const setPosition = (position) => {
    console.log(position.coords.latitude, position.coords.longitude);
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
  };

  const error = (err) => {
    console.log(err);
  }

  useEffect(() => {
    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(setPosition, error);
    }
    getLocation();
  }, []);

  const url = lat && lon && `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=574a9d589d940f1e9992eb678d002400`;

  // const getWeather = () => {
  //   setFetched(true);
  //   fetchURL();
  // }
  useEffect(() => {
    // axios.get(url).then((res) => {
    //   console.log(res);
    // })
    const fetchURL = async () => {
      // console.log(url);
      try {
        const data = await axios.get(url);
        console.log(data.data);
        setCity(data.data.timezone);
        // console.log(city);
        setTemp(data.data.current.temp);
        // console.log(temp);
        // console.log(data.data.current.weather[0].icon);
        setId(data.data.current.weather[0].icon);
      } catch(err) {
        console.log(err);
      }
    };
    fetchURL();
  }, [fetched, url]);

  return (
    <div>
      { fetched ? 
      <div>
        <img src={id ? `http://openweathermap.org/img/wn/${id}@2x.png` : ''} alt='icon' />
        <h2>{city}</h2>
        <h3>{cel ? (Number(temp)-273.15).toFixed(2).toString().concat("°C") : ((Number(temp)-273.15)*9/5+32).toFixed(2).toString().concat("°F")} </h3>
        <button onClick={() => {
          setCel(!cel);
        }}>Celsius/Fahrenheit</button>
      </div>
      :
      <div className='container'>
        {/* <button onClick={getWeather()}>Get Weather</button> */}
        <button onClick={() => setFetched(true)}>Get Weather</button>
        <button onClick={() => {
          setCel(!cel);
        }}>Celsius/Fahrenheit</button>
      </div>
      }
    </div>
  );
}

export default App;
