import { useDrop } from 'react-dnd';

const CompletedTask = ({ onTaskDrop }) => {
    const [{ isOver }, drop] = useDrop({
        accept: 'TASK',
        drop: (item, monitor) => {
            onTaskDrop(item._id, 'completed'); 
            console.log(item);
            // Passes the dropped task's ID and target status ('completed')
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <div
            ref={drop}
            style={{
                border: '2px dashed green',
                padding: '8px',
                marginBottom: '4px',
                backgroundColor: isOver ? 'lightgreen' : 'white',
            }}
        >
            <h3>Completed Tasks</h3>
            {/* You can render completed tasks here */}
        </div>
    );
};

export default CompletedTask;
