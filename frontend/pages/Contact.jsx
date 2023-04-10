import style from './Contact.module.scss'
import ContactForm from '../components/ContactForm.jsx'

const Contact = () => {
  return ( 
    <section className={style.Contact}>
      <ContactForm/>
    </section>

  );
}

export default Contact;