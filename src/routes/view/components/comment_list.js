import React from 'react';
import Comment from './comment';

/**
 *  Functional component which gives the user the ability to see and and make
 *  comments as well as reply to others once authenticated.
 * 
 *  TO DO:
 *      - make design decision on how comments will work 
 *          i.e. reply nesting, sorting, etc.
 *      - complete comment functionality
 */
const CommentList = (props) => {
    return (
        <ul className="list-group">
            {props.comments.map(item =>
                <Comment comment={item} />
            )}
        </ul>
    )
};

export default CommentList;