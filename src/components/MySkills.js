import React from "react";
import { motion } from "framer-motion";
import {
    FlexContainer,
    PaddingContainer,
    Heading,
    IconContainer,
    ParaText,
    BlueText,
    WhiteText
} from '../styles/Global.styled';

import {
    SkillsCardContainer,
    SkillsCard
} from '../styles/MySkills.styled'

import { Skills } from "../utils/Data";
import { fadeInLeftVariant,fadeInRightVariant } from "../utils/Variants";


const MySkills = ()=>{

    return(
            <PaddingContainer
            id="Skills"
            top="5%"
            bottom="10%"
            responsiveLeft="1rem"
            responsiveRight="1rem"
            >
                <FlexContainer 
                responsiveFlex
                // resposive-direction="column-reverse"
                >
                    <SkillsCardContainer
                    as={motion.div}
                    variants={fadeInLeftVariant}
                    initial="hidden"
                    whileInView="visible">
                        {Skills.map((skill)=>(
                            <SkillsCard
                            as={motion.div}
                        whileHover={{scale:1.1}}>
                                <IconContainer 
                                size="2.5rem" color="blue">
                                    {skill.icon}
                                </IconContainer>
                                <Heading as="h5" size="h5">
                                    {skill.tech}
                                </Heading>
                                
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: `${skill.progress}%` }}></div>
                                    <div className="progress-circle"></div>
                                </div>
                                
                                
                            </SkillsCard>
                        ))}
                    </SkillsCardContainer>


{/* right-section */}



                    <motion.div
                    
                    variants={fadeInRightVariant}
                    initial="hidden"
                    whileInView="visible">

                            <Heading as="h4" size="h4">
                                MY SKILLS
                            </Heading>
                            <Heading as="h2" size="h2">
                                What <BlueText> I can do</BlueText>
                            </Heading>


                            <ParaText top="2rem" bottom="1.5rem">
                                <WhiteText>As a developer, i have got range of experience in these fields of Development.
                                I am proficient in JavaScipt, HTML, React, NodeJs and CSS.</WhiteText>
                            </ParaText>

                            <ParaText top="1rem" bottom="1.5rem">
                                <WhiteText>This has helped to better work with MERN stack, thus making me closer to becoming a complete web devloper </WhiteText>
                            </ParaText>

                    </motion.div>
                </FlexContainer>
            </PaddingContainer>

        )
}

export default MySkills