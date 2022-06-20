import { Col, Image as ImageComponent, Row } from "react-bootstrap"
import styled from "styled-components"

import phoneIcon1 from "../../assets/phone-icon-1.svg"
import phoneIcon2 from "../../assets/phone-icon-2.svg"
import mailIcon from "../../assets/mail-icon.svg"
import arrowIcon from "../../assets/arrow-icon.svg"
import StyledP from "../common/StyledP"

const contactOptions: { image: string; text: string }[] = [
  {
    image: phoneIcon1,
    text: "phone1",
  },
  {
    image: phoneIcon2,
    text: "phone2",
  },
  {
    image: mailIcon,
    text: "mail",
  },
]

const OptionStyles = styled(Col)`
  display: flex;
  gap: 10px;
  align-items: center;

  img {
    width: 1.25em;
  }
`

const StyledLink = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--accent-light);

  display: inline-block;

  img {
    margin-left: 1em;
  }
`

const ContactInfo = () => (
  <Row className="mb-5 pb-5">
    <Col className="d-flex justify-content-center">
      <div>
        {contactOptions.map(({ image, text }) => (
          <OptionStyles className="mb-3" key={text}>
            <ImageComponent src={image} />
            <StyledP className="m-0">{text}</StyledP>
          </OptionStyles>
        ))}
        <StyledLink className="mt-3">
          Ponerse en contacto con comercial <ImageComponent src={arrowIcon} />
        </StyledLink>
      </div>
    </Col>
  </Row>
)

export default ContactInfo
