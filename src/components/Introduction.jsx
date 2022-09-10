import { useState } from "react";
import styled from "styled-components";
import Title from "./Title";
import data from "./introduceData";
import { CommunityItem, ProjectItem, AlgorithmItem } from "./IndroduceItem";

const Introduction = ({introduceRef}) => {
    const [menu, setMenu] = useState('community');
    return (
        <Container ref={introduceRef}>
            <Title value={"Introduction"} />
            <TabContainer>
                <Tab>
                    <TabMenu value='community' onClick={() => setMenu('community')}>Community</TabMenu>
                    <TabMenu value='project' onClick={() => setMenu('project')}>Project</TabMenu>
                    <TabMenu value='algorithm' onClick={() => setMenu('algorithm')}>Algorithm</TabMenu>
                </Tab>
                <SubContainer key={menu}>
                        {menu === 'community' ? 
                        <CommunityItem /> : menu === 'project' ? 
                        <ProjectItem /> : <AlgorithmItem />}
                        <Explanation>
                            <div>
                                <h3 style={{
                                    fontSize: '2.5rem',
                                    fontWeight: 'bolder',
                                }}>{data[menu].title1}</h3>
                                {data[menu].detail1}
                            </div>
                            
                            <div>
                                <h3 style={{
                                    fontSize: '2.5rem',
                                    fontWeight: 'bolder',
                                }}>{data[menu].title2}</h3>
                                {data[menu].detail2}
                            </div>

                            <div>
                                <h3 style={{
                                    fontSize: '2.5rem',
                                    fontWeight: 'bolder',
                                }}>{data[menu].title3}</h3>
                                {data[menu].detail3}
                            </div>
                        </Explanation>
                </SubContainer>
            </TabContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const TabContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
const Tab = styled.span`
    display: flex;
    align-items: center;
    height: 8rem;
    width: 90vw;
    gap: 2rem;
`;

const TabMenu = styled.button`
    background: none;
    height: 3rem;
    border: none;
    display: inline-block;
    position: relative;
    flex: 1 1;
    box-shadow:
    -7px -7px 20px 0px #fff9,
    -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002,
    4px 4px 5px 0px #0001,
    inset 0px 0px 0px 0px #fff9,
    inset 0px 0px 0px 0px #0001,
    inset 0px 0px 0px 0px #fff9,        
    inset 0px 0px 0px 0px #0001;
    border-radius: 10px;
    font-size: 2.2rem;
    &:active {
        box-shadow: 
        inset -7px -7px 20px 0px #fff9,
        inset -4px -4px 5px 0px #fff9,
        inset 7px 7px 20px 0px #0002,
        inset 4px 4px 5px 0px #0001;
    }
    @media screen and (max-width: 900px) {
        font-size: 1.5rem;
    }
`
const SubContainer = styled.div`
    position: relative;
    display: flex;
    width: 90%;
    margin: 0 80%;
    align-items: center;
    justify-content: center;
    animation: fadein 1s;
    div {
        width: calc(100% / 2);
    }
    @media screen and (max-width: 900px) {
        flex-direction: column;
        div {
            width: 90%;
        }
    }

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Explanation = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    font-size: 2rem;
    line-height: 1.6;
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1rem;
        padding: 2rem;
        border-radius: 25px;
        background-color: #B2D4FB;
        @media screen and (max-width: 1023px) {
            width: 70%;
            padding: 1.5rem;
        }
    }
    div:nth-child(1) {
        align-self: flex-start;
    }
    div:nth-child(2) {
        align-self: center;
    }
    div:nth-child(3) {
        align-self: flex-end;
    }
`;

export default Introduction;