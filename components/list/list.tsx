import React, { Component } from "react";

import { ListItem, ListItemState } from "../list-item/list-item";

interface ComponentProps {
  items: ListItemState[];
  onListChange: Function;
}

export class List extends Component<ComponentProps> {
  onItemChange = (item: ListItemState) => {
    this.props.onListChange(item);
  };

  onTaskDescChange(desc, id) {
    const items = [...this.props.items];
    let modifiedItem = items.find(x => x.id === id);
    if (modifiedItem !== undefined) {
      modifiedItem.text = desc;
      this.props.onListChange(items);
    }
  }

  onItemRemove(taskId) {
    let items = [...this.props.items];
    items = items.filter(x=> x.id !== taskId);
    this.props.onListChange(items);
  }

  render() {
    const items = this.props.items;
    return (
      <div className="list">
        {items.map((item, index) => {
          return (
            <ListItem
              key={index}
              id={item.id}
              text={item.text}
              isCompleted={item.isCompleted}
              onTaskDescChange={desc => {
                this.onTaskDescChange(desc, item.id);
              }}
              onRemoveItem={taskId => {
                this.onItemRemove(taskId);
              }}
            />
          );
        })}
      </div>
    );
  }
}
