import { useEffect, useState } from 'react';
import useDataFetching from '../../hooks/useDataFetching';
import Lane from '../../components/Lane/Lane';
import styled from 'styled-components';

const BoardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px;
    flex: 1;
    flex-wrap: wrap;
`;



const lanes = [
    { id: 1, title: 'Car 1' },
    { id: 2, title: 'Car 2' }
];

function onDragStart(e, id) {
    e.dataTransfer.setData('id', id);
}

function onDragOver(e) {
    e.preventDefault();
}



function Board() {
    const [loading, error, data] = useDataFetching(
        'https://my-json-server.typicode.com/aisora1222/final/cars'
    );

    const [tasks, setTasks] = useState([]);
    const [lanesData, setLanesData] = useState(lanes.map(lane => ({ ...lane, car: null })));

    useEffect(() => {
        console.log('Data in Board:', data);
        setTasks(data.map(task => ({ ...task, lane: null })));
    }, [data]);

    function onDrop(e, laneId) {
        const id = e.dataTransfer.getData('id');
        const laneIndex = lanesData.findIndex(lane => lane.id === laneId);

        if (lanesData[laneIndex].car !== null) {
            alert('Only one car is allowed per lane.');
            return;
        }

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

    const lane1Car = lanesData.find(lane => lane.id === 1)?.car;
    const lane2Car = lanesData.find(lane => lane.id === 2)?.car;

    const highlightAttributes = {};

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
