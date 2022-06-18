import { Row, Image as ImageComponent, Col } from "react-bootstrap"

import feature1 from "../assets/feature-1.svg"
import feature2 from "../assets/feature-2.svg"

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
  <Row className="py-5">
    <Col>
      <h2 className="pb-3">Automatizá</h2>
      {featuresContent.map(({ image, title, text }) => (
        <Row className="my-5" key={title}>
          <Col xs={12}>
            <ImageComponent fluid src={image} />
          </Col>
          <Col className="my-1" xs={12}>
            <h3>{title}</h3>
          </Col>
          <Col xs={12}>
            <p>{text}</p>
          </Col>
        </Row>
      ))}
    </Col>
  </Row>
)

export default Features
