import React from "react";

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

const MySkills = ()=>{

    return(
            <PaddingContainer
            id="Skills"
            top="10%"
            bottom="10%">
                <FlexContainer fullWidthChild>
                    <SkillsCardContainer>
                        {Skills.map((skill)=>(
                            <SkillsCard>
                                <IconContainer size="5rem" color="blue">
                                    {skill.icon}
                                </IconContainer>
                                <Heading as="h4" size="h4">
                                    {skill.tech}
                                </Heading>
                            </SkillsCard>
                        ))}
                    </SkillsCardContainer>


{/* right-section */}



                    <div>

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

                    </div>
                </FlexContainer>
            </PaddingContainer>

        )
}

export default MySkills