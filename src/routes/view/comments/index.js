import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions';
import CommentList from './comment_list';
import './comments.css';

class Comments extends Component {
    static propTypes = {
        getComments: PropTypes.func.isRequired,
    }

    // componentWillMount() {
    //     console.log("This is the current view", this.props);
    //     this.props.getComments(this.props.currentView._id);
    // }

    // componentWillReceiveProps(nextProps) {
    //     // Load in the first set of comments
    //     if (nextProps.currentView._id !== this.props.currentView._id) {
    //         this.props.getComments(nextProps.currentView._id);
    //     }
    //     //console.log("current comments", this.props.currentComments);
    // }

    submitComment() {
        console.log("run?");
        console.log(document.getElementById("comment").value);
    }

    renderCommentBox() {
        if (this.props.authenticated) {
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
        if (!this.props.currentComments) {
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