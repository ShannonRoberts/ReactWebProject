import React from 'react'
import styled from 'styled-components'

const ContactForm = () => {

    

    const Content = styled.div`
        width: 100%;
        height: 100%

    `; 

    const Form = styled.form`
        padding:2rem;
        margin:0rem 2rem 2rem 2rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 20px;
        background: #1E2121;
        color:#fff;
        font-size: 20px;
       
        h1{
            padding: 1rem;
        }
    `; 

    const FormInputs = styled.div`
        padding: 1rem;
        
    `;
    
    const FormLabel = styled.label`
        margin-right:2rem;
    `; 

    const FormInput = styled.input`
        width:100%;
        height:2rem;
        border-radius: 10px;
        margin-top: 8px;
        background:#64C7D6;
        font-size: 16px;
    `; 

    const FormSelect = styled.select`
        width:100%;
        height:2rem;
        border-radius: 10px;
        margin-top: 8px;
        background:#64C7D6;
        font-size: 16px;
    `; 

    const FormMessage = styled.textarea`
        width:100%;
        border-radius: 10px;
        resize: none;
        margin-top: 8px;
        background:#64C7D6;
        font-size: 16px;
    `; 

    const FormButton = styled.button`
        width: 100%;
        height:3rem;
        border-radius: 40px;
        background: #64C7D6;
        color: #1E2121;
        font-size: 25px;
        font-weight:800;
    `; 


    return (
        <Content>
            
            <Form>
                <h1>Send us a message</h1>
                <FormInputs>
                    <FormLabel htmlFor='name'>Name:</FormLabel>
                    <FormInput id='name' name='name' ></FormInput>
                </FormInputs>
                <FormInputs>
                    <FormLabel htmlFor='category'>What are you enquiring about?:</FormLabel>
                    <FormSelect id='category' name='category' >
                        <option>Design</option>
                        <option>Photography</option>
                        <option>Installations</option>
                        <option>Illustration</option>
                        <option>Quote</option>
                        <option>Other</option>
                    </FormSelect>
                </FormInputs>
                <FormInputs>
                    <FormLabel htmlFor='message'>Message:</FormLabel>
                    <FormMessage id='message' name='message' rows={10}></FormMessage>
                </FormInputs>
                <FormButton>SUBMIT</FormButton>
            </Form>
        </Content>
    )
}

export default ContactForm
