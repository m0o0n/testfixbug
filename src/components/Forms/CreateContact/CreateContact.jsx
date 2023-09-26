import { useState } from 'react';
import css from './CreateContact.module.css';

const FormCreateContact = props => {
  const [state, setState] = useState({ name: '', number: '', isValid: true });

  const handleChange = ({ target: { value, name } }) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!state.name || !state.number) return setState({ isValid: false });
    props.createContact(state);
    setState({ name: '', number: '', isValid: true });
  };

  return (
    <form className={css.form_contact} onSubmit={handleSubmit}>
      <div className={css.input_contact}>
        <label htmlFor="inputName" className={css.form_label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          className={`${css.form_control} ${!state.isValid && 'is-invalid'}`}
          id="inputName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={css.input_contact}>
        <label htmlFor="inputNumber" className={css.form_label}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          onChange={handleChange}
          className={`${css.form_control} ${!state.isValid && 'is-invalid'}`}
          id="inputNumber"
          value={state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};

export default FormCreateContact;
