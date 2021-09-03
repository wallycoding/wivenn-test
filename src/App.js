import React, { useState } from 'react';
import { RiMailLine, RiPhoneFill, RiUserLine, RiUserLocationLine, RiDraftLine } from 'react-icons/ri';

import validator from 'validator';
import { Container, Header, Image, Paragraph, Form, Title, Content, MessageStatus, Button } from './styles';
import InputBox from './components/InputBox';
import InputFile from './components/InputFile';

import { onChangeText } from './services/input';
import bgLogo from './assets/bg-2.svg';

function App() {

    const [success, setSuccess] = useState('');
    const [errors, setErrors] = useState([]);
    const [error, setError] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const [location, setLocation] = useState('');
    const [file, setFile] = useState(null);

    const sendForm = () => {

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('numberPhone', numberPhone);
        formData.append('location', location);
        formData.append('file', file);

        console.log(formData);
        setSuccess('Enviado com sucesso!');

        setName('');
        setEmail('');
        setNumberPhone('');
        setLocation('');
        setFile(null);

    }

    const verifyErrors = () => {
        [name, email, numberPhone, location].forEach((data, i) => {
            if (validator.isEmpty(data.trim())) throw [i, 'Preencha o campo em vermelho corretamente!']
            if (!validator.isEmail(email)) throw [1, 'Esse email não é válido!'];
            if (!validator.isMobilePhone(numberPhone)) throw [2, 'Digite um número válido!'];
        });
        if (!file) throw [4, 'Selecione seu Currículo!'];
    };

    const onSubmit = () => {
        try {
            setSuccess('');
            setErrors([]);
            setError('');
            verifyErrors();
            sendForm();
        } catch (error) {
            const errors = [];
            errors[error[0]] = true;
            setErrors(errors);
            setError(error[1]);
        }
    }

    return (
        <Container>
            <Header>
                <Image src={bgLogo} alt="image-icon" />
                <Paragraph>Contate-Nos.</Paragraph>
            </Header>
            <Content>
                <Form onSubmit={event => event.preventDefault()}>
                    <Title>Formulário de contato</Title>
                    <InputBox
                        value={name}
                        onChange={onChangeText(setName)}
                        icon={RiUserLine}
                        placeholder="Nome..."
                        hasError={errors[0]}
                    />
                    <InputBox
                        value={email}
                        onChange={onChangeText(setEmail)}
                        icon={RiMailLine}
                        placeholder="E-mail..."
                        hasError={errors[1]}
                    />
                    <InputBox
                        value={numberPhone}
                        onChange={onChangeText(setNumberPhone)}
                        icon={RiPhoneFill}
                        placeholder="Número..."
                        hasError={errors[2]}
                    />
                    <InputBox
                        value={location}
                        onChange={onChangeText(setLocation)}
                        icon={RiUserLocationLine}
                        placeholder="Localização..."
                        hasError={errors[3]}
                    />
                    <InputFile
                        value={file}
                        icon={RiDraftLine}
                        hasError={errors[4]}
                        onChangeFile={file => {
                            setFile(() => {
                                try {
                                    setErrors([]);
                                    setError('');
                                    [name, email, numberPhone, location].forEach((data, i) => {
                                        if (validator.isEmpty(data.trim())) throw [i, 'Preencha o campo em vermelho corretamente!']
                                        if (!validator.isEmail(email)) throw [1, 'Esse email não é válido!'];
                                        if (!validator.isMobilePhone(numberPhone)) throw [2, 'Digite um número válido!'];
                                    });
                                } catch (error) {
                                    const errors = [];
                                    errors[error[0]] = true;
                                    setErrors(errors);
                                    setError(error[1]);
                                }
                                return file
                            });
                        }}
                        onError={msgError => {
                            const errors = [];
                            errors[4] = true;
                            setErrors(errors);
                            setError(msgError);
                        }}
                    />
                    {!!error && <MessageStatus color="#F44A4A">{error}</MessageStatus>}
                    {!!success && <MessageStatus color="#4AF4A5">{success}</MessageStatus>}
                    <Button onClick={onSubmit}>Enviar Formulário</Button>
                </Form>
            </Content>
        </Container>
    );
}

export default App;
