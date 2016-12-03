import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../../actions';

import LocationSelector from './tester';

const loadData = props => {
    const {typeName} = props;
    props.getDataByType(typeName);
}

class Type extends Component {
    static propTypes = {
        typeName: PropTypes.string.isRequired,
        getDataByType: PropTypes.func.isRequired
    }

    componentWillMount() {
        loadData(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.typeName !== this.props.typeName) {
            loadData(nextProps);
        }
    }

    renderLocationData(location) {
        return location.map((item) => {
            return (
                <LocationSelector key={item._id} props={item} />
            );
        });
    }
        
    render() {
        const {typedata, typeName} = this.props;
        if (!typedata) {
            return (
                <h1><i>Loading {typeName} locations...</i></h1>
            );
        }

        return (
            <div>
                <h1>{typeName}</h1>
                <hr />
                <ul>
                    {this.renderLocationData(typedata)}
                </ul>             
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        typedata: state.explorer.typedata,
        typeName: ownProps.params.typename
    };
};

export default connect(mapStateToProps, actions)(Type);