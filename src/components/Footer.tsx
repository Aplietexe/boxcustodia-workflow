import { Col } from "react-bootstrap"

import BackgroundColor from "./common/BackgroundColor"

const Footer = () => (
  <BackgroundColor className="mt-5" color="darkblue">
    <Col className="text-center text-white p-2">
      Copyright &copy; 2021 Workflow. <br />
      Desarrollado por Box Custodia de Archivos S.A.
    </Col>
  </BackgroundColor>
)

export default Footer
