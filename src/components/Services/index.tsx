import { Col, Row } from "react-bootstrap"

import StyledH2 from "../common/StyledH2"
import StyledP from "../common/StyledP"

import Service from "./Service"
import content from "./content"

const Services = () => (
  <>
    <Row className="pt-5" id="services">
      <Col className="pt-5 mb-4">
        <StyledH2 className="mb-3">
          Soluciones a medida de nuestros clientes
        </StyledH2>
        <StyledP>
          Elegí los microservicios que mejor se adapten a tu proceso de negocio.
        </StyledP>
      </Col>
    </Row>
    <Row>
      {content.map((service) => (
        <Service {...service} key={service.text} />
      ))}
    </Row>
  </>
)

export default Services
