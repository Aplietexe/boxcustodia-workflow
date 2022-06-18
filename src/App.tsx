import { Container } from "react-bootstrap"

import Header from "./components/Header"
import Navbar from "./components/Navbar"

const App = () => (
  <Container fluid>
    <Navbar />
    <Header />
  </Container>
)

export default App
