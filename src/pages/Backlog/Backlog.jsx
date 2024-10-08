/*Jewoo Lee*/
import styled from 'styled-components';
import Cars from '../../components/Cars/Cars';
import useDataFetching from '../../hooks/useDataFetching';
import { useEffect } from 'react';
/*Styling with styled components*/
const BacklogContainer = styled.div`
    padding: 3%;
    border: 5px dashed;
`;

const Title = styled.h2`
    text-align: center;
`;

const TasksWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;
/*Fetch the Data of cars from fake Json file*/
function Backlog() {
    const [loading, error, tasks] = useDataFetching(
        'https://my-json-server.typicode.com/aisora1222/final/cars'
    );
    /*function for drag start*/
    function onDragStart(e, id) {
        e.dataTransfer.setData('id', id);
    }
    /* Log the fetched tasks to the console whenever they change */
    useEffect(() => {
    useEffect(() => {
        console.log('Tasks in Backlog:', tasks);
    }, [tasks]);

    return (
        <BacklogContainer>
            <Title> Garage </Title>
            <TasksWrapper>
                /* Display loading or error message */
                {loading || error ? (
                    <span>{error || 'Loading...'}</span>
                ) : (
                    tasks.map(task => (
                        <Cars
                            key={task.id}
                            id={task.id}
                            image={task.image}
                            manufacturer={task.manufacturer}
                            model={task.model}
                            year={task.year}
                            country={task.country}
                            category={task.category}
                            price={task.price}
                            zerosixty={task.zerosixty}
                            weight={task.weight}
                            hp={task.hp}
                            torque={task.torque}
                            size={task.size}
                            seats={task.seats}
                            onDragStart={onDragStart}
                            showImage={false}
                        />
                    ))
                )}
            </TasksWrapper>
        </BacklogContainer>
    );
}

export default Backlog;
