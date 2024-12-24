
import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

const initialState = {
    tasks: [
        { id: uuid(), description: 'Clean my room', isDone: false },
        { id: uuid(), description: 'Feed my dogs', isDone: false },
        { id: uuid(), description: 'Eat', isDone: false }
    ],
    done: false

}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {

        setDescription: (state, action) => {
            state.tasks = state.tasks.map(el =>
                el.id === action.payload.id ? { ...el, description: action.payload.description } : el
            );

        },
        manageDone: (state, action) => {
            state.tasks = state.tasks.map(el =>
                el.id === action.payload.id ? { ...el, isDone: !el.isDone } : el
            );
        },

        addTask: (state, action) => {
            state.tasks.push(action.payload)
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(el => el.id != action.payload)
        },
        handleFilter: (state) => {
            state.done = !state.done
            console.log(state.done)
        }





    },
})

// Action creators are generated for each case reducer function
export const { setDescription, manageDone, addTask, deleteTask, handleFilter } = taskSlice.actions

export default taskSlice.reducer