import { connect } from "react-redux";
import Weather from "./Weather";

const mapStateToProps = (state) =>{
   
    return{
        weather:state.otherPage.weather
    }
}

const WeatherContainer = connect(mapStateToProps,)(Weather);
export default WeatherContainer;