import styled from "styled-components";

const CarWrapper = styled.div`
    background: darkGray;
    padding: 20px;
    border-radius: 20px;
    margin: 0% 5% 5% 5%;
    color: white; 
    width: 200px;
`;
const Title = styled.h3`
    width: 100%;
    margin: 0;
`;
const Image = styled.img`
    width: 100%;
    height: 150px; 
    border-radius: 10px;
    margin-top: 10px;
    display: ${props => props.show ? 'block' : 'none'};
`;

const Info = styled.div`
    margin-top: 10px;
    display: ${props => props.show ? 'block' : 'none'};
`;

const InfoItem = styled.div`
    margin-bottom: 5px;
    color: ${props => props.isHighlighted ? 'red' : 'white'};
`;

function Cars({ id, image, manufacturer, model, year, country, category, price, zerosixty, weight, hp, torque, size, seats, onDragStart, highlightAttributes = {}, showImage }) {
    return (
        <CarWrapper
            draggable
            onDragStart={(e) => onDragStart(e, id)}
        >
            <Title>{manufacturer} {model}</Title>
            <Image src={image} alt={`${manufacturer} ${model}`} show={showImage} />
            <Info show={showImage}>
                <InfoItem><strong>Year:</strong> {year}</InfoItem>
                <InfoItem><strong>Country:</strong> {country}</InfoItem>
                <InfoItem><strong>Category:</strong> {category}</InfoItem>
                <InfoItem isHighlighted={highlightAttributes.price}><strong>Price:</strong> ${price}</InfoItem>
                <InfoItem isHighlighted={highlightAttributes.zerosixty}><strong>0-60 mph:</strong> {zerosixty} seconds</InfoItem>
                <InfoItem isHighlighted={highlightAttributes.weight}><strong>Weight:</strong> {weight} lbs</InfoItem>
                <InfoItem isHighlighted={highlightAttributes.hp}><strong>Horsepower:</strong> {hp} hp</InfoItem>
                <InfoItem isHighlighted={highlightAttributes.torque}><strong>Torque:</strong> {torque} lb-ft</InfoItem>
                <InfoItem isHighlighted={highlightAttributes.size}><strong>Size:</strong> {size} mm</InfoItem>
                <InfoItem><strong>Seats:</strong> {seats}</InfoItem>
            </Info>
        </CarWrapper>
    );
}

export default Cars;
