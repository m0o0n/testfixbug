import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = props => {
  return (
    <>
      <ul className={css.list_group}>
        {(props.filteredContact ? props.filteredContact : props.contact).map(
          el => (
            <Contact
              contact={el}
              key={el.id}
              handleDelete={id => props.handleDelete(id)}
            />
          )
        )}
      </ul>
    </>
  );
};

export default ContactList;
