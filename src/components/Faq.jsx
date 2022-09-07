import styled from "styled-components";
import Title from "./Title";
import Faq from 'react-faq-component';

const data1 = {
    title: "",
    rows: [
        {
            title: "동아리는 언제, 어디서 활동하나요?",
            content: "월, 수 저녁 6시에 융합과학관 403호에서 활동합니다. (시간은 변경될 수 있음)"
        },
        {
            title: "면접 보나요?",
            content: "2학기는 면접을 진행하기로 결정했습니다. 장소와 시간은 카톡or문자로 공지해 드리겠습니다."
        },
        {
            title: "코딩을 하나도 모르는데 가입할 수 있을까요?",
            content: "1학기때 c언어 수업을 진행했기에 따로 언어를 배울 계획은 없습니다. 하지만 스스로 배우려는 생각으로 적극적으로 참여하신다면 시간내서 도와드리겠습니다."
        },
        {
            title: "무슨 활동을 하나요?",
            content: "알고리즘반과 프로젝트반을 나누어서 서로의 지식을 공유하는 활동을 합니다."
        },
    ]
}

const data2 = {
    title: "",
    rows: [
        {
            title: "알고리즘이 무엇인가요?",
            content: "발생한 문제를 컴퓨터로 해결 할수 있게 프로그래밍 한것입니다. 알고리즘반은 배열, 리스트 같은 기본적인 자료구조부터, 이분탐색, bfs, dfs 같은 알고리즘까지 학습하고 서로의 문제 풀이 방법을 공유합니다."
        },
        {
            title: "프로젝트가 무엇인가요?",
            content: "앱, 웹, 게임, 서버 같은것들을 마음 맞는사람끼리 모여서 만들어보는 반입니다. 실력이 충분하시다면 동아리에서 사람을 찾아 여러 공모전에 참가해보세요."
        },
        {
            title: "다른 과인데 지원 가능한가요?",
            content: "가능합니다."
        },
        {
            title: "비교과 포인트 지급되나요?",
            content: "컴퓨터공학과 정규 동아리라 컴퓨터공학과 학생 한정 지급됩니다."
        }
    ]
}

const Aa = styled(Faq)`
    section[role=listitem] {
        margin-bottom: 50px;
    }
`
const styles = {
    bgColor: '#E0E5EC',
    rowTitleTextSize: '2.7rem',
    rowContentTextSize: '2.2rem',
    rowContentPaddingTop: '2rem',
    rowContentPaddingBottom: '3rem',
    rowContentPaddingLeft: '3rem',
    rowContentPaddingRight: '3rem',
}

const Qna = ({qnaRef}) => {
    return (
        <Container ref={qnaRef}>
            <Title value={"FaQs"} />
            <FaQsContainer>
                <Aa data={data1} styles={styles} style={{margin: 100}}/>
                <Aa data={data2} styles={styles}/>
            </FaQsContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-items: center;
`;

const FaQsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: 0;
    }
`;
export default Qna;