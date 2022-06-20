/* eslint-disable react/jsx-no-leaked-render */
import { Col, Image as ImageComponent, Row } from "react-bootstrap"
import styled from "styled-components"
import { useCallback } from "react"

import workflowLogo from "../assets/Navbar/workflow-logo.svg"
import loginIcon from "../assets/Navbar/login-icon.svg"
import burgerIcon from "../assets/Navbar/burger-icon.svg"
import type { SetState } from "../types"
import useBreakpoints from "../hooks/useBreakpoints"

import Pad from "./common/Pad"

const StyledLink = styled.a`
  font-family: "Open Sans", sans-serif;
  font-size: 1.1875rem;
  font-weight: 400;
  color: #7eb6ce;

  text-decoration: none;
`

const StyledImage = styled(ImageComponent)`
  width: 2rem;
  cursor: pointer;
`

const NavLinks = styled(Col)`
  justify-content: end;
  align-items: center;
  gap: 2rem;

  padding-inline: 2rem;

  a {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-color, var(--accent-dark));

    text-decoration: none;
  }
`

const ContactLink = styled.a`
  border-radius: var(--border-radius);
  background-color: var(--accent-light);
  --text-color: #fff;

  padding: 0.75rem 2rem;
`

type NavbarProps = Readonly<{
  setIsSidebarOpen: SetState<boolean>
}>

const Navbar = ({ setIsSidebarOpen }: NavbarProps) => {
  const handleBurgerClick = useCallback(() => {
    setIsSidebarOpen(true)
  }, [setIsSidebarOpen])

  const breakpoints = useBreakpoints()

  const goBack = (
    <Row className="mt-4 mb-3 mb-xl-4">
      <Col
        className="text-end text-xl-center"
        xl={{ offset: 11, span: 1 }}
        xs={{ offset: 10, span: 2 }}
      >
        <StyledLink href="#">Volver</StyledLink>
      </Col>
    </Row>
  )

  return (
    <>
      {breakpoints.xl && goBack}
      <Pad>
        {!breakpoints.xl && goBack}
        <Row>
          <Col
            className="d-flex align-items-end fs-1 ps-4 pb-2 d-xl-none"
            xs={2}
          >
            <ImageComponent
              onClick={handleBurgerClick}
              role="button"
              src={burgerIcon}
            />
          </Col>
          <Col
            className="d-flex justify-content-center justify-content-xl-start"
            xl={5}
            xs={8}
          >
            <ImageComponent fluid src={workflowLogo} />
          </Col>
          <Col
            className="d-flex align-items-end justify-content-end pe-4 pb-2 d-xl-none"
            xs={2}
          >
            <StyledImage fluid src={loginIcon} />
          </Col>
          <NavLinks className="d-none d-xl-flex" xl={7}>
            <a href="#root">Inicio</a>
            <a href="#services">Servicios</a>
            <a href="#company">Nosotros</a>
            <ContactLink href="#contact-form">Contacto</ContactLink>
          </NavLinks>
        </Row>
      </Pad>
    </>
  )
}

export default Navbar
