import React from "react";
import ViewQueue from "./view-queue";
import PushQueueVisual from "./push-queue-visual";
import PopQueueVisual from "./pop-queue-visual";
import QueueController from "./queue-controller";
import { push, pop, getQueue } from "./queue";
import QueueHistory from "./queue-history";

class QueueVisual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queueStack: [],
    };
    this.addToQueue = this.addToQueue.bind(this);
    this.popFromQueue = this.popFromQueue.bind(this);
  }

  addToStackHistory(value, type) {
    console.log(getQueue());
    const currentQueue = <ViewQueue queue={[...getQueue()]} />;
    switch (type) {
      case "add":
        console.log("push----------");
        const pushedView = (
          <PushQueueVisual queue={[...getQueue()]} push={value} />
        );
        this.setState({
          queueStack: [...this.state.queueStack, pushedView, currentQueue],
        });
        // this.state.queueStack.push(pushedView);
        // this.state.queueStack.push(currentQueue);
        break;
      case "pop":
        const popedView = (
          <PopQueueVisual queue={[...getQueue()]} pop={value} />
        );
        this.setState({
          queueStack: [...this.state.queueStack, popedView, currentQueue],
        });
        // this.state.queueStack.push(popedView);
        // this.state.queueStack.push(currentQueue);
        break;
      default:
        break;
    }
    console.log(this.state.queueStack);
  }

  addToQueue(value) {
    push(value);
    console.log("in add", value);
    this.addToStackHistory(value, "add");
  }

  popFromQueue() {
    try {
      const popedValue = pop();
      console.log(popedValue, getQueue());
      this.addToStackHistory(popedValue, "pop");
    } catch (error) {
      console.log(error);
    }
  }
  a = () => this.state.queueStack.map((li, index) => <li key={index}>{li}</li>);
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <QueueController
            addToQueue={this.addToQueue}
            popFromQueue={this.popFromQueue}
          />
          <hr />
          <div className="historyStack">
            <QueueHistory queueStack={this.state.queueStack}></QueueHistory>
          </div>
        </div>
      </div>
    );
  }
}
export default QueueVisual;
