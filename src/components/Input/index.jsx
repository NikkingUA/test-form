import React from 'react';

import {
    InputField,
    Label,
    InputContainer,
    ErrorLabel
} from './style';

import { colors } from '../../utils/colors';

const Input = ({
    type = 'text',
    placeholder,
    onChange,
    width = '100%',
    height = '50px',
    borderColor = colors.gray,
    inputLabel = "Label",
    validationError,
    value
}) => {

    const handelChange = (e) => {
        onChange(e.target.value);
    };

    console.log(validationError)

    return (
        <InputContainer>
            <Label>
                {inputLabel}
            </Label>
            <InputField
                type={type}
                placeholder={placeholder}
                onChange={handelChange}
                width={width}
                height={height}
                borderColor={borderColor}
                validationError={validationError}
                value={value}
                min={0}
                max={120}
            />
            <ErrorLabel>
                {validationError.length > 0 && validationError}
            </ErrorLabel>
        </InputContainer>
    );
};

export default Input;