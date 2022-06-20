import { Col, Image as ImageComponent, Row } from "react-bootstrap"
import styled from "styled-components"

import workflowLogo from "../assets/Navbar/workflow-logo.svg"
import loginIcon from "../assets/Navbar/login-icon.svg"

import Pad from "./common/Pad"

const StyledLink = styled.a`
  font-family: "Open Sans", sans-serif;
  font-size: 1.1875rem;
  font-weight: 400;
  color: #7eb6ce;

  text-decoration: none;
`

const Navbar = () => (
  <Pad>
    <Row className="mt-4 mb-3">
      <Col className="text-end" xs={{ offset: 10, span: 2 }}>
        <StyledLink href="#">Volver</StyledLink>
      </Col>
    </Row>
    <Row>
      <Col className="d-flex align-items-end fs-1 ps-4 pb-2" xs={2}>
        ☰
      </Col>
      <Col className="d-flex justify-content-center" xs={8}>
        <ImageComponent fluid src={workflowLogo} />
      </Col>
      <Col
        className="d-flex align-items-end justify-content-end pe-4 pb-2"
        xs={2}
      >
        <ImageComponent fluid src={loginIcon} style={{ width: "2rem" }} />
      </Col>
    </Row>
  </Pad>
)

export default Navbar
