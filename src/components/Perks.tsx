import { Row, Image as ImageComponent, Col } from "react-bootstrap"
import styled from "styled-components"

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`

const Perks = () => (
  <Row className="py-5">
    <Col>
      <Grid>
        {perksContent.map(({ image, title, text }) => (
          <div key={title}>
            <ImageComponent fluid src={image} />
            <StyledH4 className="pt-3 mb-2">{title}</StyledH4>
            <StyledP>{text}</StyledP>
          </div>
        ))}
      </Grid>
    </Col>
  </Row>
)

export default Perks
