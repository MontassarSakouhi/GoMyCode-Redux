import { useDispatch, useSelector } from "react-redux"
import Task from "./Task"
import { useNavigate } from "react-router-dom"
import { handleFilter } from "../redux/Task/TaskSlice"


export default function ListTask() {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.task.done)
    const tasks = useSelector((state) => state.task.tasks)
    const filtered = tasks.filter(el => el.isDone != true)
    if (filter) {
        return (
            <div>
                {
                    filtered.map(el => <Task key={el.id} {...el} />)
                }
                <button style={{ padding: '2px 3px' }} onClick={() => dispatch(handleFilter())} >Filtered</button>

            </div>
        )
    }

    return (
        <div>


            {
                tasks.map(el => <Task key={el.id} {...el} />)
            }

            <button style={{ padding: '5px 15px' }} onClick={() => dispatch(handleFilter())} >Filter</button>
        </div>
    )
}