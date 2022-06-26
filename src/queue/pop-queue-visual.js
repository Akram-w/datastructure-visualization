import React from "react";
import QueueElements from "./queue-elements";
import NumberBox from "./number-box";
import arrow from "../images/d.jpg";
import QueueSize from "./queue-size";

export default function PopQueueVisuals (props) { 
    return (
        <div className="container wrapper card">
            <div className="row">
                <div className="col"></div>
                <NumberBox number={props.pop} />
            </div>
            <div className="row">
                <div className="col queueList pt-2 pb-2">
                    <QueueElements queue={props.queue} />
                </div>
                <div className="col-1 addPointer">
                    <img src={arrow} alt="Pointer Arrow" width="70px" />
                </div>
            </div>
            <QueueSize size={props.queue.length} />
        </div>
    );
}