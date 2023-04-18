import React from 'react';

export const Contacts = ({ onChange, createId, regtrt }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {regtrt.contacts.map(contact => (
          <li key={createId()} id={createId()} name="name">
            {contact.name}: {contact.number}{' '}
            <button type="button" onClick={() => onChange(contact.id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
