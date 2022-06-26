import { React } from "react";

export default function QueueHistory(props) {
  const history = () =>{
      console.log(props.queueStack)
   return props.queueStack.map((item,index) => <li key={index}>{item}</li>).reverse();
  }
  return (
    <div>
      <ul className="history">{[history()]}</ul>
    </div>
  );
}
