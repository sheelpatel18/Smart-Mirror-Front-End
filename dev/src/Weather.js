import { React, useState } from 'react'
import useWindowDimensions from './Screen';
const axios = require('axios')
const { Container, Row, Col } = require('react-bootstrap')

const key = "d52f5e56687724e820cd863b4f498f66"
const api_config = {
    method: 'get',
    url: `https://api.openweathermap.org/data/2.5/weather`,
    params: {
        lat: "35.9132",
        lon: "-79.0558",
        appid: key,
        units: "imperial"
    }
}

function Weather() {
    const [imageIcon, setImageIcon] = useState(null)
    const [temp, setTemp] = useState("")
    const [feelsLike, setFeelsLike] = useState("")
    const [weatherDescription, setWeatherDescription] = useState("")
    const { height, width } = useWindowDimensions();
    const getImage = (icon) => {
        return (
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="WEATHER_ICON" style={{width: width / 10, height: "auto"}}/>
        )
    }
    const getFeelsLike = () => {
        return ( <p style={{fontSize: 10}}>Feels Like {feelsLike} °F</p> )
    }
    const formatWeatherDescription = (description) => {
        var modified = new Array()
        description.split(' ').forEach(word => {
            modified.push(word.charAt(0).toUpperCase() + word.slice(1))
        })
        return modified.join(' ')
    }
    const parseWeatherDetails = () => {
        axios(api_config).then(res => {
            const data = res.data
            const main = data.main
            const weather = data.weather[0]
            setTemp(Math.round(main.temp))
            setImageIcon(weather.icon)
            setFeelsLike(Math.round(main.feels_like))
            setWeatherDescription(weather.description)
        })
        
    }
    setInterval(parseWeatherDetails(), 60000)

    //setInterval(updateWeather, 600000)
    return (
        <Container fluid>
            <Row> 
                <Col>{getImage(imageIcon)}</Col> 
                <Col style={{fontSize: 30}}>{temp} °F <br/> {getFeelsLike()}</Col>
            </Row>
            <Row>
                <Col>{formatWeatherDescription(weatherDescription)}</Col>
            </Row>
        </Container>
    )
}

export default Weather;