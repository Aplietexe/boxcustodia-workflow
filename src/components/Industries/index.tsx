import { Col, Image as ImageComponent } from "react-bootstrap"
import styled from "styled-components"

import BackgroundColor from "../common/BackgroundColor"
import Pad from "../common/Pad"
import StyledH2 from "../common/StyledH2"

import content from "./content"

const Invert = styled.span`
  background-color: white;
  color: var(--accent-dark);
  font-weight: 700;
  line-height: 2;
`

const IndustryStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 2.5rem;

  width: 170px;

  img {
    height: 70px;
    margin-bottom: 2rem;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--gray-light);
  }
`

const Industries = () => (
  <BackgroundColor className="py-5" color="var(--accent-dark)" isSingleRow>
    <Pad>
      <Col className="py-5" xs={12}>
        <StyledH2 className="text-white">
          Una solución para cada <Invert> industria </Invert>
        </StyledH2>
      </Col>
      <Col className="d-flex flex-wrap justify-content-between" xs={12}>
        {content.map(({ image, title }) => (
          <IndustryStyles key={title}>
            <ImageComponent fluid src={image} />
            <p className="text-center text-white">{title}</p>
          </IndustryStyles>
        ))}
      </Col>
    </Pad>
  </BackgroundColor>
)

export default Industries
