import React, {Component} from 'react';
import {transform} from '@babel/core';
import {CodeMirror} from './CodeMirror';
import {debounceFn} from '../util';
import stageOne from '@babel/preset-stage-1';
import './Editor.css';

export class Editor extends Component {
    transpile = (code) => transform(code, this.state.options);
    handleInputChange = (event) => {
        let res;
        try {
            res = this.transpile(event.getValue());
            this.setState({
                result: {
                    ...res,
                    error: ''
                }
            })
        } catch (e) {
            res = e;
            this.setState({
                result: {
                    code: '',
                    map: '',
                    ast: '',
                    error: e
                }
            });
        }
        console.log("TRANSPILING RESULT: ", res);
    };

    onChange = debounceFn(this.handleInputChange, 1000);

    componentWillMount = () => {
        this.setState({
            result: {
                code: '',
                map: '',
                ast: '',
                error: ''
            }
        });
    };

    componentWillReceiveProps = (nextProps) => {
        this.setState({options: nextProps.options});
    };

    render() {
        return (<div className="EditorSection">
            <CodeMirror id="Input" lineNumbers theme="seti" onChange={this.onChange}/>
            <CodeMirror id="Output" lineNumbers theme="seti" value={this.state.result.code} readOnly/>
        </div>)
    }
}
