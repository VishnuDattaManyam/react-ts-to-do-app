import React, { Component } from "react";
import "./styles.css";

export interface ListItemProps {
  id: string;
  text: string;
  isCompleted: boolean;
  // onItemChange: Function;
  onTaskDescChange: Function;
  onRemoveItem: Function;
  // taskDetailsRef: HTMLInputElement;
}

export class ListItem extends Component<ListItemProps> {
  constructor(props) {
    super(props);
    //this.taskDetailsRef = React.createRef();
  }

  onTaskDescChange() {
    this.props.onTaskDescChange(
      (this.refs.taskDescRef as HTMLInputElement).value
    );
  }

  onRemoveItemClick() {
    console.log(this);
  }

  componentDidUpdate() {
    console.log("Component got updated");
  }

  render() {
    // console.log('ListItem is going to render');
    return (
      <div className="list-item">
        <input
          type="checkbox"
          className="toggle-selector"
          // checked={this.props.isCompleted}
        />
        <input
          ref="taskDescRef"
          className="list-item-text"
          defaultValue={this.props.text}
          onChange={() => {
            this.onTaskDescChange();
          }}
        />
        <span
          className="remove-list-item"
          onClick={() => {
            this.props.onRemoveItem(this.props.id);
          }}
        >
          X
        </span>
      </div>
    );
  }
}
