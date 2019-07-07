import React, { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import FirebaseContext from '../../../Firebase/FirebaseContext';
import {
  Header,
  Title,
  Label,
  Input,
  AuthImage,
  Button,
  Container,
  Row,
  Column,
} from '../..';

const LoginForm = ({ history }) => {
  const [values, setValues] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const Firebase = useContext(FirebaseContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await Firebase.login(values.email, values.password);
    history.push('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    if (Firebase.getCurrentUser()) history.push('/');
  }, []);

  return (
    <Container>
      <Header>Budget Tracker</Header>
      <AuthImage />
      <Title>Login to your account</Title>
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

export default withRouter(LoginForm);
