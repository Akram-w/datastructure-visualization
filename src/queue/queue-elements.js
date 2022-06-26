import React from "react";
import NumberBox from "./number-box";

export default function QueueElements(props) {
  return props.queue.map((value, index) => (
    <NumberBox key={index.toString() + value.toString()} number={value} />
  )).reverse();
}
