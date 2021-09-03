import React from 'react';
// import InputMask from 'react-input-mask';
import { Box, Input } from './styles';

function InputBox(props) {

    const {
        icon: Icon,
        hasError,
        mask,
        maskChar,
        value,
        onChange,
        placeholder,
        onKeyDown
    } = props;

    return (
        <Box hasError={hasError}>
            <Icon />
            <Input
                value={value}
                onChange={onChange}
                mask={mask}
                maskChar={maskChar}
                placeholder={placeholder}
                onKeyDown={onKeyDown}
            />
        </Box>
    );

}

export default InputBox;