import styled from 'styled-components';


export const CustomButton = styled.button`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background-color: ${({ backgroundColor }) => backgroundColor};
    opacity: ${({ disabled }) => disabled ? '0.4' : '1'};
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
`;

export const Label = styled.p`
    color: ${({ labelColor }) => labelColor};
    font-size: 17px;
    font-weight: 700;
`;