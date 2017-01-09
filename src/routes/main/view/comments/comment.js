import React from 'react';

/**
 *  Functional component which displays comments made on the given view
 */
const Comment = props => {
  const {comment} = props;

  return (
    <div className="panel panel-default post panel-shadow">
      <div className="panel-heading">
        <strong>{comment.username}</strong>
        <span className="text-muted"> commented on {comment.date}</span>
      </div>
      <div className="panel-body">
        <p>{comment.comment}</p>
      </div>
    </div>
  );
};

export default Comment;