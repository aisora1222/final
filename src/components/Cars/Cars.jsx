/* Ethan */
import styled from "styled-components";

/* Car Styling */
const CarWrapper = styled.div`
    background: darkGray;
    padding: 8%;
    border-radius: 20px;
    margin: 0% 5% 5% 5%;
    color: white; 
    width: 50%;
`;
const Title = styled.h3`
    width: 100%;
    margin: 0 auto;
`;
const Image = styled.img`
    width: 100%;
    height: auto; 
    border-radius: 10px;
    margin-top: 8%;
    display: ${props => props.show ? 'block' : 'none'};
`;

/* The following 3 styled.div tags help visualize which car attributes are better or worse
* than the car being compared to */
const Info = styled.div`
    margin-top: 10px;
    display: ${props => props.show ? 'block' : 'none'};
`;

const InfoItemCompare = styled.div`
    margin-bottom: 5px;
    color: ${props => props.isHighlighted ? "#E13D3D" : "green"};
`;

const InfoItem = styled.div`
    margin-bottom: 5px;
`;

/* Ethan */
/* Component that displays the Cars information based on the props being passed to it */
export default function Cars({
                                 id,
                                 image,
                                 manufacturer,
                                 model,
                                 year,
                                 country,
                                 category,
                                 price,
                                 zerosixty,
                                 weight,
                                 hp,
                                 torque,
                                 size,
                                 seats,
                                 onDragStart,
                                 highlightAttributes = {},
                                 showImage
                            }) {
    return (
        /* Makes the car draggable */
        <CarWrapper
            draggable
            onDragStart={(e) => onDragStart(e, id)}
        >
            {/* Displays all the car's information along with the proper stylistic choices */}
            <Title>{manufacturer} {model}</Title>
            <Image src={image} alt={`${manufacturer} ${model}`} show={showImage} />
            <Info show={showImage}>
                <InfoItem><strong>Year:</strong> {year}</InfoItem>
                <InfoItem><strong>Country:</strong> {country}</InfoItem>
                <InfoItem><strong>Category:</strong> {category}</InfoItem>
                <InfoItemCompare isHighlighted={highlightAttributes.price}><strong>Price:</strong> ${price}</InfoItemCompare>
                <InfoItemCompare isHighlighted={highlightAttributes.zerosixty}><strong>0-60 mph:</strong> {zerosixty} seconds</InfoItemCompare>
                <InfoItemCompare isHighlighted={highlightAttributes.weight}><strong>Weight:</strong> {weight} lbs</InfoItemCompare>
                <InfoItemCompare isHighlighted={highlightAttributes.hp}><strong>Horsepower:</strong> {hp} hp</InfoItemCompare>
                <InfoItemCompare isHighlighted={highlightAttributes.torque}><strong>Torque:</strong> {torque} lb-ft</InfoItemCompare>
                <InfoItemCompare isHighlighted={highlightAttributes.size}><strong>Size:</strong> {size} mm</InfoItemCompare>
                <InfoItem><strong>Seats:</strong> {seats}</InfoItem>
            </Info>
        </CarWrapper>
    );
}

