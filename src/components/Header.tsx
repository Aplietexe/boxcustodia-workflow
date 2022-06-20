import { Col, Image as ImageComponent, Row } from "react-bootstrap"
import styled from "styled-components"

import image from "../assets/Header/image.png"

import AccentButton from "./common/AccentButton"
import Pad from "./common/Pad"
import StyledH2 from "./common/StyledH2"

const Paragraph = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 1.563rem;
  font-weight: 400;
  color: var(--gray-dark);
`

const Header = () => (
  <Row className="mb-4">
    <Col xs={12}>
      <ImageComponent className="my-5" fluid src={image} />
    </Col>
    <Col xs={12}>
      <Pad>
        <Row>
          <Col xs={12}>
            <StyledH2 className="pb-3">
              Modernizar tu negocio puede ser fácil
            </StyledH2>
          </Col>
          <Col className="mb-4" xs={12}>
            <Paragraph>
              A través de esta herramienta podrás aumentar la productividad de
              tu negocio eliminando la gestión manual de documentos, tareas o
              información que va pasando de persona a persona.
            </Paragraph>
          </Col>
          <Col xs={6}>
            <AccentButton>Solicitar cotización</AccentButton>
          </Col>
        </Row>
      </Pad>
    </Col>
  </Row>
)

export default Header
