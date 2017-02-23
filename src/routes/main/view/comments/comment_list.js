import React from 'react';

import Comment from './comment';

/**
 *  CommentList functional component 
 *    -> Displays a list of Comment components
 */
const CommentList = props => {
  return (
    <div>
      {props.comments.map(item =>
        <Comment
          key={item._id}
          comment={item}
          getComments={props.getComments}
          authenticated={props.authenticated} />
      )}
    </div>
  );
};

export default CommentList;