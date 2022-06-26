import React from "react";
import QueueElements from "./queue-elements";
import QueueSize from "./queue-size";

export default function ViewQueue(props) {
    const getQueueView = () => {
        if (props.queue.length > 0) {
            return (
                <div className="wrapper card">
                    <div className="col queueList pt-2 pb-2 card-body">
                        <QueueElements queue={props.queue} />
                    </div>
                    <QueueSize size={props.queue.length} />
                </div>
            )
        }
        return (
            <div className="wrapper">
                <div className="col emptyList pt-2 pb-2">
                    Empty Queue
                </div>
            </div>
        )
    }
    return getQueueView();
}