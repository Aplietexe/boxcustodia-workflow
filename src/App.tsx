import { Col, Container, Row } from "react-bootstrap"

import Features from "./components/Features"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Perks from "./components/Perks"
import Services from "./components/Services"

const App = () => (
  <Container fluid>
    <Navbar />
    <Header />
    <Features />
    <Row style={{ backgroundColor: "#aaa" }}>
      <Col>
        <Services />
        <Perks />
      </Col>
    </Row>
  </Container>
)

export default App
