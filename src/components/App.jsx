import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { Contacts } from './contacts/Contacts';
import { Filter } from './filter/filter';
import { ContactForm } from './contactForm/ContactForm';
import css from './App.module.css';

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
      <div className={css.container}>
        React homework templated
        <ContactForm
          onSubmit={this.handleSubmit}
          value={this.state.name}
          onChange={this.userInputChange}
          valueNum={this.state.number}
        />
        {this.state.contacts.length === 0 ? (
          <h4>No contacts</h4>
        ) : (
          <div>
            <Filter
              onChange={this.userInputChange}
              value={this.state.filter}
              filterContact={this.filterContact}
            />
            <Contacts
              onChange={this.handleDelete}
              createId={this.createId}
              regtrt={this.state}
            />
          </div>
        )}
      </div>
    );
  }
}
