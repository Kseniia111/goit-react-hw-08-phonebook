import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  alignitems: center;
  gap: 4px;
`;

export const LogoLink = styled.div`
  color: rgb(190 127 175);
  cursor: unset;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding: 8px;
  text-shadow: rgb(255 255 255 / 67%) 0px 0px 1px, rgb(0 0 0) 0px 0px 1px,
    rgb(255 255 255 / 0%) 0px 0px 8px, rgb(17 0 255 / 78%) 0px 0px 12px,
    rgb(199 0 255 / 0%) 0px 0px 82px, rgb(197 0 255) 0px 0px 72px,
    rgb(226 0 255 / 0%) 0px 0px 102px, rgb(255 0 233) 0px 0px 151px;
`;

export const HomeLink = styled(NavLink)`
  height: 32px;
  margin: 0;
  line-height: 43px;
  padding: 5px 8px;

  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;

  &:hover {
    color: #fff;
    background-color: #333;
    box-shadow: inset 0px 2px 4px rgb(244 0 255 / 30%),
      inset 0px 4px 8px rgb(127 0 255 / 30%),
      inset 0px 8px 16px rgb(255 0 240 / 30%);
    transition: 0.2s;
    transform: translateY(2px);
  }
`;

export const ContactsLink = styled(NavLink)`
  height: 32px;
  margin: 0;
  line-height: 43px;
  padding: 5px 8px;

  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;

  &:hover {
    color: #fff;
    background-color: #333;
    box-shadow: inset 0px 2px 4px rgb(244 0 255 / 30%),
      inset 0px 4px 8px rgb(127 0 255 / 30%),
      inset 0px 8px 16px rgb(255 0 240 / 30%);
    transition: 0.2s;
    transform: translateY(2px);
  }
`;
