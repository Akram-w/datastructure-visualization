import React from "react";

class QueueController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.popFromQueue = this.popFromQueue.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.value === ''){
      return;
    }
    console.log("dk",this.state.value)
    this.props.addToQueue(this.state.value);
  }
  popFromQueue() {
    this.props.popFromQueue();
  }
  render() {
    return (
      <div className="form-inline mt-3">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="mr-3">Queue Value:</label>
            <input
              className="form-control"
              type="number"
              placeholder="Add value to queue"
              onChange={this.handleChange}
            />
            <input
              className="btn btn-success ml-3"
              type="submit"
              value="Add To Queue"
            />
          </div>
        </form>
        <input
          type="button"
          className="btn btn-primary ml-3"
          value="Pop From Queue"
          onClick={this.popFromQueue}
        />
      </div>
    );
  }
}
export default QueueController;
