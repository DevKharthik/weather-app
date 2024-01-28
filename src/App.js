import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState();
  const APIKey = 'fb492095c1772ac8d77d1714b23e9696';

  const fetchData = async () => {
    try {
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`);
      setData(response.data);
    } catch (error) {
      alert("Please enter the City Name Correctly");
    }
  };

  return (
    <div className='App'>
      <h1 className='title'>Weather App</h1>
      <div className='input-container'>
        <input
          type="text"
          className='input'
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder="Enter the City Name"
        />
        <button className="button" onClick={fetchData} style={{ backgroundColor: 'green' }}>
          Fetch
        </button>
      </div>
      <div>
        {data && (
          <div className='container'>
            <h1 className='city-name'>{data.name},{data.sys.country}</h1>
            <div className='weather-info'>
              <div>{Math.round(data.main.temp)} C</div>
              <div className='coordinate'>
                <div>Lat-{data.coord.lat} </div>
                <div>Lon-{data.coord.lon}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
