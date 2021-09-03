import React, { useState, useEffect } from 'react';
import { Box, Text } from './styles';

function InputFile(props) {

    const { icon: Icon, hasError, value, onChangeFile, onError } = props;
    const [fileInfo, setFileInfo] = useState();

    const bytesToSize = (bytes, maxSize, error) => {
        try {
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            if (bytes === 0) return '0 Byte';

            const i = Math.floor(Math.log(bytes) / Math.log(1024));
            const size = bytes / Math.pow(1024, i);

            let [intSize, floorSize] = size.toString().split('.');
            const isExededLimit = i > sizes.indexOf(maxSize[0]) || (sizes.indexOf(maxSize[0]) === i && size > maxSize[1]);
            if (isExededLimit) {
                error && error('O tamanho máximo permitido é 500 KB!');
                return;
            }

            if (floorSize) {
                floorSize = floorSize.substr(0, 2);
                return `${intSize},${floorSize} ${sizes[i]}`;
            } else {
                return `${intSize} ${sizes[i]}`;
            }

        } catch (error) {
            console.log(error);
        }
    }

    const readFile = () => {

        const fileReader = window.document.createElement('input');
        fileReader.type = 'file';
        fileReader.accept = '.doc,.docx,.pdf,.txt';
        fileReader.onchange = (event) => {

            const typesAllowed = ['doc', 'docx', 'pdf', 'txt'];
            const file = fileReader.files[0];
            const [, extension] = file.name.split('.');

            if (!typesAllowed.includes(extension.toLowerCase())) return onError('A Extensão do arquivo não é valida!');
            const size = bytesToSize(file.size, ['KB', 500], onError);

            if (size) {
                onChangeFile && onChangeFile(file, fileReader, event);
                setFileInfo({
                    name: file.name,
                    size
                });
            }
        }
        fileReader.click();

    }

    useEffect(() => {

        if (value) {
            const size = bytesToSize(value.size, ['KB', 500], onError);
            if (size) {
                setFileInfo({
                    name: value.name,
                    size
                });
            }
        } else {
            setFileInfo(null);
        }

    }, [props]);

    return (
        <Box onClick={readFile} hasError={hasError}>
            <Icon />
            {
                fileInfo ? (
                    <Text style={{ color: "#fff" }}>{fileInfo.name} - {fileInfo.size}</Text>
                ) : <Text>Selecione o arquivo</Text>
            }
        </Box>
    );

}

export default InputFile;