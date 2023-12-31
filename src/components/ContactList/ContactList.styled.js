import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`; 

export const Item = styled.li`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    font-size: 24px;

    display: flex;
    justify-content:space-between;
`; 

export const Button = styled.button`
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid gray;

    padding: 5px;

    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 700;
    font-size: 24px;
    &:active, 
    &:hover,
    &:focus {
        background-color: #32CD32;
        color: white;
        border-color: none;
}`; 
    