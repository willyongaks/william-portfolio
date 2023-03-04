import styled from 'styled-components.macro';

export const CardWrapper = styled.div`
    display: grid;
    grid-template-column: 300px;
    grid-template-column: 210px 210px 80px;
    border-radius: 18px;
    background: var(--primary-color);
    text-align: center;
`;

export const CardImage = styled.div`
    grid-area: image;
    background-image: url('../../../assets/soshols.png');
    background-size: cover;
`;