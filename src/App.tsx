import { Container } from "react-bootstrap"

import Features from "./components/Features"
import Header from "./components/Header"
import Navbar from "./components/Navbar"

const App = () => (
  <Container fluid>
    <Navbar />
    <Header />
    <Features />
  </Container>
)

export default App
