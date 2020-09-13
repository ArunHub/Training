import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer  from 'react-dom/server';
import template from "babel-template";
import generate from "babel-generator";
import * as t from "babel-types";
import {X} from '../X.component'
import {Y} from '../Y.component'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import  AA from './A.component';

export class TryDynaA extends Component {
    render() {
        return (<div>try dyna AAA</div>)
    }
}

export class TryDyna extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stateVal : ""
        }
    }
    
    testVar = 'Hello ATT';

    testMethod = (val) => {
        this.setState(
            {
                stateVal: val
            }
        )
    }

    render() {
        var s = `
        <div className="parent">
        try123 dyna Component
        </div>
    `
//    var bbb = require('babel-core');

    // var bb = template(s);
    console.log('fffffffffffffffff');


        return (
            <div>
            React.createElement(
                'div', null, `Hello this is time`
            ),
            <AA/>
            </div>
        );
    }
}
if (!window['dyna']) {
    window['dyna'] = [];
}
window['react'] = React;
window['dyna'].push(TryDyna);


window['rdom'] = ReactDOM;
window['rdoms'] = ReactDOMServer;
window['rhp'] = ReactHtmlParser;