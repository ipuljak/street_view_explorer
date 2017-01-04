import React from 'react';

/**
 *  Component to display a view's title
 */
const Title = props => {
  // If there are no views to render, show a loading message
  if (!props.cur) {
    if (!props.all) {
      return <h2>Loading...</h2>
    }
    return <h2>There are no views to display.</h2>
  }
  // Otherwise show the title of the view
  return <h2>{props.cur.name}</h2>
}

export default Title;