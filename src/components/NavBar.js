import React,{useState,useEffect} from "react";

import {
    PaddingContainer,
    FlexContainer,
    Button,
    ParaText,
    BlueText,
    Container
} from '../styles/Global.styled'

import { GiHamburgerMenu} from 'react-icons/gi';
import {theme} from '../utils/Theme'
import NavMenu from "./layouts/NavMenu";

import {
    NavbarContainer,
    Logo,
    MenuIcon,
    
} from '../styles/Navbar.styled'

const  Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [sticky, setSticky] = useState(false);

    
    useEffect(()=>{

        const onScroll = ()=>{
            window.pageYOffset > 50 ? setSticky(true) : setSticky(false);
        }

        window.addEventListener('scroll',onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    },[])

    return (
        <NavbarContainer bgColor={sticky? theme.colors.primary : 'transparent'}>
            <PaddingContainer
            top='1.2rem'
            bottom='1.2rem'>
                <Container>
                    <FlexContainer justify="flex-end">
                        {/* <Logo>
                            NavBar
                        </Logo> */}
                        <PaddingContainer right="8.5rem">
                        <MenuIcon
                        onClick={()=>{setOpenMenu(true)}}>
                            <GiHamburgerMenu />
                        </MenuIcon>
                        </PaddingContainer>
                        
                    </FlexContainer>
                </Container>
                {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
            </PaddingContainer>

           
        </NavbarContainer>
    )
}

export default Navbar