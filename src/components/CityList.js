import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import AddCityForm from'./AddCityForm';
import CityWeather from './CityWeather';
import {getCityData, subscribe} from '../utils/js/storage';


class CityList extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            cities:[],
            error: undefined
       }
    }
    componentDidMount(){
        subscribe(() => {
            const cities = getCityData();
            this.setState({
               cities,
            });
        });

        const cities = getCityData();
        this.setState({
            cities,
        });
    
    }
  

    render(){
        return (
            <div>
                <Header />
                {this.state.error && <p className="err-msg">{this.state.error}</p>}
                <AddCityForm/>
                <div>
                    {this.state.cities.map ( (city) => {
                        return <CityWeather city={city} />})}
                </div>
            </div>
        )
    }
}

export default CityList;







  // getUpdateWeather = (cityname) => {
    //     getWeath(cityname).then((res) => {

    //         const newCities = [ ...this.state.cities ];

    //         const index = newCities.findIndex( (city) => {
    //                 if (city.name === res.name) {
    //                     return true;
    //                 } else {
    //                     return false;
    //                 }
    //             });
                    
    //             newCities[index] = {
    //                 id: this.state.cities[index].id,
    //                 name: res.name,
    //                 temp: res.main.temp,
    //                 humidity: res.main.humidity
    //             };
    //             console.log(newCities[index]);

    //             this.setState({cities: newCities});

    //     })
    // }

    // getCityWeather = (e) => {
    //     e.preventDefault();

    //     let cityName = e.target.elements.city_name.value.trim();

    //     getWeath(cityName).then((response) => {
    //         const city={
    //             id: uuid(),
    //             name: response.name,
    //             temp: response.main.temp,
    //             humidity: response.main.humidity
    //         } 
    //         this.setState( (prevState) => ({cities: prevState.cities.concat(city)}))
    //         this.setState( () => ({error: undefined}))
    //     });  
    // }

     // function to remove city from state
    //  onRemoveCity = (cityIdRemove) => {
    //     this.setState( (prevState) => ({
    //         cities: prevState.cities.filter( (city) => cityIdRemove !== city.id)
    //     }))
    // }