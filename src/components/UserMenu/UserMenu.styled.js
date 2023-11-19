import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  font-weight: 700;
`;

export const Button = styled.button`
  background-color: #fff;
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  &:hover {
    background-color: gray;
    color: #fff;
  }
`;

export const ButtonText = styled.span`
  font-weight: 500;
`;
// import styled from 'styled-components';

// export const UserNav = styled.div`
//   display: flex;
//   align-items: center;
// `;

// export const StyledName = styled.span`
//   margin-right: 15px;
//   font-size: 22px;
//   color: #1976d2;
// `;
