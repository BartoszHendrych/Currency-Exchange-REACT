import styled  from "styled-components";

export const StyledForm = styled.form`
    max-width: 700px;
    margin: auto;
    padding: 30px;
    font-family: 'Roboto', sans-serif;
    border-radius: 5px;
`;

export const Legend = styled.legend`
    border: 2px solid #cccccc;
    background-color: #fdd14a;
    padding: 5px;
    border-radius: 5px;
`;

export const Fieldset = styled.fieldset`
    border-radius: 5px;
    padding: 30px;
`;

export const Tag = styled.span`
    width: 100%;
    max-width: 200px;
    display: inline-block;
    padding: 10px;
`;

export const EnterValue = styled.input`
    padding: 10px;
    width: 100%;
    max-width: 300px;
    border: 2px solid #cccccc;
    border-radius: 5px;
`;

export const SelectedCurrency = styled.select`
    padding: 10px;
    width: 100%;
    max-width: 300px;
    border: 2px solid #cccccc;
    border-radius: 5px;
`;

export const Button = styled.button`
    padding: 10px;
    margin-top: 20px;
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: #fdd049;
    cursor: pointer;

    &:hover { 
    background-color: #edb302;
    }
`;

export const Sum = styled.div`
    text-align: center;
    color: #000000;
    font-size: x-large;
`;
