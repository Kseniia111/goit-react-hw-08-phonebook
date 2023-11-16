import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  border: none;
  outline: 0;
  background-color: #fff;
  box-shadow: 0 1px 6px 0 #20212447;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 5px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid;
  :hover {
    background-color: #e0e0e0;
  }
`;

export const Text = styled.p`
  /* padding: 10px 20px; */
  margin-bottom: 15px;
`;
// import styled from 'styled-components';

// export const LoginContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const LogInForm = styled.form`
//   display: flex;
//   flex-direction: column;

//   gap: 12px;

//   margin-bottom: 36px;
//   padding: 15px;

//   font-size: 20px;
//   width: 360px;
//   height: 156px;
//   border-radius: 12px;
//   box-shadow: 0px 8px 16px rgb(255 72 0 / 69%), 0px 4px 8px rgb(0 52 255 / 82%),
//     0px 4px 8px rgb(0 204 255 / 0%), 0px 8px 16px rgb(0 223 255);
// `;

// export const LoginLabel = styled.label`
//   display: flex;
//   justify-content: space-between;

//   margin-bottom: 12px;
//   &:not-last-of-type {
//     gap: 22px;
//   }
// `;

// export const LoginInput = styled.input`
//   width: 240px;
//   height: 26px;
//   border: none;
//   border-radius: 5px;
//   padding-left: 12px;
// `;

// export const LoginSubmitButton = styled.button`
//   width: 360px;
//   height: 36px;
//   color: #fff;
//   background: #000;
//   border-radius: 5px;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     color: #fff;
//     background-color: #222;
//     box-shadow: inset 0px 2px 4px rgb(244 0 255 / 30%),
//       inset 0px 4px 8px rgb(127 0 255 / 30%),
//       inset 0px 8px 16px rgb(255 0 240 / 30%);
//     transition: 0.2s;
//     transform: translateY(2px);
//   }
// `;
