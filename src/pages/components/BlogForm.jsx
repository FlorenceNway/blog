import React from 'react';
import { Button, Form} from 'semantic-ui-react';
import Field from '../components/fields/Field';
import styles from '../blogForm.module.scss';
import BackButton from './BackButton';

const BlogForm = (props) => {
  const { handleSubmit, onFormSubmit, pristine, submitting } = props;

  return (
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
  );
};

export default BlogForm;
