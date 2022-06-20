import { Col } from "react-bootstrap"
import styled from "styled-components"

import BackgroundColor from "./common/BackgroundColor"

const StyledCol = styled(Col)`
  font-family: "Open Sans", sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: #fff;

  text-align: center;
`

const Footer = () => (
  <BackgroundColor className="mt-5" color="var(--accent-dark)">
    <StyledCol className="p-2">
      Copyright &copy; 2021 Workflow. <br />
      Desarrollado por Box Custodia de Archivos S.A.
    </StyledCol>
  </BackgroundColor>
)

export default Footer
