import React from 'react';
import Input from '../Input';
import { InputContainer } from './style';


const InputView = ({
    formStep,
    formDataInput,
    handleChange,
    error
}) => {
    const inputStep = () => {
        switch (formStep) {
            case 1:
                return (
                    <InputContainer>
                        <Input
                            placeholder="Name"
                            onChange={(value) => handleChange('name', value)}
                            height="60px"
                            inputLabel="Name*"
                            value={formDataInput.name}
                            validationError={error}
                        />
                    </InputContainer>
                )
            case 2:
                return (
                    <InputContainer>
                        <Input
                            placeholder="Lastname"
                            onChange={(value) => handleChange('lastname', value)}
                            height="60px"
                            inputLabel="Lastname*"
                            value={formDataInput.lastname}
                            validationError={error}
                        />
                    </InputContainer>
                )
            case 3:
                return (
                    <InputContainer>
                        <Input
                            type="email"
                            placeholder="Email"
                            onChange={(value) => handleChange('email', value)}
                            height="60px"
                            inputLabel="Email*"
                            value={formDataInput.email}
                            validationError={error}
                        />
                    </InputContainer>
                )
            default:
                return (
                    <InputContainer>
                        <Input
                            placeholder="Name"
                            onChange={(value) => handleChange('name', value)}
                            height="60px"
                            inputLabel="Name*"
                            value={formDataInput.name}
                            validationError={error}
                        />
                    </InputContainer>
                )
        }
    }

    return inputStep();
};


export default InputView;