import {create} from "zustand";

const store = (set) => ({
       tasks: [{title: 'test', state: 'DONE'}],
       droppedTask:null,
       addTask: (title, state) => set((store) =>
           ({
              tasks: [...store.tasks, {title, state}
              ]
           })),
       deleteTask: (title) => set((store) =>
           ({
              tasks: store.tasks.filter((task) => task.title !== title)
           })),
       setDraggedTask:(title)=>set({DraggedTask:title}),
    }
);

export const useStore = create(store);