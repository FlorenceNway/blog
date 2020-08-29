/* eslint-disable no-console */
import React from 'react';
import { useDispatch } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Button, Grid, Segment, Form } from 'semantic-ui-react';
import Layout from '../components/Layout';
import BackButton from './components/BackButton';
import Field from './components/fields/Field';
import { createBlog } from '../services/blogAction';
import styles from './blogForm.module.scss';

const BlogNew = (props) => {
  const dispatch = useDispatch();
  const { handleSubmit, pristine, submitting } = props;
  // console.log('prop',props)

  const onFormSubmit = (data) => {
    // console.log('here is data =>', data);
    dispatch(createBlog(data));
    props.reset(); // from redux form
  };

  return (
    <Layout header="New Blog">
      <Grid>
        <Grid.Row>
          <Grid.Column computer={8} tablet={16} mobile={16}>
            <Segment padded>
              <Form onSubmit={handleSubmit(onFormSubmit)}>
                <Field label="Name" name="name" isRequired />
                <Field label="Title" name="title" isRequired />
                <Field label="Description" name="description" />
                <div className={styles.buttonRow}>
                  <BackButton secondary />
                  <div>
                    <Button primary disabled={pristine || submitting}>
                      {/* use redux Form, only if it has content, the buttons will be enable */}
                      Save
                    </Button>
                    <Button color="red" onClick={() => props.reset()}>
                      Reset
                    </Button>
                  </div>
                </div>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};
export default reduxForm({ form: 'blogNewForm' })(BlogNew);
