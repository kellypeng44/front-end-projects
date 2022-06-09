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
  const [fetched, setFetched] = useState(true);

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

  const url = lat && lon && `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6094bad2b39d0c18494fb1fe6179385f`;

  // useEffect(() => {
    // axios.get(url).then((res) => {
    //   console.log(res);
    // })
    const fetchURL = async () => {
      console.log(url);
      try {
        const data = await axios.get(url);
        console.log(data.data);
        setCity(data.data.name);
        console.log(city);
        setTemp(data.data.main.temp);
        console.log(temp);
        console.log(data.data.weather[0].icon);
        setId(data.data.weather[0].icon);
      } catch(err) {
        console.log(err);
      }
    };
  //   fetchURL();
  // }, [url]);

  return (
    <div>
      { fetched ? 
      <div>
        <img src={id ? `http://openweathermap.org/img/wn/${id}@2x.png` : ''} alt='icon' />
        <h1>{city}</h1>
        <h4>{cel ? (Number(temp)-273.15).toFixed(2).toString() : ((Number(temp)-273.15)*9/5+32).toFixed(2).toString()}</h4>
        <button onClick={() => {
          setCel(!cel);
        }}>Celsius/Fahrenheit</button>
      </div>
      :
      <div>
        <button onClick={fetchURL()}></button>
        <button onClick={() => {
          setCel(!cel);
        }}>Celsius/Fahrenheit</button>
      </div>
      }
    </div>
  );
}

export default App;
