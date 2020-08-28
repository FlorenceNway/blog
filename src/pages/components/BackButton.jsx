import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { goBack } from '../../services/router/routerAction';

const BackButton = (props) => {
  return (
    <Button color="grey" onClick={() => props.goBack()}>
      Back
    </Button>
  );
};
export default connect(null, { goBack })(BackButton);
