import styled from '@emotion/styled';

export const ItemStyled = styled.li`
  background-color: rgba(142, 142, 142, 0.5);
  padding: 12px 32px;
  display: flex;
  align-items: center;
  &:hover,
  &:focus {
    background-color: rgba(183, 183, 183, 0.5);
  }
`;

export const DivStyled = styled.div`
  margin-left: 20px;
`;

export const SubtitleStyled = styled.h3`
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
`;

export const TextStyled = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  margin-top: 12px;
`;

export const LinkStyled = styled.button`
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;
  &:hover,
  &:focus {
    color: rgba(255, 46, 0, 0.7);
    fill: rgba(255, 46, 0, 0.7);
  }
`;
