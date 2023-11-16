import { useDispatch, useSelector } from 'react-redux';

import { register } from 'redux/auth/auth-operations';
import { Button, Form, Input } from 'antd';

const RegisterForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.auth);

  const onFinish = values => {
    const { name, email, password, confirm } = values;

    if (password === confirm) {
      dispatch(register({ name, email, password }));
      !isLoading && !error && form.resetFields();
    }
  };

  const formItemLayout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 4,
      },
    },
  };
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      size={'default'}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      style={{
        width: 300,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('The new password that you entered do not match!')
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="name"
        label="Name"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
// import { useDispatch, useSelector } from 'react-redux';

// import { register } from 'redux/auth/auth-operations';
// import { Button, Form, Input } from 'antd';

// const RegisterForm = () => {
//   const [form] = Form.useForm();
//   const dispatch = useDispatch();
//   const { isLoading, error } = useSelector(state => state.auth);

//   const onFinish = values => {
//     const { name, email, password, confirm } = values;

//     if (password === confirm) {
//       dispatch(register({ name, email, password }));
//       !isLoading && !error && form.resetFields();
//     }
//   };

//   const formItemLayout = {
//     labelCol: {
//       span: 24,
//     },
//     wrapperCol: {
//       span: 24,
//     },
//   };

//   const tailFormItemLayout = {
//     wrapperCol: {
//       xs: {
//         span: 24,
//         offset: 0,
//       },
//       sm: {
//         span: 16,
//         offset: 4,
//       },
//     },
//   };
//   return (
//     <Form
//       {...formItemLayout}
//       form={form}
//       name="register"
//       onFinish={onFinish}
//       size={'default'}
//       initialValues={{
//         residence: ['zhejiang', 'hangzhou', 'xihu'],
//         prefix: '86',
//       }}
//       style={{
//         width: 300,
//       }}
//       scrollToFirstError
//     >
//       <Form.Item
//         name="email"
//         label="E-mail"
//         rules={[
//           {
//             type: 'email',
//             message: 'The input is not valid E-mail!',
//           },
//           {
//             required: true,
//             message: 'Please input your E-mail!',
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         name="password"
//         label="Password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your password!',
//           },
//         ]}
//         hasFeedback
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item
//         name="confirm"
//         label="Confirm Password"
//         dependencies={['password']}
//         hasFeedback
//         rules={[
//           {
//             required: true,
//             message: 'Please confirm your password!',
//           },
//           ({ getFieldValue }) => ({
//             validator(_, value) {
//               if (!value || getFieldValue('password') === value) {
//                 return Promise.resolve();
//               }
//               return Promise.reject(
//                 new Error('The new password that you entered do not match!')
//               );
//             },
//           }),
//         ]}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item
//         name="name"
//         label="Name"
//         tooltip="What do you want others to call you?"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your name!',
//             whitespace: true,
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item {...tailFormItemLayout}>
//         <Button type="primary" htmlType="submit">
//           Register
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default RegisterForm;
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/auth-operations';
// import {
//   RegistrationForm,
//   RegisterLabel,
//   RegisterInput,
//   RegisterSubmitButton,
//   RegisterContainer,
// } from './RegisterForm.styled';

// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <RegisterContainer>
//       <RegistrationForm onSubmit={handleSubmit} autoComplete="off">
//         <RegisterLabel>
//           Username
//           <RegisterInput
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             autoComplete="off"
//           />
//         </RegisterLabel>
//         <RegisterLabel>
//           Email
//           <RegisterInput
//             autoComplete="off"
//             type="email"
//             name="email"
//             placeholder="Enter email"
//           />
//         </RegisterLabel>
//         <RegisterLabel>
//           Password
//           <RegisterInput
//             autoComplete="off"
//             type="password"
//             name="password"
//             placeholder="Enter password"
//           />
//         </RegisterLabel>
//         <RegisterSubmitButton type="submit">Register</RegisterSubmitButton>
//       </RegistrationForm>
//     </RegisterContainer>
//   );
// };
