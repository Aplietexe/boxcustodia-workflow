import { Col, Image as ImageComponent, Row } from "react-bootstrap"
import styled from "styled-components"

import workflowLogo from "../assets/workflow-logo.svg"
import userLogo from "../assets/user-logo.svg"

const StyledLink = styled.a`
  font-family: "Open Sans", sans-serif;
  font-size: 1.1875rem;
  font-weight: 400;
  color: #7eb6ce;

  text-decoration: none;
`

const Navbar = () => (
  <>
    <Row className="my-3">
      <Col xs={{ offset: 10, span: 2 }}>
        <StyledLink href="#">Volver</StyledLink>
      </Col>
    </Row>
    <Row>
      <Col
        className="d-flex align-items-center fs-1 justify-content-center"
        xs={2}
      >
        ☰
      </Col>
      <Col className="d-flex justify-content-center" xs={8}>
        <ImageComponent fluid src={workflowLogo} />
      </Col>
      <Col className="d-flex align-items-center" xs={1}>
        <ImageComponent fluid src={userLogo} />
      </Col>
    </Row>
  </>
)

export default Navbar
