import { ContactsListItem } from 'components';
import React from 'react';
import { ListStyled } from './ContactsList.styled';

export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ListStyled>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsListItem
            key={id}
            name={name}
            number={number}
            id={id}
            deleteContact={deleteContact}
          />
        );
      })}
    </ListStyled>
  );
};
