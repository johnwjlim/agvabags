import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border: 0.5px solid #767676;
    padding: 3em 2em;
`;

const FormSection = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        display: block;
    }
`;

const InputGroup = styled.div`
    margin: 0 2em;
`;

const Label = styled.label`
    display: block;
    font-family: "Montserrat", "sans serif";
    font-size: 12px;
    color: #484848;
    // margin-bottom: 1.2em;
    width: 50%;
`;

const TextArea = styled.textarea.attrs({
})`
    font-family: "Open Sans", "sans serif";
    color: #484848;
    font-size: 14px;
    margin: 0.35em 0;
    padding: 0.5em;
    border: 0.5px solid #dddddd;
    border-radius: 4px;
    width: 300px;
    height: 219px;
    margin-bottom: 1.2em;

    @media (max-width: 475px) {
        width: 230px;
    }

`;

const SubmitButton = styled.button.attrs({
})`
    font-family: "Montserrat", "sans serif";
    font-size: 13px;    
    color: white;
    background-color: #009688;
    cursor: pointer; 
    margin: 0;  
    border-color: white;
    border-radius: 5px;
    padding: 0.5em 2em;

    &:hover {
        background-color: white;
        color: #009688;
        transition: 0.2s;
        border-color: #009688;
    }
`;

const Form = (props) => (
    <Container>
        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field"/>
            <FormSection>
                <InputGroup>
                    <Label>Your Name</Label>
                    <input type="text" name="name" className="input"/>
                    <Label>Email</Label>
                    <input type="email" name="email" className="input"/>
                    <Label>Company</Label>
                    <input type="text" name="company" className="input"/>
                </InputGroup>
                <InputGroup>
                    <Label>Comments</Label>
                    <TextArea name="message"></TextArea>
                </InputGroup>
            </FormSection>
            <FormSection>
                <SubmitButton>Submit</SubmitButton>
            </FormSection>
        </form>
    </Container>
)

export default Form;