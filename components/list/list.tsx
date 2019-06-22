import React, { Component } from 'react';



import { ListItem, ListItemState } from '../list-item/list-item';

interface ComponentProps {
  items: ListItemState[];
  onListChange: Function;
}

interface ListState {
  // items: ListItemState[]
}

export class List extends Component<ComponentProps> {

  onItemChange = (item: ListItemState) => {

    this.props.onListChange(item);

    // const items = this.props.items;
    // console.log(item);
    // console.log(items);
    // items.find(function () { });
    // this.onListChange(this.props.items);
  }

  // onListChange = (items) => {
  //   this.props.onListChange(items);
  // }

  render() {
    const items = this.props.items;
    // console.log('List is going to render');
    return (
      <div className="list">
        {items.map((item, index) => {
          return <ListItem key={index} id={item.id} text={item.text} isCompleted={item.isCompleted} onItemChange={this.onItemChange} />
        })}
      </div>
    );
  };
};