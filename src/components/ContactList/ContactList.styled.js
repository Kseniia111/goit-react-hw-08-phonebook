import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 15px;
`;

export const DeleteButton = styled.button`
  background-color: #fff;
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: gray;
    color: #fff;
  }
`;
// import styled from 'styled-components';

// export const ContactContainer = styled.ul`
//   margin-top: 25px;
// `;

// export const ContactEl = styled.li`
//   margin-left: 15px;
//   margin-top: 10px;
// `;
