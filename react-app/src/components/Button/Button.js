import React, { Component } from 'react';
import {MapTo,ResponsiveGrid,withComponentMappingContext} from '@adobe/cq-react-editable-components';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/counter';
import { bindActionCreators } from 'redux';

import Text from '../Text';

export class Button extends ResponsiveGrid{
    get containerProps() {
        let containerProps = super.containerProps;
        containerProps.className = (containerProps.className || '') + ' MyGrid ';
        return containerProps;
    }
    render(){
        return(
            <div {...this.containerProps}>
                <h1>This is mygrid component</h1>
                {super.childComponents}
                {super.placeholderComponent}
                {/*<button onClick={this.props.increment}>+</button>*/}
                {/*<button onClick={this.props.decrement}>-</button>*/}
            </div>
        )
    }
}
const ButtonEditConfig = {

    emptyLabel: 'Button component',

    isEmpty: function(props) {
        return !props;
    }
};

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

MapTo('we-retail-journal/components/button')(withComponentMappingContext(connect(null, mapDispatchToProps)(Button)));