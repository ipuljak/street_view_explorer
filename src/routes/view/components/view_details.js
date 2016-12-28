import React from 'react';
import nl2br from 'react-newline-to-break'; 
import Street from './street_view_component';
import Comments from './comments_component';

/**
 *  Function which cleans some of the special characters in the HTML, including
 *  newlines and quotes.
 * 
 *  TO DO:
 *      - refactor to look nicer
 *      - make this along with capitalization a global function to tidy up code
 *      
 */
const cleanText = (text) => {
    return text.replace(/\\n/g, '\n').replace(/\n\n/g, '\n').replace(/\\"/g, '"');
}

/**
 *  Functional component which renders the entire view for a given location. 
 *  Renders it's title, a street view window component, an image, it's 
 *  information, and finally a comment box.
 * 
 *  TO DO:
 *      - implement a comment system
 *      - implement a like/dislike rating system
 *      - implement a favouriting system
 */

const ViewDetails = (props) => {
    // Do not load anything in if there are no views
    if (!props.cur) {
        return (
            <div>There is no view to display.</div>
        );
    }

    const info = cleanText(props.cur.data.info);

    return (
        <div className="view">
            <Street view={props.cur.view} />
            <hr />
            <div className="about">
                <img 
                    className="aboutPic" 
                    src={props.cur.data.image} 
                    role="presentation" />
                <p> 
                    {nl2br(info)} 
                    <span>
                        Read more <a target="_blank" href={props.cur.data.link}>here</a>.
                    </span>
                </p>
            </div>
            <hr />
            <Comments />
            <hr />
        </div>
    );
}

export default ViewDetails;