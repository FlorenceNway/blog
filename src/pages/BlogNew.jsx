/* eslint-disable no-console */
import React from 'react';
import { useDispatch } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Grid, Segment } from 'semantic-ui-react';
import Layout from '../components/Layout';
// import BackButton from './components/BackButton';
// import Field from './components/fields/Field';
import { createBlog } from '../services/blogAction';
// import styles from './blogForm.module.scss';
import BlogForm from './components/BlogForm';
import { goBack } from '../services/router/routerAction';

const BlogNew = (props) => {
  const dispatch = useDispatch();
  // const { handleSubmit, pristine, submitting } = props;
  // console.log('prop',props)

  const onFormSubmit = (data) => {
    // console.log('here is data =>', data);
    dispatch(
      createBlog(data, () => {
        dispatch(goBack());
      })
    );
    props.reset(); // from redux form
  };

  return (
    <Layout header="New Blog">
      <Grid>
        <Grid.Row>
          <Grid.Column computer={8} tablet={16} mobile={16}>
            <Segment padded>
              <BlogForm {...props} onFormSubmit={onFormSubmit} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};
export default reduxForm({
  form: 'blogNewForm',
  // initialValues: { name: 'hello' },
})(BlogNew);
