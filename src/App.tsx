import { Container } from "react-bootstrap"
import { useState } from "react"

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
import Sidebar from "./components/Sidebar"

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Container fluid>
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />
        <Header />
        <Features />
        <BackgroundColor className="mt-5" color="var(--gray-light)">
          <Pad>
            <Services />
          </Pad>
          <Perks />
        </BackgroundColor>
        <Industries />
        <Company />
        <ContactForm />
        <Footer />
      </Container>
    </>
  )
}

export default App
