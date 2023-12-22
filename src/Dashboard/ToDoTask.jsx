import { useDrag } from 'react-dnd';
import { PropTypes } from 'prop-types';

const ToDoTask = ({ task }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'TASK', // Define the type here
        item: { id: task.id },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                border: '1px solid #ccc',
                padding: '8px',
                marginBottom: '4px',
                cursor: 'move',
                backgroundColor: 'white',
            }}
        >
            {/* Display task details */}
            <p>{task.Title}</p>
            {/* <p>{task.description}</p> */}
            {/* You can include other task details here */}
        </div>
    );
};

ToDoTask.propTypes={
    task:PropTypes.object,
}


export default ToDoTask;
