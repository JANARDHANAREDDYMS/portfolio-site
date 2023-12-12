import React from "react";
import { motion } from "framer-motion";
import { fadeInTopVariant } from "../utils/Variants";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa";
import { BsPersonHeart } from "react-icons/bs";


import {
    PaddingContainer,
    FlexContainer,
    IconContainer,
    BYText,
    BlueText,
    Heading,
    Button,
    Buttoninfo,
    ParaText
    
} from '../styles/Global.styled'

import {
    LowerBodyInfo,InfoContainer
} from '../styles/Bginfo.styled'



const Info = () => {
    return(

        <PaddingContainer top="8%" bottom="10%" responsieLeft="1rem">

            <PaddingContainer left="44%" bottom="2em">
                <Heading size="h2" as="h2">About Me</Heading>
            </PaddingContainer>
            <PaddingContainer bottom="2.1rem">
            <div style={{ width: '60%', borderBottom: '2px solid white', marginBottom: '1rem',margin: 'auto'}}></div>
            </PaddingContainer>
            <PaddingContainer left="21rem">
            <FlexContainer align="center" gap="2rem" resposiveFlex>
                <Buttoninfo style={{width:'15rem'}}>
                <LowerBodyInfo><InfoContainer>
                <ParaText style={{paddingBottom:"1rem",fontSize:'1.2rem'}}>Education</ParaText>
                <IconContainer size="1.2rem">
                    <RiGraduationCapFill />
                </IconContainer>
                <ParaText>Bangalore Institute of Technology</ParaText>
                <ParaText>CGPA : 9.2(until 6th sem)</ParaText>
                </InfoContainer></LowerBodyInfo>
                </Buttoninfo>

                <Buttoninfo style={{width:'15rem'}}>
                <LowerBodyInfo><InfoContainer>
                <ParaText style={{paddingBottom:"1rem",fontSize:'1.2rem'}}>Interests</ParaText>
                <IconContainer size="1.2rem">
                <FaLightbulb />    
                </IconContainer> 
                <ParaText>
                Web Development   
                </ParaText>
                <ParaText>
                Machine learning 
                </ParaText>
                <ParaText>
                Full Stack Development
                </ParaText>
                <ParaText>
                Android Development
                </ParaText>  
                </InfoContainer></LowerBodyInfo>
                </Buttoninfo>

                <Buttoninfo style={{width:'15rem'}}>
                <LowerBodyInfo style={{height:'12rem'}} ><InfoContainer>
                <ParaText style={{paddingBottom:"1rem",fontSize:'1.2rem'}}>Extra Ciriculars</ParaText>
                <IconContainer>
                    <BsPersonHeart />
                </IconContainer>
                <ParaText>
                Placement Coordinator
                </ParaText>
                <ParaText>
                Episodic Poet
                </ParaText>
                </InfoContainer></LowerBodyInfo>
                </Buttoninfo>
            </FlexContainer> 
        </PaddingContainer>
        </PaddingContainer>
        
        
        
        
    )
}

export default Info