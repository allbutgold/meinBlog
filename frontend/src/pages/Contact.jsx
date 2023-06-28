import styles from "./Scss/Contact.module.scss";
import ContactForm from "../components/ContactForm.jsx";

const Contact = () => {
  return (
    <section className={styles.Contact}>
      <ContactForm />
    </section>
  );
};

export default Contact;
