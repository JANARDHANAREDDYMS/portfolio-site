import styled from "styled-components";

export const ContactForm = styled.form`
    width: 100%;
    padding-left:13rem;

    @media(max-width: ${({theme})=>theme.breakpoints.
    mobile}){
        width: 90%;
        margin: auto;
        
    }
`

export const FormLabel = styled.p`
    color: ${({theme})=>theme.colors.para_text_color};
    padding-button: 10px;
`

export const FormInput = styled.input`
    width: 32rem;
    background-color: ${({theme})=>theme.colors.primary_light};
    border: 1px solid ${({theme})=>theme.colors.para_text_color};
    color: ${({theme})=>theme.colors.para_text_color};
    border-radius: 5px;
    padding: 15px;

    
`

