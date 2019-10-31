import React, { Component } from 'react';
import './ToolBar.css';

export class ToolBar extends Component {
  render() {
    return (
      <div className="ToolBar">
        <div className="Presets">
          <p>Official Presets</p>
          <div className="CheckboxOptions">
            <label>
              React
              <input
                id="preset-react"
                type="checkbox"
                onClick={event =>
                  this.props.onTogglePreset({
                    preset: event.target.id,
                    enabled: event.target.checked
                  })
                }
              />
            </label>
            <label>
              Flow
              <input
                id="preset-flow"
                type="checkbox"
                onClick={event =>
                  this.props.onTogglePreset({
                    preset: event.target.id,
                    enabled: event.target.checked
                  })
                }
              />
            </label>
          </div>
        </div>
        <div className="Presets">
          <p>Experimental Presets</p>
          <div className="CheckboxOptions">
            <label>
              Stage 0
              <input
                id="preset-stage-0"
                type="checkbox"
                onClick={event =>
                  this.props.onTogglePreset({
                    preset: event.target.id,
                    enabled: event.target.checked
                  })
                }
              />
            </label>
            <label>
              Stage 1
              <input
                id="preset-stage-1"
                type="checkbox"
                onClick={event =>
                  this.props.onTogglePreset({
                    preset: event.target.id,
                    enabled: event.target.checked
                  })
                }
              />
            </label>
            <label>
              Stage 2
              <input
                id="preset-stage-2"
                type="checkbox"
                onClick={event =>
                  this.props.onTogglePreset({
                    preset: event.target.id,
                    enabled: event.target.checked
                  })
                }
              />
            </label>
            <label>
              Stage 3
              <input
                id="preset-stage-3"
                type="checkbox"
                onClick={event =>
                  this.props.onTogglePreset({
                    preset: event.target.id,
                    enabled: event.target.checked
                  })
                }
              />
            </label>
          </div>
        </div>
      </div>
    );
  }
}
