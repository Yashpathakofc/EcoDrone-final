import React, { useEffect, useRef, useState } from 'react';
import './Card.css';
import axios from 'axios';

const Card = () => {
  const [cropData, setCropData] = useState([]);
  const [currentCrop, setCurrentCrop] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const fetchData = () => {
      axios.get('/api/ecodrone')
        .then((response) => {
          setCropData(response.data);
          setRandomCrop(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };

    fetchData();
    const interval = setInterval(fetchData, 6000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeInterval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timeInterval);
  }, []);

  const setRandomCrop = (data) => {
    const keys = Object.keys(data);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    setCurrentCrop(data[randomKey]);
  };

  useEffect(() => {
    const cropInterval = setInterval(() => setRandomCrop(cropData), 2000);
    return () => clearInterval(cropInterval);
  }, [cropData]);

  const toggleVideoPlayback = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const getHumidityLevel = (humidity) => {
    return { level: humidity > 70 ? 'High' : 'Low', color: humidity > 70 ? 'green' : 'red' };
  };

  const getNPKLevel = (N, P, K) => {
    const npkValue = Math.min(N, P, K);
    return { level: npkValue > 90 ? 'Low' : 'Normal', color: npkValue > 90 ? 'red' : 'green' };
  };

  return (
    <>
      <h1 className="heading2 text-center mt-5">A Smart Agricultural Monitoring System..</h1>
      <p className='text-center date'>Date/Time: {currentTime.toLocaleString()}</p>

      {Object.keys(currentCrop).length > 0 && (
        <div className="rounded" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
          <div className="card mt-5 mx-3" style={{ width: "18rem" }}>
            <img src="moisture.jpg" className="card-img-top card-img" alt="moisture" height={185} />
            <div className="card-body">
              <h5 className="card-title mt-2 rounded">Humidity</h5>
              <p className='mt-3 temperature-1' style={{ color: getHumidityLevel(currentCrop.humidity).color }}>
                {getHumidityLevel(currentCrop.humidity).level}
              </p>
            </div>
          </div>
          <div className="card mt-5 mx-3 " style={{ width: "18rem" }}>
            <img src="crop_temp.jpg" className="card-img-top card-img" alt="temperature" height={185} />
            <div className="card-body">
              <h5 className="card-title mt-2 rounded">Temperature</h5>
              <p className='mt-3  temperature-1'>{currentCrop.temperature} °C</p>
            </div>
          </div>
          <div className="card mt-5 mx-3" style={{ width: "18rem" }} aria-hidden="true">
            <img src="npk.png" className="card-img-top card-img" alt="NPK levels" height={185} />
            <div className="card-body">
              <h5 className="card-title mt-2 rounded">NPK Levels</h5>
              <p className='mt-3 temperature-1' style={{ color: getNPKLevel(currentCrop.N, currentCrop.P, currentCrop.K).color }}>
                {getNPKLevel(currentCrop.N, currentCrop.P, currentCrop.K).level}
              </p>
            </div>
          </div>
          <div className="card mt-5 mx-3" style={{ width: "18rem" }} aria-hidden="true">
            <video ref={videoRef} className="card-video1" loop height={185}>
              <source src="video13.mp4" type="video/mp4" />
            </video>
            <div className="card-body">
              <button className="btn btn-primary col-6" onClick={toggleVideoPlayback}>
                {isPlaying ? 'Stop Live Video' : 'Start Live Video'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
