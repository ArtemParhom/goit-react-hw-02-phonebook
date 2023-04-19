export const ContactsList = ({ contactList, deleteContact }) => {
  return (
    <ul>
      {contactList.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => deleteContact(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
