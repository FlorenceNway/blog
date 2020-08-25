import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { push } from '../../services/router/routerAction';

const CustomButton = (props) => {
  return (
    <div>
      <Button color="orange" onClick={() => props.push('./blog/new')}>
        New blog
      </Button>
    </div>
  );
};
export default connect(null, { push })(CustomButton);
