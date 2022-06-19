import { Col, Image as ImageComponent } from "react-bootstrap"
import styled from "styled-components"

const ServiceWrapper = styled.div`
  border-radius: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);

  padding: 1rem;
  margin-bottom: 1rem;

  display: flex;
  gap: 10px;
  align-items: center;
`

type ServiceProps = Readonly<{
  image: string
  text: string
}>

const Service = ({ image, text }: ServiceProps) => (
  <Col xs={12}>
    <ServiceWrapper>
      <ImageComponent fluid src={image} />
      <p>{text}</p>
    </ServiceWrapper>
  </Col>
)

export default Service
