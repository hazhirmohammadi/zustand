import {create} from "zustand";
import {devtools, persist, subscribeWithSelector} from 'zustand/middleware';

const store = (set) => ({
       tasks: [],
       droppedTask: null,
       addTask: (title, state) => set((store) =>
           ({
              tasks: [...store.tasks, {title, state}]
           }), false, "addTask"),
       deleteTask: (title) => set((store) =>
           ({
              tasks: store.tasks.filter((task) => task.title !== title)
           })),
       setDraggedTask: (title) => set({DraggedTask: title}),
       moveTask: (title, state) =>
           set((store) => ({
              tasks: store.tasks.map((task) =>
                  task.title === title ? {title, state} : task
              ),
           })),
    }
);

const log = (config) => (set, get, api) => config(
    (...args) => {
       console.log(args);
       set(...args)
    },
    get,
    api
);
export const useStore = create(
    log(persist(devtools(store)))
);