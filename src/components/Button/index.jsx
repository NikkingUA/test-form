import React from 'react';
import { CustomButton, Label } from './style';
import { colors } from '../../utils/colors';

const Button = ({
    label = "button",
    labelColor = colors.white,
    backgroundColor = colors.green,
    disabled = false,
    onClick,
    width = "70px",
    height = "50px"
}) => {
    return (
        <CustomButton
            onClick={disabled ? () => null : onClick}
            backgroundColor={backgroundColor}
            disabled={disabled}
            type="button"
            width={width}
            height={height}
        >
            <Label labelColor={labelColor}>{label}</Label>
        </CustomButton>
    );
};

export default Button;

