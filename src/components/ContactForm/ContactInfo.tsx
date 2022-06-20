import { Col, Image as ImageComponent, Row } from "react-bootstrap"
import styled from "styled-components"

import phone1Icon from "../../assets/ContactForm/phone-1.svg"
import phone2Icon from "../../assets/ContactForm/phone-2.svg"
import mailIcon from "../../assets/ContactForm/mail.svg"
import arrowIcon from "../../assets/arrow-icon.svg"
import StyledP from "../common/StyledP"

const contactOptions: { image: string; text: string }[] = [
  {
    image: phone1Icon,
    text: "(+54 011) 5032 2355 Int. 2002",
  },
  {
    image: phone2Icon,
    text: "(+54 011) 15 - 37886510",
  },
  {
    image: mailIcon,
    text: "agarcia@boxcustodia.com",
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

  text-decoration: none;

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
