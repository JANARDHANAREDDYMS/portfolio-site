import React from "react";
import { motion } from "framer-motion";

import {
    PaddingContainer,
    Heading,
    BlueText,
    FlexContainer,
    Button,
    ButtonMes
} from '../styles/Global.styled'

import { ContactForm,FormInput,FormLabel } from "../styles/Footer.styled";
import { fadeInLeftVariant,fadeInRightVariant,fadeInTopVariant,fadeOutLeft1Variant,fadeOutLeftVariant,fadeOutRightVariant,fadeInNoVariant,fadeInBottomVariant} from "../utils/Variants";

const Footer = () => {
    return(

    <PaddingContainer 
    id="contact"
    top="5%"
    bottom="1rem"
    >
        <Heading
        as={motion.h4}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
        align="center">
            My Contact
            </Heading>
        <Heading 
        as={motion.h2}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h2" align="center" top="0.5rem">
            Contact <BlueText> Me here</BlueText>
        </Heading>

        <PaddingContainer top="3rem">
            <FlexContainer 
            as={motion.div}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
            size="h4"justify="center">
                <ContactForm class="contact" action="https://formsubmit.co/hibyemailid@gmail.com" method="POST">
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
                        <FlexContainer justify="center" 
                        responsiveFlex>
                            <ButtonMes as={motion.button}
                        whileHover={{scale:1.2}}>Send Message</ButtonMes>
                        </FlexContainer>
                        </PaddingContainer>

                        <PaddingContainer top="12rem">
                            <Heading as="h5" size="h5">
                                This site is developed and maintained by<BlueText>Janardhana Reddy M S,</BlueText>
                            can be reached out in case of 
                            <PaddingContainer left="15rem">
                                <Heading>
                                any problems
                                </Heading>
                                </PaddingContainer></Heading>
                        </PaddingContainer>
                        
                    </PaddingContainer>
                </ContactForm>
            </FlexContainer>
        </PaddingContainer>
    </PaddingContainer>
        )
}

export default Footer