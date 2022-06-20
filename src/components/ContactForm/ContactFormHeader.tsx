import { Col, Image as ImageComponent, Row } from "react-bootstrap"
import styled from "styled-components"

import backgroundImage from "../../assets/ContactForm/background.jpg"
import leftImage from "../../assets/ContactForm/left.svg"
import centerImage from "../../assets/ContactForm/center.svg"
import rightImage from "../../assets/ContactForm/right.svg"
import StyledH2 from "../common/StyledH2"
import StyledP from "../common/StyledP"
import Pad from "../common/Pad"

const StyledRow = styled(Row)`
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

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
  <StyledRow className="py-5" id="contact-form">
    <Pad>
      <Col className="text-center py-4" xs={12}>
        <ImageComponent className="left-image" src={leftImage} />
        <ImageComponent className="center-image" src={centerImage} />
        <ImageComponent className="right-image" src={rightImage} />
      </Col>
      <Col className="text-center py-4" xs={12}>
        <StyledH2 className="mb-4">¿Cómo podemos ayudarlo?</StyledH2>
        <StyledP>Llene el formulario</StyledP>
      </Col>
    </Pad>
  </StyledRow>
)

export default ContactFormHeader
