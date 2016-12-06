import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../../actions';

class Welcome extends Component {
    componentWillMount() {
        this.props.getDistincts();
    }

    renderTypes(type) {
        if (this.props.types) {
            return this.props.types[type].map((item) => {
                return (
                    <Link to={`/${item}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <li key={item} className="list-group-item">
                            {item}
                        </li>
                    </Link>
                );
            });
        }
    }

    render() {
        return (
            <div className="main">
                <div className="">
                    <img 
                        className="logo" 
                        src="http://i.imgur.com/Y8V8CbE.png"
                        alt="" />
                    <p>Tap, swipe, and scroll away as you window shop your dream tourist hotspot!</p>
                </div>

                <div 
                    className="panel-group" 
                    id="accordion"
                    role="tablist"
                    aria-multiselectable="true">
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingOne">
                            <h4 className="panel-title">
                                <a 
                                    role="button" 
                                    data-toggle="collapse" 
                                    data-parent="#accordion" 
                                    href="#collapseOne" 
                                    aria-expanded="true"
                                    aria-controls="collapseOne">
                                    Locations
                                </a>
                            </h4>
                        </div>
                        <div 
                            id="collapseOne"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingOne">
                            {this.renderTypes('type')}
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingTwo">
                            <h4 className="panel-title">
                                <a 
                                    role="button" 
                                    data-toggle="collapse" 
                                    data-parent="#accordion" 
                                    href="#collapseTwo" 
                                    aria-expanded="true"
                                    aria-controls="collapseTwo">
                                    Cities
                                </a>
                            </h4>
                        </div>
                        <div 
                            id="collapseTwo"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingTwo">
                            {this.renderTypes('city')}
                        </div>
                    </div>
                </div>
                
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