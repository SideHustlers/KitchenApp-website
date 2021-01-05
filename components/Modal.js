import React from 'react';
import { Modal } from 'antd';

const AllListsModal = ({title, content, isVisible, onOk, onCancel}) => {
  return (
    <Modal
      title={title}
      visible={isVisible}
      onOk={onOk}
      onCancel={onCancel}
      closable={true}
      destroyOnClose={true}
      okButtonProps={{style: {
        background: 'red',
        borderColor: 'red'
      }}}
      cancelButtonProps={{style: {
        borderColor: 'red',
        color: 'red'
      }}}
    >
      {content}
    </Modal>
  )
};

export default AllListsModal;