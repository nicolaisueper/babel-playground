import React, {Component} from 'react';
import * as cm from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/seti.css';
import 'codemirror/mode/javascript/javascript';
import './CodeMirror.css'

export class CodeMirror extends Component {
    codeMirror = undefined;
    handlerRegExp = /on[A-Z]\w+/;

    registerEventListeners = (props) => {
        const mapPropertyName = (name) => {
            const listenerName = name.substring(2);
            const uncapitalized = listenerName.charAt(0).toLowerCase() + listenerName.substr(1).toLowerCase();
            return uncapitalized;
        };
        for (const property in props) {
            if (this.handlerRegExp.test(property) && typeof props[property] === 'function') {
                this.codeMirror.on(mapPropertyName(property), props[property]);
            }
        }
    };

    componentDidMount = () => {
        const settings = Object.keys(this.props)
            .map(property => ({[property]: this.props[property]}))
            .reduce((acc, cur) => ({...acc, ...cur}));
        console.log(settings);

        this.codeMirror = cm(this.ref, {
            ...settings
        });
        this.registerEventListeners(this.props);
    };

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.value) {
            this.codeMirror.setValue(nextProps.value);
        }
    };

    render = () => <div className="Editor" ref={(self) => this.ref = self}/>;
}
