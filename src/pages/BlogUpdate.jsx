import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Grid, Segment } from 'semantic-ui-react';
import Layout from '../components/Layout';
import BlogForm from './components/BlogForm';
import { getOneBlog, updateBlog } from '../services/blogAction';
import { goBack } from '../services/router/routerAction';

const BlogUpdate = (props) => {
  const { getOneBlog: getBlog } = props;
  const { id } = props.match.params;

  useEffect(() => {
    // console.log('i', id);
    getBlog(id);
  }, [getBlog]);

  const onFormSubmit = (data) => {
    props.updateBlog(id, data, props.goBack());
  };

  return (
    <Layout header="Update Blog">
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

const mapStateToProps = ({ blogReducer }) => {
  // console.log(blogReducer);
  return {
    initialValues: blogReducer?.blogs,
  };
};

export default connect(mapStateToProps, { getOneBlog, updateBlog, goBack })(
  reduxForm({ form: 'updateForm', enableReinitialize: true })(BlogUpdate)
);
