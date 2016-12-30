import React from 'react';

/**
 *  Functional component which displays comments made on the given view.
 */
const Comment = (props) => {
    return (
        <div className="panel panel-default post panel-shadow">
            <div className="panel-heading">
                <strong>{props.comment.username}</strong>
                <span className="text-muted"> commented on {props.comment.date}</span>
            </div>
            <div className="panel-body">
                <p>{props.comment.comment}</p>
            </div>
        </div>
    );
};

export default Comment;