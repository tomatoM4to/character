import { ReactComponent as Community } from '../img/Employees co-working.svg'
import { ReactComponent as Project } from '../img/404 V3.svg';
import { ReactComponent as Algorithm } from '../img/Mysterious man.svg';
import styled from "styled-components";

// 0 0 648 659
export const CommunityItem = () => {
    return (
        <SvgContainer>
            <CommunitySvg viewBox="0 0 865.76 682.89" />
        </SvgContainer>
    );
}

export const ProjectItem = () => {
    return (
        <SvgContainer>
            <ProjectSvg viewBox="0 0 865.76 682.89" />
        </SvgContainer>
    )
}

export const AlgorithmItem = () => {
    return (
        <SvgContainer>
            <AlgorithmSvg viewBox="0 0 865.76 682.89" />
        </SvgContainer>
    )
}
const SvgContainer = styled.div`
    justify-content: center;
    align-items: center;
`;

const CommunitySvg = styled(Community)`
    display: block;
    padding: 10%;
    width: 100%;
    height: auto;
`;

const ProjectSvg = styled(Project)`
    display: block;
    padding: 10%;
    width: 100%;
    height: auto;
`;

const AlgorithmSvg = styled(Algorithm)`
    display: block;
    padding: 10%;
    width: 100%;
    height: auto;
`;