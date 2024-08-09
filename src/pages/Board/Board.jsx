/*Jewoo Lee*/
import { useEffect, useState } from 'react';
import useDataFetching from '../../hooks/useDataFetching';
import Lane from '../../components/Lane/Lane';
import styled from 'styled-components';

const BoardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 2%;
    flex: 1;
    flex-wrap: wrap;
    border: 5px dashed;

`;
/* Predefined cars for each lane */
const lanes = [
    { id: 1, title: 'Car 1' },
    { id: 2, title: 'Car 2' }
];
/* Function to handle the drag start event: store car ID */
function onDragStart(e, id) {
    e.dataTransfer.setData('id', id);
}
/*Allowing to drop the dragging car*/
function onDragOver(e) {
    e.preventDefault();
}


/*Fetch the Car detail from fake Json server*/
function Board() {
    const [loading, error, data] = useDataFetching(
        'https://my-json-server.typicode.com/aisora1222/final/cars'
    );
    /*use UseState to fetch and map the data*/
    const [tasks, setTasks] = useState([]);
    const [lanesData, setLanesData] = useState(lanes.map(lane => ({ ...lane, car: null })));
    
    /*utilized useEffect to update tasks when data is fetched*/
    useEffect(() => {
        console.log('Data in Board:', data);
        setTasks(data.map(task => ({ ...task, lane: null })));
    }, [data]);

    /* Function to handle the drop event, assigning a car to a lane */
    function onDrop(e, laneId) {
        const id = e.dataTransfer.getData('id');
        const laneIndex = lanesData.findIndex(lane => lane.id === laneId);

        if (lanesData[laneIndex].car !== null) {
            alert('Only one car is allowed per lane.');
            return;
        }
        /*update the tasks and datas from the lane with the car assigned to the dropped lane*/
        const updatedTasks = tasks.map(task => {
            if (task.id.toString() === id) {
                task.lane = laneId;
            }
            return task;
        });

        const newLanesData = lanesData.map((lane, index) => {
            if (index === laneIndex) {
                return { ...lane, car: updatedTasks.find(task => task.id.toString() === id) };
            }
            return lane;
        });

        setTasks(updatedTasks);
        setLanesData(newLanesData);
    }
    /*Identify to compare the car from each lane*/
    const lane1Car = lanesData.find(lane => lane.id === 1)?.car;
    const lane2Car = lanesData.find(lane => lane.id === 2)?.car;

    const highlightAttributes = {};
    /*Compare the two cars*/
    if (lane1Car && lane2Car) {
        const attributesToCompare = ['price', 'zerosixty', 'weight', 'size', 'hp', 'torque'];

        attributesToCompare.forEach(attr => {
            if (['price', 'zerosixty', 'weight', 'size'].includes(attr)) {
                if (parseFloat(lane1Car[attr]) > parseFloat(lane2Car[attr])) {
                    highlightAttributes[lane1Car.id] = { ...highlightAttributes[lane1Car.id], [attr]: true };
                } else if (parseFloat(lane1Car[attr]) < parseFloat(lane2Car[attr])) {
                    highlightAttributes[lane2Car.id] = { ...highlightAttributes[lane2Car.id], [attr]: true };
                }
            } else if (['hp', 'torque'].includes(attr)) {
                if (parseFloat(lane1Car[attr]) < parseFloat(lane2Car[attr])) {
                    highlightAttributes[lane1Car.id] = { ...highlightAttributes[lane1Car.id], [attr]: true };
                } else if (parseFloat(lane1Car[attr]) > parseFloat(lane2Car[attr])) {
                    highlightAttributes[lane2Car.id] = { ...highlightAttributes[lane2Car.id], [attr]: true };
                }
            }
        });
    }

    return (
        <BoardWrapper>
            {lanes.map(lane => (
                <Lane
                    key={lane.id}
                    laneId={lane.id}
                    title={lane.title}
                    loading={loading}
                    error={error}
                    tasks={tasks.filter(task => task.lane === lane.id)}
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    highlightAttributes={highlightAttributes}
                />
            ))}

        </BoardWrapper>

    );
}

export default Board;
