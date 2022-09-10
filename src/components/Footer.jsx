import styled from "styled-components";
import {BsGithub, BsFillBootstrapFill} from "react-icons/bs";

const Footer = () => {
    return (
        <Container>
            <TextContainer>
                <Title>character</Title>
                <Sub>이 웹사이트는 동아리 활동을 보다 편하게 하기 위해 만들어 졌으며 부분 공개되어 있습니다.</Sub>
                <ImogeContainer>
                    <a href="https://github.com/tomatoM4to/character"><BsGithub style={{color: 'white'}} /></a>
                    <a href="https://www.acmicpc.net/group/13948"><BsFillBootstrapFill style={{color: 'white'}} /></a>
                </ImogeContainer>
                <Sub>made by <a style={{
                    color: 'tomato',
                    textDecoration: 'none',
                    }} href="https://github.com/tomatoM4to">tomatoM4to</a></Sub>
            </TextContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-top: 3rem;
    padding-bottom: 3rem;
    /* background: #E0E5EC; */
    background-color: #00042E;
    border-top-left-radius: 10rem;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 3rem;
    gap: 1.5rem;
    align-items: center;
    width: 80%;
`
const Title = styled.div`
    color: white;
    font-size: 3rem;
    font-weight: bold;
`

const Sub = styled.div`
    color: white;
    text-align: center;
    font-size: 1.5rem;
`

const ImogeContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    font-size: 3rem;
`
export default Footer;