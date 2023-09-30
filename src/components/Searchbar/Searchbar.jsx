import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import React from 'react';

const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
        onChange={handleChange}
        value={value}
      />
      <button type="submit" className="SearchForm-button">
        <AiOutlineSearch className="SearchForm-icon" />
      </button>
    </form>
  );
};

export default Searchbar;