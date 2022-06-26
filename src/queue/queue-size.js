import React from "react";

export default function QueueSize(props){
    return(
        <div className="row sizeDiv">There are {props.size} Elements in the Queue</div>
    )
}