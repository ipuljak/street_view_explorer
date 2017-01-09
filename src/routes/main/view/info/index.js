import React from 'react';
import nl2br from 'react-newline-to-break';

/**
 *  Function to clean newlines and other special characters in some text
 */
const cleanText = text => {
  return text.replace(/\\n/g, '\n').replace(/\n\n/g, '\n').replace(/\\"/g, '"');
};

/**
 *  Functional component Info which displays an image and text related to the current view.
 */
const Info = props => {
  const {data} = props;

  return (
    <div className="about">
      <img
        className="aboutPic"
        src={data.image}
        role="presentation" />
      <p>
        {nl2br(cleanText(data.info))}
        <span>Read more <a target="_blank" href={data.link}>here</a>.</span>
      </p>
    </div>
  );
};

export default Info;