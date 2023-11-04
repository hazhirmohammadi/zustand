import "./Column.css";
import Tack from "./Tack.jsx";


export  default function Column({state}) {
   return <div className=" column">
      {state}
      <Tack title="Todo"/>
   </div>
}