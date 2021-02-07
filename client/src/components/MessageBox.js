import React from 'react';

const MessageBox = (props) => {
  return (
    <div className={`alert alert-${props.type} || 'info'`}>
      {props.children}
    </div>
  );
}
 
export default MessageBox;