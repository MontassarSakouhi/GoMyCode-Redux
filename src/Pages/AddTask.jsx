import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'react-bootstrap/Button';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/Task/TaskSlice';
import { v4 as uuid } from 'uuid';
import { setDescription } from '../redux/Task/TaskSlice';


export default function AddTask() {
    const navigate = useNavigate();

    const validationSchema = Yup.object({

        description: Yup.string()
            .min(5, 'description must be at least  5 characters')
            .required('description is required'),

    });

    const tasks = useSelector(value => value.task.tasks)
    const dispatch = useDispatch()
    const { id } = useParams()
    const task = tasks.find(el => el.id == id)

    if (id) {
        return (
            <div>
                <Formik
                    initialValues={{ id: task.id, description: task.description, isDone: task.isDone }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        dispatch(setDescription(values));
                        navigate('/');
                    }}
                >
                    {({ handleSubmit }) => (
                        <Form style={styles.formContainer}>
                            <div style={styles.fieldContainer}>
                                <label style={styles.label}>Task description:</label>
                                <Field
                                    type="text"
                                    name="description"
                                    placeholder="Enter task description"
                                    style={styles.inputField}
                                />
                                <ErrorMessage name="description" component="div" style={styles.errorMessage} />
                            </div>



                            <Button onClick={handleSubmit} type="submit" style={styles.submitButton}>
                                Add Task
                            </Button>
                        </Form>
                    )}
                </Formik>

            </div>
        )
    }

    return (
        <Formik
            initialValues={{ id: uuid(), description: '', isDone: false }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                dispatch(addTask(values));
                navigate('/');
            }}
        >
            {({ handleSubmit }) => (
                <Form style={styles.formContainer}>
                    <div style={styles.fieldContainer}>
                        <label style={styles.label}>Task description:</label>
                        <Field
                            type="text"
                            name="description"
                            placeholder="Enter task description"
                            style={styles.inputField}
                        />
                        <ErrorMessage name="description" component="div" style={styles.errorMessage} />
                    </div>



                    <Button onClick={handleSubmit} type="submit" style={styles.submitButton}>
                        Add Task
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

const styles = {
    formContainer: {
        backgroundColor: '#f7f7f7',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '300px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
    },
    fieldContainer: {
        marginBottom: '15px',
    },
    label: {
        fontSize: '16px',
        color: '#333',
        marginBottom: '8px',
        display: 'block',
    },
    inputField: {
        width: '100%',
        padding: '10px',
        fontSize: '14px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    errorMessage: {
        color: 'red',
        fontSize: '12px',
        marginTop: '5px',
    },
    submitButton: {
        width: '100%',
        padding: '12px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        cursor: 'pointer',
    },
};
