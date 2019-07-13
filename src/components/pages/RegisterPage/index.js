import React, { useState, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
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

const StyledAuthText = styled.p`
  font-family: GTWalsheimPro;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #ff3378;
  float: right;
  margin: 0;
  padding-right: 1rem;
`;

const RegisterForm = ({ history }) => {
  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const Firebase = useContext(FirebaseContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await Firebase.register(values.name, values.email, values.password);
    history.push('/');
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
      <Header>
        Budget Tracker
        <Link to="/login">
          <StyledAuthText>Login</StyledAuthText>
        </Link>
      </Header>
      <AuthImage />
      <Title margin>Sign up To Budget tracker</Title>
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

export default withRouter(RegisterForm);
