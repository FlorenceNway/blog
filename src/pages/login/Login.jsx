import React from 'react';
import { useDispatch } from 'react-redux';
import { reduxForm } from 'redux-form';
import { login } from '../../services/auth/authAction';
import { push } from '../../services/router/routerAction';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import Field from '../components/fields/Field';
import styles from './Login.module.scss';

const Login = (props) => {
  const dispatch = useDispatch();
  const { handleSubmit } = props;

  const onFormSubmit = (data) => {
    const parsedData = {
      ...data,
      returnSecureToken: true,
    };

    dispatch(
      login(parsedData, () => {
        dispatch(push('/blogs'));
      })
    );
  };

  return (
    <Grid centered className={styles.login}>
      <Grid.Row>
        <Grid.Column computer={6}>
          <Segment padded="very">
            <Form onSubmit={handleSubmit(onFormSubmit)}>
              <Field label="Email" name="email" isRequired />
              <Field
                label="Password"
                name="password"
                isRequired
                type="password"
              />
              <Button primary floated="right" circular>
                Login
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default reduxForm({ form: 'login' })(Login);
