import { Col, Row } from "react-bootstrap"

import documentDistributionImage from "../../assets/document-distribution-image.svg"
import timeStrampingImage from "../../assets/time-stamping-image.svg"
import StyledH2 from "../common/StyledH2"
import StyledP from "../common/StyledP"

import Service from "./Service"

const servicesContent: { image: string; text: string }[] = [
  {
    image: documentDistributionImage,
    text: "Distribución",
  },
  {
    image: timeStrampingImage,
    text: "Time Stamping",
  },
]
const Services = () => (
  <>
    <Row className="pt-5">
      <Col>
        <StyledH2>Soluciones</StyledH2>
        <StyledP>Elegí</StyledP>
      </Col>
    </Row>
    <Row>
      {servicesContent.map((service) => (
        <Service {...service} key={service.text} />
      ))}
    </Row>
  </>
)

export default Services
