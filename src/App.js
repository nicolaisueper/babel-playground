import React, {Component, Fragment} from 'react';
import {ToolBar} from './components/ToolBar';
import {Editor} from './components/Editor';
import './App.css';
import importer from "./importer";

class App extends Component {
    componentWillMount = () => {
        this.setState({
            availablePresets: {},
            activePresets: [],
            options: {
                ast: false,
                babelrc: false,
                code: true,
                comments: true,
                compact: false,
                highlightCode: false,
                minified: false,
                plugins: [],
                presets: []
            }
        });
    };

    handleTogglePreset = async (event) => {
        const {preset: presetName, enabled} = event;
        if (enabled === false) {
            this.disablePreset(presetName);
        } else {
            if (!this.state.availablePresets[presetName]) {
                await this.loadPreset(presetName);
            }
            this.enablePreset(presetName);
        }
    };

    loadPreset = async (presetName) => {
        const moduleName = `@babel/${presetName}`;
        const module = await importer(moduleName);
        this.setState({
            availablePresets: {
                ...this.state.availablePresets,
                [presetName]: module
            }
        })
    };

    enablePreset = (presetName) => {
        let activePresets = [...this.state.activePresets, presetName];
        this.activatePresets(activePresets);
    };

    activatePresets = (activePresets) => {
        this.setState({
            activePresets: activePresets,
            options: {
                presets: activePresets.map(preset => this.state.availablePresets[preset])
            }
        });
    };

    disablePreset = (presetName) => {
        let activePresets = this.state.activePresets.filter(preset => preset !== presetName);
        this.activatePresets(activePresets);
    };

    render() {
        return (<div className="App">
            <Editor options={this.state.options}/>
            <ToolBar onTogglePreset={(event) => this.handleTogglePreset(event)}/>
        </div>);
    }
}

export default App;
