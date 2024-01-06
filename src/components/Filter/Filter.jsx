import { InputStyled } from 'components/ContactForm/ContactForm.styled';
import React from 'react';

export const Filter = ({ onChange, value }) => {
  return (
    <InputStyled
      placeholder="Filter contact numbers"
      type="text"
      name="filter"
      onChange={onChange}
      value={value}
    />
  );
};
