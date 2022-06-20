import { Col, Image as ImageComponent, Row } from "react-bootstrap"
import styled from "styled-components"

import backgroundImage from "../../assets/background-image.jpg"
import leftImage from "../../assets/left-image.svg"
import centerImage from "../../assets/center-image.svg"
import rightImage from "../../assets/right-image.svg"

const StyledRow = styled(Row)`
  background-image: url(${backgroundImage});
  background-position: center;

  img {
    position: relative;
  }

  .left-image {
    transform: translateX(25%);
  }

  .right-image {
    transform: translateX(-25%);
  }

  .center-image {
    z-index: 1;
  }
`

const ContactFormHeader = () => (
  <StyledRow className="py-5">
    <Col className="text-center pb-4" xs={12}>
      <ImageComponent className="left-image" src={leftImage} />
      <ImageComponent className="center-image" src={centerImage} />
      <ImageComponent className="right-image" src={rightImage} />
    </Col>
    <Col className="text-center" xs={12}>
      <h2>¿Cómo podemos ayudarlo?</h2>
      <p>Llene el formulario</p>
    </Col>
  </StyledRow>
)

export default ContactFormHeader
