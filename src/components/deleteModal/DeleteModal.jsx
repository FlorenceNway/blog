import React from 'react';
import { Modal, Header, Button } from 'semantic-ui-react';

const DeleteModal = (props) => {
  const { isOpen, onClose, onDelete, isPending } = props;
  return (
    <Modal onClose={onClose} open={isOpen} size="mini">
      <Modal.Content>
        <Modal.Description>
          <Header>Delete</Header>
          <p>Are you sure? Do you want to delete?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={onClose}>
          No
        </Button>
        <Button
          color="green"
          onClick={onDelete}
          disabled={isPending}
          loading={isPending}
        >
          Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
export default DeleteModal;
