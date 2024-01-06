import styled from '@emotion/styled';

export const FormStyled = styled.form``;

export const InputStyled = styled.input`
  background-color: rgba(142, 142, 142, 0.5);
  border: none;
  display: block;
  width: 100%;
  margin-bottom: 20px;
  height: 60px;
  outline: none;
  font-size: 24px;
  font-weight: 400;
  color: rgba(225, 225, 225, 0.8);
  padding: 0 32px;
  &:focus {
    background-color: rgba(183, 183, 183, 0.5);
  }
  &::placeholder {
    font-size: 24px;
    font-weight: 500;
    color: rgba(225, 225, 225, 0.4);
  }
`;

export const BtnStyled = styled.button`
  border: none;
  padding: 12px 32px;
  outline: none;
  font-size: 24px;
  font-weight: 400;
  background-color: rgba(183, 183, 183, 0.6);
  color: rgba(225, 225, 225, 0.8);
  margin-bottom: 32px;
  &:focus,
  &:hover {
    color: #ffffff;
    background-color: rgba(200, 200, 200, 0.6);
  }
`;
