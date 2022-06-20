import { Col, Image as ImageComponent, Row } from "react-bootstrap"
import styled from "styled-components"

import phoneIcon1 from "../../assets/phone-icon-1.svg"
import phoneIcon2 from "../../assets/phone-icon-2.svg"
import mailIcon from "../../assets/mail-icon.svg"
import arrowIcon from "../../assets/arrow-icon.svg"

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
  color: var(--accent-color);

  img {
    margin-left: 1.5em;
  }
`

const ContactInfo = () => (
  <Row>
    <Col className="d-flex justify-content-center">
      <div>
        {contactOptions.map(({ image, text }) => (
          <OptionStyles className="mb-3" key={text}>
            <ImageComponent src={image} />
            <p className="m-0">{text}</p>
          </OptionStyles>
        ))}
        <StyledLink>
          Ponerse en contacto con comercial <ImageComponent src={arrowIcon} />
        </StyledLink>
      </div>
    </Col>
  </Row>
)

export default ContactInfo
