import React from 'react';
import { removeCity, updateCityData } from '../utils/js/storage';

const CityWeather = (props) => {
    return(
        <div className="city-list-item" >
            <p>City: {props.city.name}</p>
            <p>Temp: {props.city.temp}</p>
            <p>Wind speed: {props.city.wind}</p>
            <button onClick={ () => removeCity(props.city.id)}>Remove</button>
            <button onClick ={ () => updateCityData(props.city.name)}><i className="fa fa-spinner fa-spin"></i></button>
        </div>
    )
}

export default CityWeather;