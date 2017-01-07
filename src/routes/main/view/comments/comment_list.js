import React from 'react';

import Comment from './comment';

/**
 *  Functional component which displays a list of Comment components
 */
const CommentList = props => {
  return (
    <div>
      {props.comments.map(item =>
        <Comment key={item._id} comment={item} />
      )}
    </div>
  );
};

export default CommentList;