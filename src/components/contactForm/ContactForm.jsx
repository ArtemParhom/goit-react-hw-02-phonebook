import React from 'react';
import css from './contactForm.module.css';

export const ContactForm = ({ onSubmit, value, onChange, valueNum }) => {
  return (
    <div>
      <h1 className={css.formTitle}>Phonebook</h1>
      <form className={css.formBox} onSubmit={onSubmit}>
        <label>
          <h3 className={css.titleName}>Name</h3>
          <input
            type="text"
            name={'name'}
            value={value}
            onChange={onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          <h3 className={css.titleName}>Number</h3>
          <input
            type="tel"
            name={'number'}
            value={valueNum}
            onChange={onChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
