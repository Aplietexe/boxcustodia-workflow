import { Col, Image as ImageComponent } from "react-bootstrap"
import styled from "styled-components"

import industry1Image from "../assets/industry-1.svg"
import industry2Image from "../assets/industry-2.svg"

import BackgroundColor from "./common/BackgroundColor"
import StyledH2 from "./common/StyledH2"

const Invert = styled.span`
  background-color: white;
  color: var(--accent-dark);
`

const industriesContent: { image: string; title: string }[] = [
  {
    image: industry1Image,
    title: "Recursos Humanos",
  },
  {
    image: industry2Image,
    title: "Bancos Seguros",
  },
]

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
  <BackgroundColor color="var(--accent-dark)" isSingleRow>
    <Col className="py-5" xs={12}>
      <StyledH2 className="text-white">
        Una solución para cada <Invert> industria </Invert>
      </StyledH2>
    </Col>
    <Col className="d-flex flex-wrap justify-content-between" xs={12}>
      {industriesContent.map(({ image, title }) => (
        <IndustryStyles key={title}>
          <ImageComponent fluid src={image} />
          <p className="text-center text-white">{title}</p>
        </IndustryStyles>
      ))}
    </Col>
  </BackgroundColor>
)

export default Industries
