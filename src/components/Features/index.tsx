import { Row, Image as ImageComponent, Col } from "react-bootstrap"

import Pad from "../common/Pad"
import StyledH2 from "../common/StyledH2"
import StyledH3 from "../common/StyledH3"
import StyledP from "../common/StyledP"

import content from "./content"

const Features = () => (
  <Pad>
    <StyledH2 className="pb-2 pt-3 mt-5">
      Automatizá tu proceso de negocio
    </StyledH2>
    {content.map(({ image, title, text }) => (
      <Row className="my-5" key={title}>
        <Col xs={12}>
          <ImageComponent fluid src={image} />
        </Col>
        <Col className="my-3" xs={12}>
          <StyledH3>{title}</StyledH3>
        </Col>
        <Col xs={12}>
          <StyledP>{text}</StyledP>
        </Col>
      </Row>
    ))}
  </Pad>
)

export default Features
