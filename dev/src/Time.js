import { React, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./time.css"
const moment = require("moment")

function Time() {
    const [day, setDay] = useState(null)
    const [time, setTime] = useState(null)
    setInterval(() => { setDay(moment().format("LL")) }, 1000)
    setInterval(() => { setTime(moment().format("LT")) }, 1000)
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className={"date"}><h1>{day}</h1></Col>
                </Row>
                <Row>
                    <Col className={"time"}><h3>{time}</h3></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Time