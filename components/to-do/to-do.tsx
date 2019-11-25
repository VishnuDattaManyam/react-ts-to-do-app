import React, { Component } from "react";
import { Entry } from "../entry/task-entry";
import { List } from "../list";
import { ListItem } from "../list-item/list-item";
import { Report } from "../report/report";
import { Utility } from "../../util/common";
import "./styles.css";

interface ComponentProps {}

interface ListItemState {
  id: string;
  text: string;
  isCompleted: boolean;
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

  onAddTask = newTask => {
    console.log(newTask);
    let taskItem = {
      id: Utility.getGUID(),
      text: newTask,
      isCompleted: false
    };

    this.setState(function(state, props) {
      state.items.push(taskItem);
      return {
        items: state.items
      };
    });
  };

  onListChange(newItems) {
    this.setState({
      items: newItems
    });
  }

  render() {
    return (
      <div>
        <div className="to-do">
          <Entry onAddTask={this.onAddTask} />
          <List
            items={this.state.items}
            onListChange={newItems => {
              this.onListChange(newItems);
            }}
          />
          <Report />
        </div>
        <textarea
          className="state"
          rows={6}
          readOnly
          value={JSON.stringify(this.state)}
        />
      </div>
    );
  }
}
