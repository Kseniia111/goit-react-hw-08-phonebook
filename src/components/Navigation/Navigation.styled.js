import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #2196f3;
  }
`;
// import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

// export const NavContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// export const NavStyled = styled(NavLink)`
//   text-decoration: none;
//   font-size: 22px;
//   font-weight: 700;
//   margin-right: 20px;
//   color: #1976d2;
//   &.active {
//     color: black;
//   }
// `;
