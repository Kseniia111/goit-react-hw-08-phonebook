import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { Button, Input, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Label>
          User name:
          <Input name="name" type="text" />
        </Label>
        <Label>
          Email:
          <Input name="email" type="email" />
        </Label>
        <Label>
          Password:
          <Input name="password" type="password" />
        </Label>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
// import { Button, TextField, Box, Container, Typography } from '@mui/material';

// import { useState } from 'react';

// export function RegisterForm({ onData }) {
//   const initialState = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   const [state, setState] = useState({ ...initialState });
//   const { name, email, password } = state;

//   const handleChange = ({ target }) => {
//     const { name, value } = target;
//     setState(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     onData({ ...state });
//     setState({ ...initialState });
//   };

//   return (
//     <Container component="div" maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           backgroundColor: 'white',
//           padding: '20px',
//           boxShadow: ' rgb(33 33 33) 0px 2px 10px 1px',
//         }}
//       >
//         <Typography variant="h4">Sign Up</Typography>
//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             label="User name"
//             name="name"
//             autoComplete="name"
//             autoFocus
//             value={name}
//             variant="standard"
//             onChange={handleChange}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             type="email"
//             value={email}
//             variant="standard"
//             onChange={handleChange}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             autoComplete="current-password"
//             value={password}
//             variant="standard"
//             onChange={handleChange}
//           />

//           <Button type="submit" variant="outlined" size="small">
//             Sign Up
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// }
