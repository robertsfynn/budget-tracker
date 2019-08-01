import React, { useState, useEffect, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
  FirebaseContext,
} from 'components';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  }, [Firebase, history]);

  return (
    <Container>
      <Header>
        Budget Tracker
        <Link to="/register">
          <StyledAuthText>Sign Up</StyledAuthText>
        </Link>
      </Header>
      <AuthImage />
      <Title margin>Login to your account</Title>
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
            <Button type="arrow" loading={isLoading} />
          </Column>
        </Row>
      </form>
    </Container>
  );
};

LoginForm.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(LoginForm);
