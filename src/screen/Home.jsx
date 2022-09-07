import Navigation from "../components/Navigation";
import styled from "styled-components";
import Background from "../components/Background";
import Introduction from "../components/Introduction";
import { useRef } from "react";
import Apply from "../components/Apply";
import Footer from "../components/Footer";
import Project from "../components/Project";
import Faq from "../components/Faq";

const Home = () => {
    const homeRef = useRef();
    const introduceRef = useRef();
    const projectRef = useRef();
    const faqRef = useRef();
    const applyRef = useRef();
    return (
        <Screen>
            <Navigation 
                homeRef={homeRef}
                introduceRef={introduceRef}
                applyRef={applyRef}
                projectRef={projectRef}
                qnaRef={faqRef}
                />
            <Background homeRef={homeRef} applyRef={applyRef} />
            <Introduction introduceRef={introduceRef} />
            <Project projectRef={projectRef} />
            <Faq qnaRef={faqRef} />
            <Apply applyRef={applyRef} />
            <Footer />
        </Screen>
    );
}

const Screen = styled.div`
    display: flex;
    top: 0;
    left: 0;
    justify-content: center;
    flex-wrap: wrap;
`;


export default Home;