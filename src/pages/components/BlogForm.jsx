import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import Field from './fields/Field';
import styles from '../blogForm.module.scss';
import BackButton from './BackButton';

const BlogForm = (props) => {
  const blogReducer = useSelector((state) => state.blogReducer);
  const isPending = blogReducer.isPending;
  const { handleSubmit, onFormSubmit, pristine, submitting, reset } = props;
  console.log('pending', isPending);
  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
      <Field label="Name" name="name" isRequired />
      <Field label="Title" name="title" isRequired />
      <Field label="Description" name="description" />
      <div className={styles.buttonRow}>
        <BackButton secondary />

        <div>
          <Button
            primary
            disabled={pristine || submitting || isPending}
            loading={isPending}
          >
            {/* use redux Form, only if it has content, the buttons will be enable */}
            Save
          </Button>
          <Button
            type="button"
            color="red"
            onClick={() => reset()}
            disabled={pristine || submitting}
          >
            Reset
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default BlogForm;
