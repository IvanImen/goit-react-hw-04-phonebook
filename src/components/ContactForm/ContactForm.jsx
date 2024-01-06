import React, { useState } from 'react';
import { BtnStyled, FormStyled, InputStyled } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value.trim());
        break;
      case 'number':
        setNumber(value.trim());
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled
        type="text"
        name="name"
        onChange={handleChange}
        value={name}
        required
        placeholder="Enter contact name"
      />
      <InputStyled
        type="tel"
        name="number"
        onChange={handleChange}
        value={number}
        required
        placeholder="Enter contact number"
      />
      <BtnStyled type="submit">Add contact</BtnStyled>
    </FormStyled>
  );
};
