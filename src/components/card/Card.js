import React from 'react';
import styled from 'styled-components';
import soshols from '../assets/soshols.png'

const CardWrapper = styled.div`
    height: 310px;
    margin: 0px 0px 1.5em;
    position: relative;
    cursor: pointer;
    object-fit: cover;
    background-color: var(--text-color);
    background-position: center center;
    background-repeat: no-repeat;
    overflow: hidden;
    padding: 1.4rem 2rem;
    display: flex;
    align-items: flex-end;
    border-radius: 9px;
    break-inside: avoid;

    @media only screen and (min-width: 1024px){
        column-count: 2;
    }
`;

const CardImage = styled.img`
    position: absolute;
    object-fit: cover;
    width: 100% !important;
    height: 100% !important;
    left: 0px !important;
    top: 0px !important;

    &img{
        vertical-align: middle;
        border-style: none;
    }
`;

const Card = () => {
    return (
    <CardWrapper>
            <CardImage src={soshols}/>
        <h2>Soshols</h2>
        <p>lorem12</p>
    </CardWrapper>
    );
};

export default Card;
