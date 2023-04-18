import React from 'react';

export const Filter = ({ onChange, value, filterContact }) => {
  return (
    <div>
      <label>
        <h3>Find contacts by name</h3>
        <input type="text" name="filter" value={value} onChange={onChange} />
        <ul>{filterContact()}</ul>
      </label>
    </div>
  );
};
