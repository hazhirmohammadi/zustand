import "./Column.css";
import Tack from "./Tack.jsx";
import {useStore} from "../Store.js";
import {useState} from "react";


export default function Column({state}) {
   const [text, setText] = useState('');
   const [open, setOpen] = useState(false);

   const tasks = useStore((store) =>
       store.tasks.filter(task => task.state === state)
   );
   console.log(tasks);
   // eslint-disable-next-line react/prop-types
   const addTask = useStore((store) => store.addTask);

   return <div
       className=" column"
       onDragOver={(e) => {
          e.preventDefault();
       }}
       onDrop={() => {
          setDraggedTask(null)
          console.log("Dropped");}}
   >
      <div className="titleWrapper">
         <p>{state}</p>
         <button onClick={() => setOpen(true)}>Add</button>
      </div>
      {tasks.map((task) => (
          <Tack key={task.title} title={task.title}/>
      ))}
      {open && <div className="Modal">
         <div className="modalContent">
            <input onChange={e => setText(e.target.value)} value={text} type="text"/>
            <button onClick={() => {
               addTask(text, state);
               setText('');
               setOpen(false);
            }}>
               Submit
            </button>
         </div>
      </div>
      }
   </div>
}