import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

/**
 *  Comment class component 
 *    -> Displays comments made on the given view
 */
class Comment extends Component {
  // Delete a comment from the view
  deleteComment(id) {
    const { comment, getComments } = this.props;
    const VIEW_ID = comment.view_id;
    const API_URL = `https://streetviewtourist.com/api/street_view/comments/delete_comment?id=${id}`;

    // DELETE the comment from the database
    axios.delete(API_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        // Retrieve the updated comments
        getComments(VIEW_ID);
      });
  }

  // Replace the ISOdate with a nicely formatted date
  cleanDate(date) {
    return moment(this.props.comment.date).format("dddd, MMMM Do YYYY, h:mm:ss A");
  }

  // Show the delete button if the user is authenticated and owns the comment
  showDeleteButton() {
    const {authenticated, comment} = this.props;
    let name = JSON.parse(localStorage.state).auth.username;

    if (authenticated && name === comment.username) {
      return (
        <button
          className="btn btn-primary"
          id="delete-button"
          onClick={() => this.deleteComment(comment._id)} >
          <i className="fa fa-trash-o" /> Delete
        </button>
      );
    }
  }

  render() {
    const {comment} = this.props;

    return (
      <div className="panel panel-default post panel-shadow">
        <div className="panel-heading">
          <strong>{comment.username}</strong>
          {this.showDeleteButton()}
          <span className="newline text-muted"> commented on {this.cleanDate(comment.date)}</span>
        </div>
        <div className="panel-body">
          <p>{comment.comment}</p>
        </div>
      </div>
    );
  };
}

export default Comment;