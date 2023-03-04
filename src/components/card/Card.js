import React from 'react';
import styled from 'styled-components';
import soshols from '../assets/soshols.png';


const CardContent = styled.div`
    opacity: 0;
    transform: translateY(30%);
    transition: opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s;
    background: radial-gradient(circle at center center, white 10%, whitesmoke 11%, whitesmoke 100%);
`;
const CardWrapper = styled.div`
    height: 310px;
    display: flex;
    align-items: flex-end;
    margin: 0px 0px 1.5em;
    position: relative;
    cursor: pointer;
    object-fit: cover;
    background-color: var(--text-color);
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;
    padding: 1.4rem 2rem;
    border-radius: 9px;
    break-inside: avoid;
    position: relative;

    &:hover ${CardContent} {
        opacity: 1;
        transform: translateY(0);
    }

    &::before {
        content: '';
        pointer-events: none;
        display: block;
        position: absolute;
        inset: -1;
        background: radial-gradient(circle at center center, white 10%, whitesmoke 11%, whitesmoke 100%);
    }

    &::after {
        content: '';
        pointer-events: none;
        position: absolute;
        z-index: 1;
        inset: 0px;
        opacity: 0.3;
        background: linear-gradient(rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.78) 80%);
    }
`;

const CardImage = styled.img`
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    grid-area: image;
    background-size: cover;
    vertical-align: middle;
    border-style: none;
`;



const CardContentSpaned = styled.span`
    display: flex;
    flex-wrap: wrap;
`;

const Card = () => {
    return (
        <CardWrapper>
            <CardImage src={soshols} />
            <CardContent>
                <h2>Soshols</h2>
                <p>lorem12</p>
                <CardContentSpaned>
                    <p>Nexjs (React)</p>
                </CardContentSpaned>
            </CardContent>

        </CardWrapper>
    );
};

export default Card;
