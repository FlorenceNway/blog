import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Grid, Segment, Form } from 'semantic-ui-react';
import Layout from '../components/Layout';

const BlogNew = (props) => {
  const { handleSubmit } = props;
  // console.log('prop',props)

  const onFormSubmit = (data) => {
    console.log('here is data =>', data)
  }

  return (
    <Layout header="New Blog">
      <Grid>
        <Grid.Row>
          <Grid.Column computer={8} tablet={16} mobile={16}>
            <Segment padded>
              <Form onSubmit={handleSubmit(onFormSubmit)}>
                <Form.Field>
                  <label>Name</label>
                  <Field name="name" component="input" type="text" />
                </Form.Field>
                <Form.Field>
                  <label>Blog</label>
                  <Field name="blog" component="input" type="text" />
                </Form.Field>
                <Button primary>Save</Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};
export default reduxForm({ form: 'blogNewForm' })(BlogNew);
