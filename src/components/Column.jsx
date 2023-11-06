import "./Column.css";
import Tack from "./Tack.jsx";
import {useStore} from "../Store.js";
import {useState} from "react";
import classNames from "classnames";


export default function Column({state}) {
   const [text, setText] = useState('');
   const [open, setOpen] = useState(false);
   const [drop,setDrop]=useState(false);


   const tasks = useStore((store) =>
       store.tasks.filter(task => task.state === state)
   );
   // eslint-disable-next-line react/prop-types
   const addTask = useStore((store) => store.addTask);
   const setDraggedTask=useStore((store) => store.setDraggedTask);
   const draggedTask=useStore((store) => store.DraggedTask);
   const moveTask=useStore((store) => store.moveTask);

   return <div
       className={classNames("column",{drop:drop})}
       onDragOver={(e) => {
          setDrop(true);
          e.preventDefault();
       }}
       onDragLeave={(e)=>{
          setDrop(false);
          e.preventDefault();
       }}
       onDrop={() => {
          console.log(draggedTask);
          moveTask(draggedTask,state)
          // eslint-disable-next-line no-undef
          setDraggedTask(null);
         }}
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