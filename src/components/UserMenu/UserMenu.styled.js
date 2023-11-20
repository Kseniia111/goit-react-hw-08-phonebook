import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  font-weight: 700;
  color: #1976d2;
`;

export const Button = styled.button`
  background-color: #fff;
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  &:hover {
    background-color: #1976d2;
    color: #fff;
  }
`;

export const ButtonText = styled.span`
  font-weight: 500;
`;
