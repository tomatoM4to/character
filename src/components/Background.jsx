import styled from "styled-components";
import CustomBtn from "./CustomBtn";
import image from "../img/home-bg.png";

const Background = ({ homeRef, applyRef }) => {
    return (
        <HomeBackground ref={homeRef}>
            <Meteor top={0} right={0} delay={'0s'} duration={'1s'} />
            <Meteor top={0} right={'50%'} delay={'0s'} duration={'1s'} />
            <Meteor top={'50%'} left={'100%'} right={'-60%'} delay={'1.5s'} duration={'1.5s'} />
            <Meteor top={'60%'} left={'100%'} right={'-60%'} delay={'0s'} duration={'2s'} />
            <Meteor top={'70%'} left={'100%'} right={'-60%'} delay={'0s'} duration={'1s'} />
            <Meteor top={'80%'} left={'100%'} right={'-60%'} delay={'1.5s'} duration={'2.5s'} />
            <TextContainer>
                <TitleContainer>
                    <SubTitle>DJU Coding Community</SubTitle>
                    <Title>Character</Title>
                </TitleContainer>
                <Explanation>코딩동아리 입니다. 검은 화면에 하얀 글씨만 나오는 프로그램부터, 웹, 앱, 지구 어딘가에서 돌아갈 서버까지 만듭니다.</Explanation>
                <CustomBtn text={'Apply'} applyRef={applyRef} />
            </TextContainer>
        </HomeBackground>
    );
}

const HomeBackground = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: url(${image}) no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
`;

const Meteor = styled.span`
    position: absolute;
    top: ${props => props.top};
    right: ${props => props.right};
    left: ${props => props.left};
    width: 4px;
    height: 4px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1), 
                0 0 0 8px rgba(255, 255, 255, 0.1),
                0 0 20px rgba(255, 255, 255, 1);
    animation: animate 3s linear infinite;
    animation-delay: ${props => props.delay};
    animation-duration: ${props => props.duration};
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 200px;
        height: 1px;
        background: linear-gradient(90deg, white, transparent);
    }
    @keyframes animate {
        0% {
            transform: rotate(338deg) translateX(0);
            opacity: 1;
        }
        100% {
            transform: rotate(338deg) translateX(-1000px);
            opacity: 0;
        }
    }
`;


const TextContainer= styled.div`
    display: flex;
    width: 100%;
    padding: 9rem;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    font-size: 20%;
`;

const TitleContainer = styled.div`
    color: white;
    font-size: 4em;
    font-weight: 400;
    line-height: 1;
    @media screen and (max-width: 1023px) {
        font-size: 2em;
    }
`;

const SubTitle = styled.span`
    font-size: 3rem;
    @media screen and (max-width: 1023px) {
        font-size: 2rem;
    }
`;

const Title = styled.h1`
    color: white;
    font-size: 20em;
    font-weight: lighter;
`;

const Explanation = styled.p`
    color: white;
    font-size: 10em;
    text-align : center;
    padding-bottom: 1em;
`;

export default Background;