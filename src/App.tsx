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
import Pad from "./components/common/Pad"
import Company from "./components/Company"

const App = () => (
  <Container fluid>
    <Navbar />
    <Header />
    <Features />
    <BackgroundColor color="var(--gray-light)">
      <Pad>
        <Services />
        <Perks />
      </Pad>
    </BackgroundColor>
    <Industries />
    <Company />
    <ContactForm />
    <Footer />
  </Container>
)

export default App
