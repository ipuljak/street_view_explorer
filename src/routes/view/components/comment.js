import React from 'react';

/**
 *  Functional component which gives the user the ability to see and and make
 *  comments as well as reply to others once authenticated.
 * 
 *  TO DO:
 *      - make design decision on how comments will work 
 *          i.e. reply nesting, sorting, etc.
 *      - complete comment functionality
 */
const Comment = (props) => {
    return (
        <li className="list-group=item">{props.comment}</li>
    );
};

export default Comment;