import styled from "styled-components";
import { useEffect, useState } from "react";
import { onNav } from "../hooks/onNav";

const Navigation = ({ homeRef, introduceRef, applyRef, projectRef, qnaRef }) => {
    const [navColor, setNavColor] = useState("transparent");
    const [menu, onMenu] = useState(false);
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavColor("#00042E") : setNavColor("transparent");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    const onMenuBoxBtn = (e, ref) => {
        onMenu(false);
        onNav(e, ref);
    };

    return (
        <nav>
            <TopNav backgroundColor={navColor}>
                <Logo>
                    CHAR
                </Logo>

                <BtnContainer>
                    <UnderscoreBtn onClick={e => onNav(e, homeRef)}>Home</UnderscoreBtn>
                    <UnderscoreBtn onClick={e => onNav(e, introduceRef)}>Introduce</UnderscoreBtn>
                    <UnderscoreBtn onClick={e => onNav(e, projectRef)}>Project</UnderscoreBtn>
                    <UnderscoreBtn onClick={e => onNav(e, qnaRef)}>FaQs</UnderscoreBtn>
                    <UnderscoreBtn onClick={e => onNav(e, applyRef)}>Apply</UnderscoreBtn>
                </BtnContainer>
                <Menu onClick={() => onMenu(!menu)}>
                    <Stick style={menu ? {
                            top: '50%', 
                            transform: 'translateY(-50%) rotate(45deg)'
                        } : {
                            top: 0
                        }} />
                    <Stick style={menu ? {
                            top: '50%', 
                            transform: 'translateY(-50%)',
                            opacity: 0,
                        } : {
                            top: '50%', 
                            transform: 'translateY(-50%)'
                        }} />
                    <Stick style={menu ? {
                            bottom: '50%',
                            transform: 'translateY(50%) rotate(-45deg)'
                        } : {
                            bottom: 0
                        }} />
                </Menu>
            
            </TopNav>

            <MenuBox style={menu ? {right: 0} : {right: '-100%'}}>
                <MemberBtn onClick={e => onMenuBoxBtn(e, homeRef)}>Home</MemberBtn>
                <MemberBtn onClick={e => onMenuBoxBtn(e, introduceRef)}>Introduce</MemberBtn>
                <MemberBtn onClick={e => onMenuBoxBtn(e, projectRef)}>Project</MemberBtn>
                <MemberBtn onClick={e => onMenuBoxBtn(e, qnaRef)}>FaQs</MemberBtn>
                <MemberBtn onClick={e => onMenuBoxBtn(e, applyRef)}>Apply</MemberBtn>
            </MenuBox>
        </nav>
    );
}

const TopNav = styled.nav`
    display: flex;
    background-color: ${porps => porps.backgroundColor};
    position: fixed;
    padding: 0 8rem;
    z-index: 1000;
    height: 8%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    transition: all 1s;
    @media screen and (max-width: 1023px) {
        padding: 0 4rem;
    }
`

const Logo = styled.div`
    font-size: 5rem;
    color: white;
`;

const BtnContainer = styled.div`
    display: flex;
    gap: 8rem;
    @media screen and (max-width: 1023px) {
        display: none;
    }
`;

const UnderscoreBtn = styled.span`
    display: inline-block;
    font-size: 2.2rem;
    cursor: pointer;
    text-decoration: none;
    color: white;
    &::after {
        display: block;
        content: '';
        border-bottom: solid 3px white;
        transform: scaleX(0);
        transition: transform 0.25s ease-in-out;
    }
    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`
const Menu = styled.div`
    display: none;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 4.5rem;
    height: 3.5rem;
    @media screen and (max-width: 1023px) {
        display: flex;
    }
`;

const Stick = styled.span`
    display: block;
    position: absolute;
    width: 100%;
    height: 5px;
    border-radius: 30px;
    background-color: white;
    transition: all .35s;
`;

const MenuBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 500;
    top: 0;
    background-color: #00042E;
    width: 100vw;
    height: 100vh;
    transition: all .35s;
    padding: 10% 0;
`;


const MemberBtn = styled.button`
    width: 100%;
    height: 10vh;
    color: white;
    font-size: 4rem;
    background-color: transparent;
    border: none;
    transition: all .5s;
    &:active {
        background-color: white;
        color: #00042E;
    }
`;

export default Navigation;