import React from "react";

export default function NumberBox(props){
    return (
        <div className="col-1 box">
            {props.number}
        </div>
    )
}