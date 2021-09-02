import { React, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useWindowDimensions from './Screen';
import Time from './Time';
import Weather from './Weather'
import "./app.css"
<link href="https://fonts.googleapis.com/css?family=Bungee+Inline" rel="stylesheet"> </link>

function App() {
  const { height, width } = useWindowDimensions();
  const [ topHeight, setTopHeight ] = useState()
  return (
    <div className={"app"}>
      <Container fluid style={{height: height}}>
        <Row>
          <Col lg sm md = "auto"> <Time /> </Col>
          <Col />
          <Col sm md lg = "auto" style={{textAlign: "right"}}><Weather /></Col>
        </Row>
      <Row>
        <Col style={{textAlign: "center", height: height/2, padding: height/4, fontSize: 30}}>Hello, Sheel Patel</Col>
      </Row>
      <Row>
          <Col >Music</Col>
      </Row>
      <Row> 
        <Col>

        </Col>
      </Row>
      </Container>
    </div>
  )}


export default App;
