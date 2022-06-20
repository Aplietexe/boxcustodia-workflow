import { Row, Image as ImageComponent, Col } from "react-bootstrap"

import feature1 from "../assets/feature-1.svg"
import feature2 from "../assets/feature-2.svg"

import Pad from "./common/Pad"
import StyledH2 from "./common/StyledH2"
import StyledH3 from "./common/StyledH3"
import StyledP from "./common/StyledP"

const featuresContent: { image: string; text: string; title: string }[] = [
  {
    image: feature1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    title: "Diagramá",
  },
  {
    image: feature2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    title: "Definí",
  },
]

const Features = () => (
  <Pad>
    <StyledH2 className="pb-2 pt-3 mt-5">Automatizá</StyledH2>
    {featuresContent.map(({ image, title, text }) => (
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
