import styled from 'styled-components';
import { colors } from '../../utils/colors';



export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const InputField = styled.input`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border: 0.1rem solid ${({ borderColor, validationError }) => validationError ? colors.errorRed : borderColor};
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-size: 14px;
    outline-style: none;

     @media (min-width: 751px) {
        width: 100%;
     }
`;


export const Label = styled.div`
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 7px;
`;


export const ErrorLabel = styled.p`
    color: ${colors.errorRed};
    font-size: 14px;
    margin-top: 5px;
    height: 20px;
`;