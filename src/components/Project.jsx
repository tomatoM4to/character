import styled from "styled-components";
import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Project = ({projectRef}) => {
    return (
        <Container ref={projectRef}>
            <Title value={"Project"} />
                <Background>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 100,
                      modifier: 2,
                      slideShadows: true,
                    }}
                    loop={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Card>
                            Hello
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            Hello
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            Hello
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            Hello
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            Hello
                        </Card>
                    </SwiperSlide>
                </Swiper>
                </Background>
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

const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, Violet, Orange);
    width: 100vw;
    height: 60vh;
    /* border-radius: 30px; */
`
const Card = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 30px;
    border: 1px solid white;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    font-size: 5rem;
    color: white;
`;

const Ribbon = styled.span`
    
`
export default Project;