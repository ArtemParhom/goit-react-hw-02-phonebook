import { nanoid } from 'nanoid';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  userInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { contacts, name, number } = this.state;
    if (this.state.contacts.map(e => e.name).includes(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    contacts.push({ id: this.createId(), name: name, number: number });
    this.reset();
  };

  createId = () => {
    return nanoid();
  };

  filterContact = () => {
    const { contacts, filter } = this.state;
    const valueInputFilter = filter.toLowerCase();
    if (valueInputFilter === ``) {
      return;
    }
    const findContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(valueInputFilter)
    );
    const newContactArray = findContact.map(e => {
      return (
        <li key={this.createId()}>
          {e.name}: {e.number}
        </li>
      );
    });
    return newContactArray;
  };

  handleDelete = id => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: newContacts });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework templated
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h3>Name</h3>
            <input
              type="text"
              name={'name'}
              value={this.state.name}
              onChange={this.userInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label>
            <h3>Number</h3>
            <input
              type="tel"
              name={'number'}
              value={this.state.number}
              onChange={this.userInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        {this.state.contacts.length === 0 ? (
          <h4>No contacts</h4>
        ) : (
          <div>
            <div>
              <label>
                <h3>Find contacts by name</h3>
                <input
                  type="text"
                  name="filter"
                  value={this.state.filter}
                  onChange={this.userInputChange}
                />
                <ul>{this.filterContact()}</ul>
              </label>
            </div>
            <div>
              <h2>Contacts</h2>
              <ul>
                {this.state.contacts.map(contact => (
                  <li key={this.createId()} id={this.createId()} name="name">
                    {contact.name}: {contact.number}{' '}
                    <button
                      type="button"
                      onClick={() => this.handleDelete(contact.id)}
                    >
                      delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}
