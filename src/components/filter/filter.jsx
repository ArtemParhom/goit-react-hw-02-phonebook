import React from 'react';

export const Filter = ({ onChange, value }) => {
  return (
    <div>
      <label>
        <h3>Find contacts by name</h3>
        <input type="text" name="filter" value={value} onChange={onChange} />
      </label>
    </div>
  );
};
