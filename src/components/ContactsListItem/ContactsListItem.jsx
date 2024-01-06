import React from 'react';
import {
  DivStyled,
  ItemStyled,
  LinkStyled,
  SubtitleStyled,
  TextStyled,
} from './ContactsListItem.styled';
import { FiPhone } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

export const ContactsListItem = ({ name, number, id, deleteContact }) => {
  return (
    <ItemStyled>
      <FiPhone color="#ffffff" size="32px" title="phone icon" />
      <DivStyled>
        <SubtitleStyled>{name} </SubtitleStyled>
        <TextStyled>{number}</TextStyled>
      </DivStyled>
      <LinkStyled type="button" onClick={() => deleteContact(id)}>
        <RiDeleteBin5Line />
        Delete
      </LinkStyled>
    </ItemStyled>
  );
};
