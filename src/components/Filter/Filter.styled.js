import styled from "styled-components";

export const LabelFilter = styled.label`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 700;
    font-size: 24px;

    margin-right: 10px;
`; 

export const InputFilter = styled.input`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 400;
    font-size: 24px;
    outline: none;
    border: 2px solid gray;
    border-radius: 5px;
    &:focus {
    border: 3px solid gray;
}
`;    