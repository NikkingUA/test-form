import styled from 'styled-components';


export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90%;

     @media (min-width: 751px) {
       justify-content: space-between;
       height: 400px;
       background-color: rgba(109, 108, 109, 0.1);
       width: 600px;
       border-radius: 20px;
       padding: 20px;
     }
`;

export const InputContainer = styled.div``;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (min-width: 751px) {
       width: 100%;
       margin-top: 15px;
     }
`;

export const HeaderTitle = styled.h1`
    margin-bottom: 20px;
`;

export const GeneralContainer = styled.div`
    height: 100vh;
    padding: 20px;

    @media (min-width: 751px) {
       display: flex;
       flex-direction: column;
       align-items: center;
     }
`; 