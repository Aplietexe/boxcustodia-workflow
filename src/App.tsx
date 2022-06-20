import { Container } from "react-bootstrap"

import BackgroundColor from "./components/common/BackgroundColor"
import Features from "./components/Features"
import Header from "./components/Header"
import Industries from "./components/Industries"
import Navbar from "./components/Navbar"
import Perks from "./components/Perks"
import Services from "./components/Services"

const App = () => (
  <Container fluid>
    <Navbar />
    <Header />
    <Features />
    <BackgroundColor color="#aaa">
      <Services />
      <Perks />
    </BackgroundColor>
    <Industries />
  </Container>
)

export default App