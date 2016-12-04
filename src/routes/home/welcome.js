import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../../actions';

class Welcome extends Component {
    componentWillMount() {
        this.props.getTypes();
    }

    renderTypes() {
        if (this.props.types) {
            return this.props.types.map((item) => {
                return (
                    <li key={item} className="list-group-item">
                        <Link to={`/${item}`}>{item}</Link>
                    </li>
                );
            });
        }
    }

    render() {
        return (
            <div>
                <div className="">
                    <h1>The Armchair Tourist</h1>
                    <p>Tap, swipe, and scroll away as you window shop your dream tourist hotspot!</p>
                </div>

                <ul className="list-group">
                    {this.renderTypes()}
                </ul>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        types: state.explorer.types
    }
}

export default connect(mapStateToProps, actions)(Welcome);