import { Col, Image as ImageComponent, Row } from "react-bootstrap"

import StyledH2 from "../common/StyledH2"
import StyledP from "../common/StyledP"
import sideImage from "../../assets/Services/side.png"

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
      <Col xl={7} xs={12}>
        <Row>
          {content.map((service) => (
            <Service {...service} key={service.text} />
          ))}
        </Row>
      </Col>
      <Col className="d-none d-xl-flex align-items-center justify-content-end">
        <ImageComponent fluid src={sideImage} />
      </Col>
    </Row>
  </>
)

export default Services
