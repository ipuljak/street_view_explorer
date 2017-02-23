import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';

/**
 *  FavoriteButton class container 
 *    -> Responsible for displaying the favorite button
 */
class FavoriteButton extends Component {
  // Check that the user is authenticated and grab their favorites
  componentWillMount() {
    const {favorites, username, authenticated} = this.props;
    let name = '';

    if (!favorites && authenticated) {
      // If the username is not in the state, grab it from local storage
      if (!username) {
        name = JSON.parse(localStorage.state).auth.username;
      } else {
        name = username;
      }
      // Fetch the favorites
      this.props.getFavorites(name);
    }
  }

  // Let the user favorite the view
  favorite() {
    this.props.favorite(this.props.currentView._id);
  }

  // Let the user unfavorite the view
  unfavorite() {
    this.props.unfavorite(this.props.currentView._id);
  }

  // Show the appropriate button based on whether the user is logged in or not
  showButton() {
    const {currentView, favorites} = this.props;

    if (!favorites) {
      return null;
    }

    if (favorites.indexOf(currentView._id) > -1) {
      return (
        <button
          onClick={() => { this.unfavorite() } }
          className="btn btn-primary"
          id="fav-button">
          <span className="fa fa-heart"></span>
          Unfavorite
        </button>
      );
    } else {
      return (
        <button
          onClick={() => { this.favorite() } }
          className="btn btn-primary"
          id="fav-button">
          <span className="fa fa-heart"></span>
          Favorite
        </button>
      );
    }
  }

  render() {
    if (this.props.authenticated) {
      return (
        <div>
          {this.showButton()}
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    currentView: state.streetView.view,
    favorites: state.streetView.favorites,
    authenticated: state.auth.authenticated,
    username: state.auth.username
  };
};

export default connect(mapStateToProps, actions)(FavoriteButton);