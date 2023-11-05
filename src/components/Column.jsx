import "./Column.css";
import Tack from "./Tack.jsx";
import {useStore} from "../Store.js";


export default function Column({state}) {
   const tasks = useStore((store) =>
       store.tasks.filter(task => task.state === state)
   );


   return <div className=" column">
      <p>{state}</p>
      <Tack title="Todo"/>
   </div>
}