import React, { Component } from 'react';
import './styles.css';
import '../../style.css';
import { Utility } from '../../util/common';

interface ComponentProps {
  onAddTask: Function;
}

export class Entry extends Component<ComponentProps> {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      selectAll: false
    };
  }

  onTaskSubmission = (event) => {

    if (event.keyCode && event.keyCode == 13) {
      this.props.onAddTask(event.target.value);
      event.target.value = '';
      // console.log('Cleared');
    }

  };

  render() {
    return (
      <div className="entry">
        <input type="checkbox" className="selectionToggler" />
        <input 
        className="single-action-text" 
        placeholder="Enter your task here..." 
        onKeyDown={this.onTaskSubmission}
        />
      </div>
    );
  };
};