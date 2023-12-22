import { useDrop } from 'react-dnd';

const OngoingTask = ({ onTaskDrop }) => {
    const [{ isOver }, drop] = useDrop({
        accept: 'TASK',
        drop: (item, monitor) => {
            onTaskDrop(item.id, 'ongoing'); // Passes the dropped task's ID and target status ('ongoing')
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <div
            ref={drop}
            style={{
                border: '2px dashed blue',
                padding: '8px',
                marginBottom: '4px',
                backgroundColor: isOver ? 'lightblue' : 'white',
            }}
        >
            <h3>Ongoing Tasks</h3>
            {/* You can render ongoing tasks here */}
        </div>
    );
};

export default OngoingTask;
