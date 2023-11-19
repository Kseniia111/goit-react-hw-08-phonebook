import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

// import styled from 'styled-components';

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   height: 100vh;
//   text-align: center;
// `;
