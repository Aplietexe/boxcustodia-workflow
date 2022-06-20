import { Image as ImageComponent } from "react-bootstrap"
import styled from "styled-components"

import arrowIcon from "../assets/arrow-icon.svg"
import boxLogo from "../assets/Company/box-logo.svg"

import Pad from "./common/Pad"
import StyledLink from "./common/StyledLink"

const Paragraph = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.75rem;
  font-weight: 300;
  color: var(--accent-dark);

  text-align: center;
`
const Company = () => (
  <Pad>
    <div className="d-flex flex-column align-items-center pb-5">
      <ImageComponent
        className="my-5 pt-5"
        src={boxLogo}
        style={{ width: 450 }}
      />
      <Paragraph className="mb-5">
        ¡Somos una compañía argentina apasionada por la innovación! Con más de
        25 años de experiencia y trayectoria, nuestra unidad de negocio
        “Software as a Service” revoluciona y simplifica la gestión de tus
        procesos de negocio a través de la digitalización.
      </Paragraph>
      <StyledLink className="mb-5" href="#">
        Conocé nuestra empresa Box custodia
        <ImageComponent src={arrowIcon} />
      </StyledLink>
    </div>
  </Pad>
)

export default Company
