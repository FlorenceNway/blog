/* eslint-disable no-console */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Grid, Segment, Form, Input } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { required } from '../utils/validation';
import BackButton from './components/BackButton';

const BlogNew = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  // console.log('prop',props)

  const onFormSubmit = (data) => {
    console.log('here is data =>', data);
  };

  const renderField = (fields) => {
    const {
      label,
      input,
      meta: { touched, error },
    } = fields;
    // const {touched,error} = meta
    console.log('meta', fields.meta);
    return (
      <Form.Field error={!!(touched && error)}>
        {/* touched && error? true: false or touched && error && true */}
        <label>
          {label}
          <small>{touched && error ? `* ( ${error} )` : undefined}</small>
        </label>
        <Input type="text" {...input} />
        {/* pass all input function */}
      </Form.Field>
    );
  };

  const validate = [required];

  return (
    <Layout header="New Blog">
      <Grid>
        <Grid.Row>
          <Grid.Column computer={8} tablet={16} mobile={16}>
            <Segment padded>
              <Form onSubmit={handleSubmit(onFormSubmit)}>
                <Field
                  label="Name"
                  name="name"
                  component={renderField}
                  validate={validate}
                />
                <Field label="Blog" name="blog" component={renderField} />
                {/* <Form.Field>
                  <label>Name</label>
                  <Field name="name" component="input" type="text" />
                </Form.Field> */}
                {/* <Form.Field>
                  <label>Blog</label>
                  <Field name="blog" component="input" type="text" />
                </Form.Field> */}
                <Button primary disabled={pristine || submitting}>
                  Save
                </Button>
                <BackButton />
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};
export default reduxForm({ form: 'blogNewForm' })(BlogNew);
