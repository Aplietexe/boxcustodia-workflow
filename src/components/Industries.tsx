import { Col, Image as ImageComponent } from "react-bootstrap"
import styled from "styled-components"

import industry1Image from "../assets/industry-1.svg"
import industry2Image from "../assets/industry-2.svg"

import BackgroundColor from "./common/BackgroundColor"

const background = "darkblue"

const Invert = styled.span`
  background-color: white;
  color: ${background};
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
`

const Industries = () => (
  <BackgroundColor className="text-white" color={background} isSingleRow>
    <Col className="py-5" xs={12}>
      <h2>
        Una solución para cada <Invert> industria </Invert>
      </h2>
    </Col>
    <Col className="d-flex flex-wrap justify-content-between" xs={12}>
      {industriesContent.map(({ image, title }) => (
        <IndustryStyles key={title}>
          <ImageComponent fluid src={image} />
          <p className="text-center">{title}</p>
        </IndustryStyles>
      ))}
    </Col>
  </BackgroundColor>
)

export default Industries
