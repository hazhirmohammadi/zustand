import {useStore} from "./Store.js";
import {useMemo} from "react";
import {shallow} from "zustand/shallow";

export default function Temp({state}) {
   const tasks = useStore((store) =>
           store.tasks.filter(task => task.state === state),
      shallow
   );
}

// (prev, next) => {
//    const longest = prev.length ? prev.length : next.length;
//    for (let i = 0; i < longest; i++) {
//       if (!prev[i] || !next[i]) return false;
//       if (!prev[i] !== !next[i]) return false;
//    }
//    return true;
// }
