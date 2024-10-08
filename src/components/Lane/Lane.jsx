/* Ethan */
import styled from "styled-components";
import Cars from '../Cars/Cars.jsx';

/* Lane Styling */
const LaneWrapper = styled.div`
    text-align: left;
    padding: 0;
    background: lightGray;
    border-radius: 20px;
    min-height: 70vh;
    width: 40%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    

    @media (max-width: 768px) {
        margin-bottom: 5%;
        width: 100%;
    }
`;

const Title = styled.h2`
    width: 100%;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid darkGray;
`;

/* Ethan */
/* Component where the cars get placed for comparison */
export default function Lane({
                  laneId,
                  title,
                  loading,
                  error,
                  tasks,
                  onDragStart,
                  onDragOver,
                  onDrop,
                  highlightAttributes = {}
              }) {
    return (
        /* Handles the drag and drop functionality */
        <LaneWrapper onDragOver={onDragOver} onDrop={(e) => onDrop(e, laneId)}>
            <Title>{title}</Title>
            {loading || error ? (
                <span>{error || 'Loading...'}</span>
            ) : (
                /* Maps car attributes to display in the lane, then passes them to
                * the Cars function from Cars.jsx as props*/
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
                        highlightAttributes={highlightAttributes[task.id] || {}}
                        showImage={true}
                    />
                ))
            )}
        </LaneWrapper>
    );
}


