import styled from "styled-components";
import { onNav } from "../hooks/onNav";

const CustomBtn = ({ text, applyRef }) => {
    return (
        <>
            <CustomButton type="button" onClick={e => onNav(e, applyRef)}>
                {text}
            </CustomButton>
        </>
    );
}

const CustomButton = styled.button`
    color: white;
    border: 0.3rem solid white;
    font-size: 2.5rem;
    background-color: transparent;
    padding: 1.5rem 8rem;
    transition: all 0.3s;
    &:active {
        background-color: white;
        color: black;
    }
    @media (hover: hover) {
        &:hover {
            background-color: white;
            color: black;
        }
    }
    @media screen and (max-width: 1023px) {
        padding: 1rem 6rem;
    }
`;
export default CustomBtn;