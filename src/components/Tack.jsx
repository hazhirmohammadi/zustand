import "./tack.css";
import classNames from "classnames";

const STATUS = 'DONE'
export default function Tack({title}) {
   return(
       <div className="task">
         <div> {title}</div>
          <div className="bottomWrapper">
             <div></div>
             <div className={classNames("status",STATUS)}>{STATUS}</div>
          </div>
       </div>
   )
}