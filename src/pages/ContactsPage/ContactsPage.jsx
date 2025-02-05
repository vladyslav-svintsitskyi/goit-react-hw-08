import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

const ContactsPage = () => {
  return (
    <div>
      <ContactList />
      <ContactForm />
      <SearchBox />
    </div>
  );
};

export default ContactsPage;
