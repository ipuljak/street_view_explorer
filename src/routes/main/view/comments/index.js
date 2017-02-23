import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actions from '../../../../actions';
import CommentList from './comment_list';

import './comments.css';

/**
 *  Comments class container 
 *    -> Responsible for rendering the appropriate logic for comments for each view
 */
class Comments extends Component {
  static propTypes = {
    getComments: PropTypes.func.isRequired
  }

  // Submit a comment to the view
  submitComment() {
    const {currentView, getComments} = this.props;

    const data = {
      comment: document.getElementById("comment").value
    };

    const VIEW_ID = currentView._id;
    const API_URL = `https://streetviewtourist.com/api/street_view/comments/post_comment?id=${VIEW_ID}`;

    // POST the new comment to the database
    axios.post(API_URL, data, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        // Clear the textbox and retrieve the updated comments
        document.getElementById("comment").value = '';
        getComments(VIEW_ID);
      });
  }

  // Show the comment box if the user is authenticated
  renderCommentBox() {
    const {authenticated} = this.props;

    if (authenticated) {
      return (
        <div className="form-group">
          <textarea className="form-control" rows="5" id="comment" placeholder="Write a comment.." />
          <button onClick={() => this.submitComment()} className="btn btn-primary">Send</button>
        </div>
      );

    } else {
      return <p>Sign in to post a comment!</p>
    }
  }

  // Show the comments for the given view
  renderComments() {
    const {currentComments, getComments, authenticated} = this.props;

    if (!currentComments || currentComments.length === 0) {
      return <div>No comments to display!</div>
    }
    return (
      <CommentList
        comments={currentComments}
        getComments={getComments}
        authenticated={authenticated} />
    );
  }

  render() {
    return (
      <div>
        {this.renderCommentBox()}
        <hr />
        {this.renderComments()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentComments: state.streetView.comments,
    currentView: state.streetView.view,
    authenticated: state.auth.authenticated
  };
};

export default connect(mapStateToProps, actions)(Comments);