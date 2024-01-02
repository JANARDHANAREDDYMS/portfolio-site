import React from "react";
import theme from "../utils/Theme";
import { motion } from "framer-motion";
import res from "../assets/janardhana-2.pdf"
import lwr from "../assets/lwr.txt"
import knn from "../assets/knn.txt"
import em from '../assets/em.txt'
import kmeans from '../assets/kmeans.txt'
import nb from '../assets/naivebayes.txt'
import ann from '../assets/ann.txt'
import id3 from '../assets/id3.txt'
import cm from '../assets/cm.txt'
import aostar from '../assets/aostar.txt'
import astar from '../assets/astar.txt'


//import global styles
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
    WhiteText,
Buttona} from '../styles/Global.styled'
import{
    SkillsCardContainer,
    SkillsCard
} from '../styles/MySkills.styled'

//importing showcase styles

import { ShowcaseParticleContainer, ShowcaseImageCard, ShowcaseImgCard,
Particle, diamond } from "../styles/Showcase.styled";

import { BsLinkedin, BsFacebook, BsTwitter, BsInstagram, BsGithub }
from "react-icons/bs";
import { MdDownloadForOffline} from 'react-icons/md'
import { GiCutDiamond } from "react-icons/gi";

import  ShowcaseImg  from  "../assets/showcase-img.jpg"
import BackgroundImg from "../assets/particle.png"
import ReactImg from "../assets/react-omg.png"


import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

const Showcase = () =>{
    return(
        <PaddingContainer
           id="Home"
           left="13%"
           right="10%"
           top="12%"
           responsiveLeft="1rem"
           responsiveRight="1rem"
           responsiveTop="8rem"
           bottom="10%"
           >
            <FlexContainer align="left" fullWidthChild>
                {/* --LEFT-CONTENT-- */}
                <motion.div
                    variants={fadeInLeftVariant}
                    initial="hidden"
                    whileInView="visible"
                >
                    {/* <Heading as="h4" size="h4">Hello!</Heading> */}
                    
                    
                        <FlexContainer>
                        
                        <PaddingContainer top="0.6rem" left="0.5rem">
                            <SkillsCard style={{ width: '60px' , height: '60px' }}>
                                <Buttona 
                            size="1.8rem"
                            href={aostar}
                            download={aostar}>
                                <Heading>1</Heading>
                            </Buttona>
                                </SkillsCard>
                        </PaddingContainer>
                        <PaddingContainer top="0.6rem" left="0.5rem">
                                <SkillsCard style={{ width: '60px' , height: '60px' }}>
                                <Buttona 
                            size="1.8rem"
                            href={astar}
                            download={astar}>
                                <Heading>2</Heading>
                            </Buttona>
                                </SkillsCard>
                        </PaddingContainer>
                        <PaddingContainer top="0.6rem" left="0.5rem">
                                <SkillsCard style={{ width: '60px' , height: '60px' }}>
                                <Buttona 
                            size="1.8rem"
                            href={cm}
                            download={cm}>
                                <Heading>3</Heading>
                            </Buttona>
                                </SkillsCard>                        
                        </PaddingContainer>
                        <PaddingContainer top="0.6rem" left="0.5rem">
                                <SkillsCard style={{ width: '60px' , height: '60px' }}>
                                <Buttona 
                            size="1.8rem"
                            href={id3}
                            download={id3}>
                                <Heading>4</Heading>
                            </Buttona>
                                </SkillsCard>                        
                        </PaddingContainer>
                        <PaddingContainer top="0.6rem" left="0.5rem">
                                <SkillsCard style={{ width: '60px' , height: '60px' }}>
                                <Buttona 
                            size="1.8rem"
                            href={ann}
                            download={ann}>
                                <Heading>5</Heading>
                            </Buttona>
                                </SkillsCard>                        
                        </PaddingContainer>
                        <PaddingContainer top="0.6rem" left="0.5rem">
                                <SkillsCard style={{ width: '60px' , height: '60px' }}>
                                <Buttona 
                            size="1.8rem"
                            href={nb}
                            download={nb}>
                                <Heading>6</Heading>
                            </Buttona>
                                </SkillsCard>                        
                        </PaddingContainer>
                        <PaddingContainer top="0.6rem" left="0.5rem">
                                <SkillsCard style={{ width: '60px' , height: '60px' }}>
                                <Buttona 
                            size="1.8rem"
                            href={kmeans}
                            download={kmeans}>
                                <Heading>7.1</Heading>
                            </Buttona>
                                </SkillsCard>                        
                        </PaddingContainer>
                        <PaddingContainer top="0.6rem" left="0.5rem">
                                <SkillsCard style={{ width: '60px' , height: '60px' }}>
                                <Buttona 
                            size="1.8rem"
                            href={em}
                            download={em}>
                                <Heading>7.2</Heading>
                            </Buttona>
                                </SkillsCard>                        
                        </PaddingContainer>
                        <PaddingContainer top="0.6rem" left="0.5rem">
                                <SkillsCard style={{ width: '60px' , height: '60px' }}>
                                <Buttona 
                            size="1.8rem"
                            href={knn}
                            download={knn}>
                                <Heading>8</Heading>
                            </Buttona>
                                </SkillsCard>                        
                        </PaddingContainer>
                        <PaddingContainer top="0.6rem" left="0.5rem">
                                <SkillsCard style={{ width: '60px' , height: '60px' }}>
                                <Buttona 
                            size="1.8rem"
                            href={lwr}
                            download={lwr}>
                                <Heading>9</Heading>
                            </Buttona>
                                </SkillsCard>                        
                        </PaddingContainer>

                        </FlexContainer>
                        
                        
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
                        I'm a </WhiteText> <BlueText> Developer</BlueText>
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
                            <BlueText>deep learningn and Computer Vision.</BlueText>
                        </p>
                    </ParaText>


                    <FlexContainer gap="1rem" responsiveFlex>
                        <a href="https://twitter.com/janardhannnnnn">
                        <IconContainer color="blue" size="1.5rem">
                            <BsTwitter/>
                        </IconContainer>
                        </a>

                        <a href="https://www.instagram.com/janardhan.reddy.m.s/">
                        <IconContainer color="blue" size="1.5rem">
                            <BsInstagram/>
                        </IconContainer>
                        </a>

                        <a href="https://www.linkedin.com/in/janardhan-reddy-ms/">
                        <IconContainer color="blue" size="1.5rem">
                             <BsLinkedin/>
                        </IconContainer>

                        </a>
                        
                        <a href="https://github.com/JANARDHANAREDDYMS">
                        <IconContainer color="blue" size="1.5rem">
                            <BsGithub/>
                        </IconContainer>
                        </a>
                        
                    </FlexContainer>

                    <PaddingContainer top="1.5rem">
                        <FlexContainer>
                        <Heading as="h3" size="h3">
                        Curriculum<BlueText>&nbsp;Vi</BlueText>tae
                        </Heading>
                        <PaddingContainer top="0.6rem" left="0.5rem">
                        <IconContainer 
                        color="dark-blue" 
                        size="1.8rem"
                        > 
                            <Buttona 
                            size="1.8rem"
                            href={lwr}
                            download={lwr}>
                                <MdDownloadForOffline />
                            </Buttona>    
                        </IconContainer>
                        </PaddingContainer>
                        
                    
                        </FlexContainer>
                    </PaddingContainer>
                    
                    
                </motion.div>

                <FlexContainer 
                as={motion.div}
                variants={fadeInRightVariant}
                initial="hidden"
                whileInView="visible"
                justify="end" paddingBottom="28rem">
                        <ShowcaseParticleContainer justify="end" responsiveRight="5rem">
                            <PaddingContainer top="6rem">
                            <ShowcaseImageCard>
                            <img src={ShowcaseImg} alt="showcase"/>

                            </ShowcaseImageCard>
                            </PaddingContainer>
                            

                            {/* <Particle
                            as={motion.img}
                            animate={{
                                x:[0, 100, 0],
                                rotate: -360,
                                scale: [1, 0.5, 1],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                            }}
                            src={ReactImg}
                            alt="particle"
                            top="185px"
                            width="40px"
                            left="1150px"
                            rotate="60deg"/> */}

                        <Particle
                            as={motion.img}
                            animate={{
                                x:[-120, 100, 0],
                                y:[0,50,50],
                                rotate: 360,
                                scale: [1, 0.5, 1],
                                opacity: 0.5
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                            }}
                            src={BackgroundImg}
                            alt="particle"
                            top="575px"
                            left="1100px"
                            rotate="0deg"/>

                        <Particle
                        as={motion.img}
                        animate={{
                            x:[200, 0, 100],
                            y: [0,-100,-50],
                            rotate: -360,
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                        }}
                        src={BackgroundImg}
                        alt="partcile"
                        top="235px"
                        left="1150px"
                        rotate="30deg"/>

                            {/* <Particle
                            as={motion.img}
                            animate={{
                                x:[0, 100, 100],
                                rotate: -240,
                                scale: [1.5, 0.5, 1],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                            }}
                            src={ReactImg}
                            alt="particle"
                            top="55px"
                            width="60px"
                            left="1050px"
                            rotate="120deg"/> */}
                        </ShowcaseParticleContainer>
                    </FlexContainer>

                    
            </FlexContainer>
        </PaddingContainer>
    )
}


export default Showcase