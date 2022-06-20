import { Col, Image as ImageComponent, Row } from "react-bootstrap"
import styled from "styled-components"

import headerImage from "../assets/header-image.png"

import AccentButton from "./common/AccentButton"
import StyledH2 from "./common/StyledH2"

const Paragraph = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 1.563rem;
  font-weight: 400;
  color: var(--gray-dark);
`

const Header = () => (
  <Row>
    <Col xs={12}>
      <ImageComponent className="my-5" fluid src={headerImage} />
    </Col>
    <Col xs={12}>
      <Row>
        <Col xs={12}>
          <StyledH2>Modernizar tu negocio puede ser fácil</StyledH2>
        </Col>
        <Col className="mb-3" xs={12}>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Paragraph>
        </Col>
        <Col xs={6}>
          <AccentButton>Solicitar cotización</AccentButton>
        </Col>
      </Row>
    </Col>
  </Row>
)

export default Header
