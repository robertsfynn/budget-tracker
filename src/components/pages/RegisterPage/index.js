import React, { useState, useContext } from 'react';
import {
  FirebaseContext,
  Container,
  Row,
  Column,
  Header,
  Title,
  Label,
  Input,
  AuthImage,
  Button,
} from 'components';

const RegisterForm = () => {
  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const Firebase = useContext(FirebaseContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await Firebase.register(values.name, values.email, values.password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Container>
      <Header>Budget Tracker</Header>
      <AuthImage />
      <Title>Sign up To Budget tracker</Title>
      <Row>
        <Column>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="name@domain.com"
            required
          />
        </Column>
      </Row>
      <form onSubmit={handleSubmit}>
        <Row center>
          <Column size="70%">
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="************"
              required
            />
          </Column>
          <Column offset="10%" size="20%">
            <Button type="arrow" />
          </Column>
        </Row>
      </form>
    </Container>
  );
};

export default RegisterForm;
