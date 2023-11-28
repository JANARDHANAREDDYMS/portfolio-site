import React from "react";
import { PaddingContainer,Heading,BlueText,DarkBlueText, FlexContainer, IconContainer } from "../styles/Global.styled";

import { FaInstagramSquare,FaTwitterSquare,FaLinkedin,FaGithubSquare } from "react-icons/fa";
import { AiOutlineInstagram,AiOutlineTwitter,AiOutlineGithub,AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaDiamond } from "react-icons/fa6";

import Project1 from "../assets/project1.jpg"

export const LowerFooter=()=>{

    return(
        <PaddingContainer
        top="5%"
        bottom="1%"
        >
            <PaddingContainer >
            <Heading as="h3" size="h3" align="center">
                <DarkBlueText>Janardhana Reddy M S</DarkBlueText>
            </Heading>
            </PaddingContainer>

            <PaddingContainer top="1.5rem">
                <FlexContainer align="center" gap="0.2rem" justify="center">
                {/* <IconContainer  align="center" color="white">
                    <FaDiamond/>
                </IconContainer> */}
                <PaddingContainer>
                
                <div style={{ width: '20rem', borderBottom: '2px solid #152842',}}></div>
                </PaddingContainer>
                <IconContainer  align="center" color="dark_blue" size="0.6rem">
                    <FaDiamond/>
                </IconContainer>
                <IconContainer  align="center" color="dark_blue" size="1rem">
                    <FaDiamond/>
                </IconContainer>
                <IconContainer  align="center" color="dark_blue" size="0.6rem">
                    <FaDiamond/>
                </IconContainer>
                <PaddingContainer>
                <div style={{ width: '20rem', borderBottom: '2px solid #152842'}}></div>
                </PaddingContainer>
                
                {/* <IconContainer  align="center" color="white">
                    <FaDiamond/>
                </IconContainer> */}
                </FlexContainer>
                
            </PaddingContainer>

            
        <PaddingContainer top="1.5rem" left="37.7rem">
        <FlexContainer align="center" gap="1rem" >
                <IconContainer size="2rem">
                    <AiOutlineInstagram />
                </IconContainer>
                <IconContainer size="2rem">
                    <AiOutlineTwitter />
                </IconContainer>
                <IconContainer size="2rem">
                    <AiOutlineGithub />
                </IconContainer>
                <IconContainer size="2rem">
                    <AiOutlineLinkedin />
                </IconContainer>
                <IconContainer size="2rem">
                    <MdOutlineMailOutline />
                </IconContainer>
            </FlexContainer>
        </PaddingContainer>
            
            
            
        <PaddingContainer top="5rem" left="25rem">
                            <DarkBlueText as="h5" size="h5">
                                This site is developed and maintained by<BlueText>@Janardhana Reddy M S,</BlueText>
                            can be reached out in case of 
                            <PaddingContainer left="17.1rem">
                                <DarkBlueText>
                                any problems
                                </DarkBlueText>
                                </PaddingContainer></DarkBlueText>
                        </PaddingContainer>
        </PaddingContainer>
    )

}


export default LowerFooter