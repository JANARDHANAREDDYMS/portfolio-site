import React from "react";
import theme from "../utils/Theme";

//import global styles
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
    WhiteText} from '../styles/Global.styled'

//importing showcase styles

import { ShowcaseParticleContainer, ShowcaseImageCard,
Particle } from "../styles/Showcase.styled";

import { BsLinkedin, BsFacebook, BsTwitter, BsInstagram, BsGithub }
from "react-icons/bs";


import  ShowcaseImg  from  "../assets/showcase-img.jpg"
import BackgroundImg from "../assets/particle.png"
import ReactImg from "../assets/react-omg.png"

const Showcase = () =>{
    return(
        <PaddingContainer
           id="Home"
           left="13%"
           right="10%"
           top="10%"
           bottom="10%"
           >
            <FlexContainer align="left" fullWidthChild>
                {/* --LEFT-CONTENT-- */}
                <div>
                    {/* <Heading as="h4" size="h4">Hello!</Heading> */}
                    
                    
                    <Heading as="h2" size="h2" top="0.5rem" bottom="0.5rem"  color={theme.colors.para_text_color} align="left">
                    <WhiteText>
                        I'm </WhiteText><BlueText> Janardhan</BlueText>    
                    </Heading>
                    
                    


                    <Heading
                    as="h3"
                    right="1.5rem"
                    size="h3"
                    >
                        <WhiteText>
                        I'm a </WhiteText> <BlueText> Web Developer</BlueText>
                    </Heading>

                    

                    <ParaText as="div" top="2rem" bottom="4rem">
                        <p style={{ paddingRight: "1rem" }}>
                            <BlueText>I am Janardhana Reddy currently pursuing my undergrad in</BlueText>
                        </p>
                        <p style={{ paddingRight: "1rem" }}>
                            <BlueText>Computer Science from Bangalore Institute of Technology.</BlueText>
                        </p>
                        <p style={{ paddingRight: "1rem" }}>
                            <BlueText>A passionate MERN developer, with interest in pursuit of</BlueText>
                        </p>
                        <p style={{ paddingRight: "13rem" }}>
                            <BlueText>interest in deep learning.</BlueText>
                        </p>
                    </ParaText>


                    <FlexContainer gap="1rem" >
                        <IconContainer color="blue" size="1.5rem">
                             <BsLinkedin/>
                        </IconContainer>

                        <IconContainer color="blue" size="1.5rem">
                            <BsInstagram/>
                        </IconContainer>

                        <IconContainer color="blue" size="1.5rem">
                            <BsTwitter/>
                        </IconContainer>

                        <IconContainer color="blue" size="1.5rem">
                            <BsGithub/>
                        </IconContainer>
                    </FlexContainer>


                    
                
                    

                </div>

                <FlexContainer justify="end" paddingBottom="28rem">
                        <ShowcaseParticleContainer justify="end" >
                            <ShowcaseImageCard>
                            <img src={ShowcaseImg} alt="showcase"/>

                            </ShowcaseImageCard>

                            <Particle
                            src={ReactImg}
                            alt="particle"
                            top="55px"
                            width="40px"
                            left="1150px"
                            rotate="60deg"/>

                        <Particle
                            src={BackgroundImg}
                            alt="particle"
                            top="35px"
                            left="1100px"
                            rotate="0deg"/>

                            
                        </ShowcaseParticleContainer>
                    </FlexContainer>
            </FlexContainer>
        </PaddingContainer>
    )
}


export default Showcase