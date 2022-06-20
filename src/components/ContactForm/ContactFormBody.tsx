import { Col, FloatingLabel, Form, Row } from "react-bootstrap"
import styled from "styled-components"

import AccentButton from "../common/AccentButton"

const StyledForm = styled(Form)`
  font-family: "Poppins", sans-serif;
  font-size: 1.125rem;
  font-weight: 300;
  color: var(--gray-dark);

  input,
  textarea {
    border-radius: var(--border-radius);
  }
`

const ContactFormBody = () => (
  <Row className="py-5 mt-5">
    <Col xs={{ offset: 1, span: 10 }}>
      <StyledForm className="px-2">
        <FloatingLabel
          className="mb-3"
          controlId="name"
          label="Nombre y apellido"
        >
          <Form.Control placeholder="Nombre y apellido" type="text" />
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="phone" label="Teléfono">
          <Form.Control placeholder="Teléfono" type="text" />
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="email" label="Email">
          <Form.Control placeholder="Email" type="email" />
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="company" label="Empresa">
          <Form.Control placeholder="Empresa" type="text" />
        </FloatingLabel>
        <FloatingLabel className="mb-4" controlId="message" label="Mensaje">
          <Form.Control
            as="textarea"
            placeholder="Mensaje"
            style={{ height: 100 }}
            type="text"
          />
        </FloatingLabel>
        <AccentButton>Enviar</AccentButton>
      </StyledForm>
    </Col>
  </Row>
)

export default ContactFormBody
