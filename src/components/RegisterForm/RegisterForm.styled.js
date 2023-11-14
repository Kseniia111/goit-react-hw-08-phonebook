import styled from 'styled-components';

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 12px;

  margin-bottom: 36px;
  padding: 15px;

  font-size: 20px;
  width: 360px;
  height: 192px;
  border-radius: 12px;
  box-shadow: 0px 8px 16px rgb(255 72 0 / 69%), 0px 4px 8px rgb(0 52 255 / 82%),
    0px 4px 8px rgb(0 204 255 / 0%), 0px 8px 16px rgb(0 223 255);
`;

export const RegisterLabel = styled.label`
  display: flex;
  justify-content: space-between;

  margin-bottom: 12px;
  &:not-last-of-type {
    gap: 22px;
  }
`;

export const RegisterInput = styled.input`
  width: 240px;
  height: 26px;
  color: #ffffff;
  background: #0f0f0f;
  border: none;
  border-radius: 5px;
  padding-left: 12px;
`;

export const RegisterSubmitButton = styled.button`
  width: 360px;
  height: 36px;
  color: #fff;
  background: #000;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #222;
    box-shadow: inset 0px 2px 4px rgb(244 0 255 / 30%),
      inset 0px 4px 8px rgb(127 0 255 / 30%),
      inset 0px 8px 16px rgb(255 0 240 / 30%);
    transition: 0.2s;
    transform: translateY(2px);
  }
`;
