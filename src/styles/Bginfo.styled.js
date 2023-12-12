import styled from 'styled-components';

export const LowerBodyInfo = styled.div`
    display: flex;
    justify-content: center; /* Center the content horizontally */


    @media(max-width: ${({theme})=>theme.breakpoints.
    mobile}){
        width: 90%;
        margin: auto;
        
    }
`;

export const InfoContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.info_blue};
    border-radius: 10px; /* Adjust the value to control the roundness */
    max-width: 1200px; /* Set a maximum width to control the width */
    padding: 20px; /* Add padding as needed */
    width:90%;
    box-sizing:border-box;


    @media(max-width: ${({theme})=>theme.breakpoints.
    mobile}){
        margin: 5% 5%;
        padding-right:20rem;
    }
    
    /* Add other styles as needed */
`;
