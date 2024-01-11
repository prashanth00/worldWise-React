// import React from "react";
import Message from "./Message";
import CityItem from "./CityItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";

export default function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Please add your first city by clicking on the map" />
    );
  return (
    <ul className={styles.countryList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
