import React from "react";


import {
    PaddingContainer,
    Heading,
    BlueText,
    FlexContainer,
    Button,
    ButtonMes
} from '../styles/Global.styled'

import { ContactForm,FormInput,FormLabel } from "../styles/Footer.styled";

const Footer = () => {
    return(

    <PaddingContainer 
    id="contact"
    top="5%"
    bottom="10%"
    >
        <Heading
        as="h4"
        size="h4"
        align="center">
            My Contact
            </Heading>
        <Heading as="h2" size="h2" align="center" top="0.5rem">
            Contact <BlueText> Me here</BlueText>
        </Heading>

        <PaddingContainer top="3rem">
            <FlexContainer justify="center">
                <ContactForm>
                    <PaddingContainer bottom="3rem">
                        
                        <PaddingContainer bottom="0.5rem" >
                            <FormLabel>Name: </FormLabel>
                            </PaddingContainer>
                        <FormInput
                        type="text"
                        placeholder="Enter your name"
                        />
                        <PaddingContainer bottom="0.5rem" top="1rem">
                            <FormLabel>Email: </FormLabel>
                            </PaddingContainer>
                        <FormInput
                        type="text"
                        placeholder="Enter your email"
                        />
                        <PaddingContainer bottom="0.5rem" top="1rem">
                            <FormLabel>Message: </FormLabel>
                            </PaddingContainer>
                        <FormInput
                        as="textarea"
                        placeholder="Enter your message"
                        />
                        <PaddingContainer top="2rem">
                        <FlexContainer justify="center" >
                            <ButtonMes>Send Message</ButtonMes>
                        </FlexContainer>
                        </PaddingContainer>
                        
                    </PaddingContainer>
                </ContactForm>
            </FlexContainer>
        </PaddingContainer>
    </PaddingContainer>
        )
}

export default Footer