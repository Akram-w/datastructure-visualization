import React from "react";
import NumberBox from "./number-box";
import arrow from "../images/inArrow.jpg";
import QueueSize from "./queue-size";
import QueueElements from "./queue-elements";

export default function AddQueueVisual(props) {
    
    return (
        <div className="container wrapper card shadow">
            <div className="row">
                <NumberBox number={props.push} />
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col-1 addPointer">
                    <img src={arrow} alt="Pointer Arrow" width="70px" />
                </div>
                <div className="col queueList pt-2 pb-2">
                    <QueueElements queue={props.queue} />
                </div>
            </div>
            <QueueSize size={props.queue.length} />
        </div>
    );
}
