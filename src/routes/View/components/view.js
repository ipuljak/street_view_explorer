import React from 'react';
import Street from './street_view_component';

const View = (view) => {
    return (
        <div className="view">
            <Street view={view.props.view} />
            <hr />
            <div className="about">
                <img src={view.props.data.image} />
                <p>{view.props.data.info}</p>
            </div>
        </div>
    );
}

export default View;