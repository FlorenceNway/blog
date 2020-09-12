import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Grid, Segment } from 'semantic-ui-react';
import Layout from '../components/Layout';
import BlogForm from './components/BlogForm';
import { getOneBlog } from '../services/blogAction';

const BlogUpdate = (props) => {
  const { getOneBlog: getBlog } = props;

  useEffect(() => {
    const { id } = props.match.params;
    // console.log('i', id);
    getBlog(id);
  }, [getBlog]);

  const onFormSubmit = () => {};

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
export default connect(null, { getOneBlog })(
  reduxForm({ form: 'updateForm' })(BlogUpdate)
);
