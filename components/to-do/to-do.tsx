import React, { Component } from 'react';
import { Entry } from '../entry/task-entry';
import { List } from '../list';
import { ListItem, ListItemState } from '../list-item/list-item';
import { Report } from '../report/report';
import { Utility } from '../../util/common';
import './styles.css';

interface ComponentProps {

}

interface ComponentState {
  items: ListItemState[];
}

export class ToDo extends Component<ComponentProps, ComponentState> {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  onAddTask = (newTask) => {
    console.log(newTask);
    let taskItem = {
      id: Utility.getGUID(),
      text: newTask,
      isCompleted: false
    };

    this.setState(function (state, props) {
      state.items.push(taskItem);
      // console.log(state);
      return {
        items: state.items
      }
    });
  };

  onListChange = (item) => {
    console.log('To-Do got change from child component')
    this.setState(function (prevState, prevProps) {
      let modifiedItem = prevState.items.find(function (x) {
        return x.id == item.id;
      });
      if (modifiedItem !== undefined) {
        modifiedItem = item;
      }
      return prevState;
    });

  };

  render() {
    return (
      <div>
        <div className="to-do">
          <Entry onAddTask={this.onAddTask} />
          <List items={this.state.items} onListChange={this.onListChange} />
          <Report />
        </div>
        <textarea className="state" rows={6} readOnly value={JSON.stringify(this.state)} />
      </div>
    );
  }

}
