import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { manageDone ,deleteTask} from "../redux/Task/TaskSlice";

export default function Task({ id, description, isDone }) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onEdit = () => {

        navigate(`/edit/${id}`)
    }
    return (
        <div onClick={() => dispatch(manageDone({ id }))} style={styles.container}>
            <div>
                <p style={isDone ? styles.taskNameDone : styles.taskName}>
                    <strong>{description} </strong>
                </p>

            </div>
            <div style={styles.buttonContainer}>
                <button style={styles.editButton} onClick={(e) => {
                    e.stopPropagation();
                    onEdit();
                }}>
                    Edit
                </button>
                <button style={styles.deleteButton} onClick={(e) => {
                    e.stopPropagation();
                    dispatch(deleteTask(id))
                }}>
                    Delete
                </button>
            </div>

        </div>
    )
}
const styles = {
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginBottom: "10px",
        backgroundColor: "gray",
        width: "300px",
        cursor: "pointer",
    },
    taskName: {
        fontWeight: "bold",
        fontSize: "16px",
        margin: 0,
    },
    taskNameDone: {
        color: "red",
        fontWeight: "bold",
        fontSize: "16px",
        margin: 0,
        textDecoration: "line-through",
    },
    taskCount: {
        color: "white",
        fontSize: "14px",
        margin: 0,
    },
    // taskCountDone: {
    //   color: "white",
    //   fontSize: "14px",
    //   margin: 0,
    //   textDecoration: "line-through",
    // },
    buttonContainer: {
        display: "flex",
        gap: "5px",
    },
    editButton: {
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        padding: "5px 10px",
        borderRadius: "5px",
        cursor: "pointer",
    },
    deleteButton: {
        backgroundColor: "#f44336",
        color: "white",
        border: "none",
        padding: "5px 10px",
        borderRadius: "5px",
        cursor: "pointer",
    },
};
