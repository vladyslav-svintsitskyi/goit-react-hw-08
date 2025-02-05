import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const filteredData = useSelector(selectFilteredContacts);

  return (
    <div className={s.listWrapper}>
      <ul className={s.list}>
        {filteredData.map((contact) => (
          <li key={contact.id} className={s.item}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
