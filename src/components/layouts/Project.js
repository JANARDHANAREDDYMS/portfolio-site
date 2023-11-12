import React from "react";


import {
    PaddingContainer,
    Heading,
    FlexContainer,
    ParaText,
    IconContainer,
    Button,
    WhiteText
} from "../../styles/Global.styled"
import { FaGithub } from "react-icons/fa";

import {
    TechStackCard
} from "../../styles/MyProject.styled"

import Project1 from '../../assets/project1.jpg'

import { ProjectImageContainer,ProjectImage } from "../../styles/MyProject.styled";

const Project = ({ data }) =>{
    return (
    <FlexContainer fullWidthChild>
        <div>
            <FlexContainer align="center" gap="1rem">
                <Heading as="h3" size="h3" bottom="1rem">
                    {data.Project_name}
                </Heading>

            <IconContainer color="blue" size="2rem">
                <FaGithub />
            </IconContainer>
    </FlexContainer>
        
    

    <PaddingContainer top="1rem">
        <FlexContainer gap="1.5rem">
            {data.tech_stack.map((stack)=>(
                <TechStackCard>{stack}</TechStackCard>
            ))}
        </FlexContainer>
    </PaddingContainer>
    
    <ParaText top="1rem " bottom="2rem">
        <WhiteText>{data.Project_desc}</WhiteText>
    </ParaText>

    <Button>
        Find Code
    </Button>
    
    </div>
    <PaddingContainer right="20px">
    <ProjectImageContainer justify="flex-end">
        <ProjectImage src={data.project_img} 
        alt={data.Project_name}
        href={data.project_url} />
    </ProjectImageContainer>
    </PaddingContainer>
    
    

    </FlexContainer>
    )
}

export default Project