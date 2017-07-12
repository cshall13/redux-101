import React, {Component} from 'react';
// import $ from 'jquery';
import {bindActionCreators} from 'redux';
import fetchWeather from '../actions/FetchWeather';
import {connect} from 'react-redux';

class WeatherData extends Component{
    constructor(props){
        super(props);
        // this.state = {
        //     weatherData: []
        // }
    }

    componentDidMount(){
        this.props.fetchWeather();
    }

    render(){
        if(this.props.weatherData.main === undefined){
            return (<h1> Loading ... </h1>)
        }else {
            return (
                <div>
                    <h1>Atlanta Weather</h1>
                    {/*below run without if statement above will error on first render waiting for AJAX request to */}
                    {/*return. temp cannot be run against main when main is undefined*/}
                    {/*this.state.weatherData is an empty array on first render*/}
                    {/*{this.state.weatherData.main.temp} &#8457;*/}
                    {this.props.weatherData.main.temp} &#8457;
                </div>
            )
        }
    }
}

function mapStateToProps(state){
    return{
        weatherData: state.weather
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchWeather: fetchWeather
    },dispatch)
}

var thingCreatedByConnectThatKnowsAboutComponentAndReduxStuff = connect(mapStateToProps,mapDispatchToProps)(WeatherData)

export default thingCreatedByConnectThatKnowsAboutComponentAndReduxStuff;