import ContactForm from "../components/ContactForm";
import Container from 'react-bootstrap/Container';

const Contacts = () => {
    return (
      <Container>
        <div className = "Contacts">
          <h2 className="text-center">Add your contacts here:</h2>
          <ContactForm/>
        </div>
      </Container>

    )
  };
  
  export default Contacts;
  