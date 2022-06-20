import { Row, Image as ImageComponent, Col } from "react-bootstrap"

import perk1 from "../assets/perk-1.svg"
import perk2 from "../assets/perk-2.svg"

import StyledP from "./common/StyledP"
import StyledH4 from "./common/StyledH4"

const perksContent: { image: string; text: string; title: string }[] = [
  {
    image: perk1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    title: "User interface",
  },
  {
    image: perk2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    title: "Multi dispositivo",
  },
]

const Perks = () => (
  <Row className="py-5">
    {perksContent.map(({ image, title, text }) => (
      <Col key={title} xs={6}>
        <Row className="my-5">
          <Col xs={12}>
            <ImageComponent fluid src={image} />
          </Col>
          <Col className="mt-3" xs={12}>
            <StyledH4>{title}</StyledH4>
          </Col>
          <Col xs={12}>
            <StyledP>{text}</StyledP>
          </Col>
        </Row>
      </Col>
    ))}
  </Row>
)

export default Perks
