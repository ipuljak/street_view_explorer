import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions';

import CommentList from './comment_list';
import './comments.css';

class Comments extends Component {
    static propTypes = {
        getComments: PropTypes.func.isRequired
    }

    submitComment() {
        console.log("run?");
        console.log(document.getElementById("comment").value);
    }

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

    renderComments() {
        const {currentComments} = this.props;

        if (!currentComments || currentComments.length === 0) {
            return <div>No comments to display!</div>
        }

        return <CommentList comments={this.props.currentComments} />
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

const mapStateToProps = (state) => {
    return {
        currentComments: state.explorer.comments,
        authenticated: state.auth.authenticated
    };
};

export default connect(mapStateToProps, actions)(Comments);