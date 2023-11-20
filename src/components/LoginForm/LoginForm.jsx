// import { useDispatch } from 'react-redux';
// import { Button, Input, Label } from './LoginForm.styled';
// import { logIn } from 'redux/auth/auth-operations';

// export const LoginForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Label>
//           Email:
//           <Input name="email" type="email" />
//         </Label>
//         <Label>
//           Password:
//           <Input name="password" type="password" />
//         </Label>
//         <Button type="submit">Log in</Button>
//       </form>
//     </div>
//   );
// };
import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField, Box, Container, Typography } from '@mui/material';

import { useState } from 'react';

export function LoginForm({ onData }) {
  const initialState = {
    email: '',
    password: '',
  };

  const [state, setState] = useState({ ...initialState });
  const { email, password } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onData({ ...state });
    setState({ ...initialState });
  };

  return (
    <Container component="div" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: '20px',
          boxShadow: ' rgb(33 33 33) 0px 2px 10px 1px',
        }}
      >
        <Typography variant="h4">Log In</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            autoFocus
            label="Email Address"
            name="email"
            autoComplete="email"
            type="email"
            value={email}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            variant="standard"
            onChange={handleChange}
          />

          <Button type="submit" variant="contained" size="small">
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import { TextField, Box, Container, Typography } from '@mui/material';

// import { useState } from 'react';

// export function LoginForm({ onData }) {
//   const initialState = {
//     email: '',
//     password: '',
//   };

//   const [state, setState] = useState({ ...initialState });
//   const { email, password } = state;

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
//         <Typography variant="h4">Log In</Typography>
//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             autoFocus
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

//           <Button type="submit" variant="contained" size="small">
//             Log In
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// }
