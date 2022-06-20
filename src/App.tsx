import { Container } from "react-bootstrap"

import BackgroundColor from "./components/common/BackgroundColor"
import ContactForm from "./components/ContactForm"
import Features from "./components/Features"
import Header from "./components/Header"
import Industries from "./components/Industries"
import Navbar from "./components/Navbar"
import Perks from "./components/Perks"
import Services from "./components/Services"
import Footer from "./components/Footer"

const App = () => (
  <Container fluid>
    <Navbar />
    <Header />
    <Features />
    <BackgroundColor color="var(--gray-light)">
      <Services />
      <Perks />
    </BackgroundColor>
    <Industries />
    <ContactForm />
    <Footer />
  </Container>
)

export default App
