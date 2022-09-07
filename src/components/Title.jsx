import styled from "styled-components";

const Title = ({value}) => {
    return (
        <StyledH2>
            {value}
        </StyledH2>
    )
}

const StyledH2 = styled.h2`
    font-size: 5rem;
    font-weight: bold;
    margin: 3rem;
`;

export default Title