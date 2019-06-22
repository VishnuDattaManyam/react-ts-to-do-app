import React, { Component } from 'react';

export interface ListItemProps {
  id: string;
  text: string;
  isCompleted: boolean;
  onItemChange: Function
}

export interface ListItemState {
  id: string;
  text: string;
  isCompleted: boolean
}

export class ListItem extends Component<ListItemProps, ListItemState> {

  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      text: props.text,
      isCompleted: props.isCompleted
    };
  }

  onChange = (event) => {
    this.setState({
      text: event.target.value
    });
    const latestData = JSON.parse(JSON.stringify(this.state));
    latestData.text = event.target.value;
    this.props.onItemChange(latestData);
    //console.log(this.state.text);
  }

  onRemoveItemClick = (event)=>{
    console.log(this);
  }

  componentDidUpdate() {
    console.log('Component got updated');
    // this.props.onItemChange(this.state);
  }

  render() {
    // console.log('ListItem is going to render');
    return (
      <div className="list-item">
        <input type="checkbox" className="toggle-selector" checked={this.state.isCompleted} />
        <input className="list-item-text" defaultValue={this.state.text} onChange={this.onChange} />
        <span className="remove-list-item" onClick={this.onRemoveItemClick}>X</span>
      </div>
    );
  };
};