import React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxField } from 'redux-form';
import { Form, Input } from 'semantic-ui-react';
import { required } from '../../../utils/validation';

const renderField = (fields) => {
  const {
    type,
    label,
    input,
    meta: { touched, error },
  } = fields;

  return (
    <Form.Field error={!!(touched && error)}>
      {/* touched && error? true: false or touched && error && true */}
      <label>
        {label}
        <small>{touched && error ? `* ( ${error} )` : undefined}</small>
      </label>
      <Input type={type} {...input} />
      {/* pass all input function */}
    </Form.Field>
  );
};

const Field = (props) => {
  const { name, label, isRequired, type } = props;
  const validate = [];

  if (isRequired) {
    validate.push(required);
  }

  return (
    <ReduxField
      label={label}
      name={name}
      type={type}
      component={renderField}
      validate={validate} // for redux-form field validation to use meta:touch,error
    />
  );
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  type: PropTypes.string,
};

Field.defaultProps = {
  isRequired: false,
  type: 'text',
};

export default Field;
