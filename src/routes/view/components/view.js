import React from 'react';
import nl2br from 'react-newline-to-break'; 
import Street from './street_view_component';
import Comments from './comments_component';


// Clean some of the special characters that may be in the text.
const cleanText = (text) => {
    return text.replace(/\\n/g, '\n').replace(/\n\n/g, '\n').replace(/\\"/g, '"');
}

const View = (view) => {
    const info = cleanText(view.props.data.info);
    return (
        <div className="view">
            <Street view={view.props.view} />
            <hr />
            <div className="about">
                <img 
                    className="aboutPic" 
                    src={view.props.data.image} 
                    role="presentation" />
                <p> 
                    {nl2br(info)} 
                    <span>
                        Read more <a target="_blank" href={view.props.data.link}>here</a>.
                    </span>
                </p>
            </div>
            <hr />
            <Comments />
            <hr />
        </div>
    );
}

export default View;