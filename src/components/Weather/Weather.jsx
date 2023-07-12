import React from "react";
import styles from "./Weather.module.css";

const Weather = ({ weather, getTime }) => {
  return (
    <>
      {weather && (
        <div className={styles.weather}>
          <div className={styles.block}>
            <p className={styles.city}>{weather.name}</p>
            <p className={styles.temp}>
              <img
                src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                alt=""
              />{" "}
              {weather.main.temp}
            </p>
          </div>
          <div className={styles.block}>
            <p className={styles.desc}>
              Рассвет: {getTime(weather.sys.sunrise)}
            </p>
            <p className={styles.desc}>Закат: {getTime(weather.sys.sunset)}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
