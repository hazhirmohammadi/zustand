import "./tack.css";
import classNames from "classnames";
import {useStore} from "../Store.js";

import trash from "../assets/trash-2.svg"

export default function Tack({title}) {
   const task = useStore((store) =>
       store.tasks.find(task => task.title === title)
   );
   const deleteTask = useStore((store) => store.deleteTask);

   return (
       <div className="task">
          <div>{task.title}</div>
          <div className="bottomWrapper">
             <div>
                <img src={trash} alt="" onClick={()=>deleteTask(task.title)}/>
             </div>
             <div className={classNames("status", task.state)}>{task.state}</div>
          </div>
       </div>
   )
}