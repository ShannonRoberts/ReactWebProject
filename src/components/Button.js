import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
    background: ${({primary}) => (primary === "true" ? '#055BE3' : '#0FC7D6')};
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width:200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
    color: ${({primary}) => (primary ? '#fff' : '#fff')};
    font-size: ${({big}) => (big ? '24px' : '14px')};
    border-radius: 5px;

    &:hover {
        transform: translateY(-2px);
    };

    @media screen and (max-width: 768px){

        margin-bottom:2rem;
      }
`;