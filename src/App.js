import React, { Component } from "react";
import { Card, Button, InputGroup } from "@blueprintjs/core";
import initialData from "./initialData"
import StageColumn from "./components/StageColumn"
import  {DragDropContext} from "react-beautiful-dnd"
import "./App.css";
import Stage from "./components/Stage";

export const NUM_STAGES = 4;
export const STAGE_NAMES = ["Backlog", "To Do", "Ongoing", "Done"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialData;
  }
  onDragEnd = (result) => {
    //todo
  }

  render() {
    console.log("initialData", initialData)
    return (
      <div className="App">
        <h1>Kanban board</h1>
        <div
          style={{
            display: "flex"
          }}
        >
          <DragDropContext onDragEnd={this.onDragEnd}
          >
          {
            this.state.stageOrder.map((stageId) => {
              const stage = this.state.Stage[stageId]
              const tasks = stage.taskID.map(taskId => {
                return this.state.task[taskId]
              })
              return <StageColumn key={stage.id} stage={stage} tasks={tasks} />
            })
          }
          </DragDropContext>
        </div>
      </div>
    );
  }
}

export default App;
