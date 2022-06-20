import Pad from "../common/Pad"

import ContactFormBody from "./ContactFormBody"
import ContactFormHeader from "./ContactFormHeader"
import ContactInfo from "./ContactInfo"

const ContactForm = () => (
  <>
    <ContactFormHeader />
    <Pad>
      <ContactFormBody />
      <ContactInfo />
    </Pad>
  </>
)

export default ContactForm
