import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 200px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
`;

export const SuccessIcon = styled.div`
  color: green;
  font-size: 48px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: green;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Message = styled.div`
    margin: 5px 0 20px 0;
`;