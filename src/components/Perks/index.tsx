import { Row, Image as ImageComponent, Col } from "react-bootstrap"
import styled from "styled-components"

import StyledP from "../common/StyledP"
import StyledH4 from "../common/StyledH4"

import content from "./content"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`

const Perks = () => (
  <Row className="py-5">
    <Col>
      <Grid>
        {content.map(({ image, title, text }) => (
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
