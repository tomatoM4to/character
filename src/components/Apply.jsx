import styled from "styled-components";
import {BsFillTelephoneFill,
        BsFillPencilFill,
        BsFillMoonStarsFill,
        BsFillEmojiSmileUpsideDownFill,
        BsSquare,
        BsXLg,
        BsViewStacked,
        BsCursorText,
        BsDashLg,
        } from "react-icons/bs";
import {FaGuitar} from "react-icons/fa";
import cmd from "../img/cmd.svg";
import { PythonIcon, 
         EmptyIcon, 
         JavaIcon, 
         HtmlIcon, 
         GuitarIcon, 
         CplusIcon } from "./Icon"; 
import { useState } from "react";
import { useRef } from "react";
import Title from "./Title";

const lightGreen = '#00FF00';
const darkGreen = 'darkgreen';

const Apply = ({applyRef}) => {
    const [python, onPython] = useState(false);
    const [empty, onEmpty] = useState(false);
    const [java, onJava] = useState(false);
    const [html, onHtml] = useState(false);
    const [guitar, onGuitar] = useState(false);
    const [cplus, onCplus] = useState(false);

    const formRef = useRef();
    const nameInputRef = useRef();
    const studentIdInputRef = useRef();
    const departmentInputRef = useRef();
    const phoneInputRef = useRef();
    const etcInputRef = useRef();

    const onSubmit = () => {
        if (nameInputRef.current.value === "") {
            alert('이름은 필수 입력칸 입니다.');
            nameInputRef.current.focus();
        } else if (studentIdInputRef.current.value === "") {
            alert('학번은 필수 입력칸 입니다.');
            studentIdInputRef.current.focus();
        } else if (departmentInputRef.current.value === "") {
            alert('학과는 필수 입력칸 입니다.');
            departmentInputRef.current.focus();
        } else if (phoneInputRef.current.value === "") {
            alert('전화번호는 필수 입력칸 입니다.');
            phoneInputRef.current.focus();
        } else {
            alert('신청이 완료되었습니다.');

        }
    }

    const select = (state) => {
        if (state) {
            return lightGreen;
        } else {
            return darkGreen;
        }
    }

    const inspectionLen = (e, ref, maxLen) => {
        let str = String(ref.current.value);
        if (str.length > maxLen) {
            str = str.slice(0, maxLen);
            ref.current.value = str;
        }
    }

    const inspectionStr = (e, ref) => {
        let RegExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;
        if (RegExp.test(ref.current.value)) {
            ref.current.value = ref.current.value.replace(RegExp, '');
        }
    }

    return (
        <Container ref={applyRef}>
            <Title value={"Apply"} />
            <CmdNav>
                <div style={{
                    display: 'flex',
                    fontSize: '2rem',
                    alignItems: 'center'
                    }}>
                    <img src={cmd} style={{
                        display: 'block',
                        paddingTop: '0.5rem',
                        width: 'auto',
                        height: '100%'
                    }} />
                    <span>관리자: 신청 프롬프트</span>
                </div>
                <div style={{
                    fontSize: '2rem',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <BsViewStacked />
                    <BsSquare />
                    <BsXLg />
                </div>
            </CmdNav>
            <CmdContainer>
                <span style={{
                    color: lightGreen,
                    fontSize: '2rem'}}>
                    <p>Character Windows [Version 10.0.22000.856]</p>
                    <p>(c) Character Corporation. All rights reserved.</p>
                    <p style={{display: 'flex', alignItems: 'center'}}>C:\Users\Character&gt; . . . <StyledCursor/></p>
                </span>
                
                {/* form start, 일반 폼 태그처럼 사용 가능 */}
                <Form ref={formRef}>
                    <InputContainer>
                        <BsFillPencilFill style={{color: lightGreen, fontSize: '2rem'}} />
                        <CustomInput 
                            placeholder="이름"
                            color={lightGreen}
                            name="name"
                            ref={nameInputRef}
                            maxLength="10"
                            onKeyUp={e => inspectionStr(e, nameInputRef)}
                            onKeyDown={e => inspectionStr(e, nameInputRef)}
                            autoComplete="off"
                            />
                    </InputContainer>
                    <InputContainer>
                        <BsFillEmojiSmileUpsideDownFill style={{color: lightGreen, fontSize: '2rem'}} />
                        <CustomInput 
                            placeholder="학번"
                            type="number"
                            color={lightGreen}
                            name="student-id"
                            ref={studentIdInputRef}
                            onChange={e => inspectionLen(e, studentIdInputRef, 10)}
                            autoComplete="off"
                            />
                    </InputContainer>
                    <InputContainer>
                        <BsFillMoonStarsFill style={{color: lightGreen, fontSize: '2rem'}} />
                        <CustomInput
                            placeholder="학과"
                            color={lightGreen}
                            id="department"
                            ref={departmentInputRef}
                            maxLength="20"
                            onKeyUp={e => inspectionStr(e, departmentInputRef)}
                            onKeyDown={e => inspectionStr(e, departmentInputRef)}
                            autoComplete="off"
                            />
                    </InputContainer>
                    <InputContainer>
                        <BsFillTelephoneFill style={{color: lightGreen, fontSize: '2rem'}} />
                        <CustomInput 
                            placeholder="전화번호"
                            type="number"
                            color={lightGreen}
                            id="phone-numver"
                            ref={phoneInputRef}
                            onChange={e => inspectionLen(e, phoneInputRef, 11)}
                            autoComplete="off"
                            />
                    </InputContainer>
                    <span style={{fontSize: '2.5rem',
                         color: lightGreen,
                         padding: '0.5rem 0'
                         }}>사용 가능 언어</span>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingBottom: '0.5rem',
                        gap: '1rem'
                    }}>

                        <Checkbox color={select(python)}>
                            <input 
                                type="checkbox" 
                                id="python" 
                                style={{visibility: 'hidden'}}
                                name="python"
                                />
                            <Label for="python" onClick={() => onPython(!python)} />
                            <PythonIcon fill={select(python)} />
                            <CheckboxTitle color={select(python)}>Python</CheckboxTitle>
                        </Checkbox>

                        <Checkbox color={select(cplus)}>
                            <input 
                                type="checkbox" 
                                id="cplus" 
                                style={{visibility: 'hidden'}}
                                name="cplus" 
                                />
                            <Label for="cplus" onClick={() => onCplus(!cplus)}/>
                            <CplusIcon fill={select(cplus)} />
                            <CheckboxTitle color={select(cplus)}>C/C++</CheckboxTitle>
                        </Checkbox>

                        <Checkbox color={select(java)}>
                            <input 
                                type="checkbox" 
                                id="java" 
                                style={{visibility: 'hidden'}}
                                name="java"
                                />
                            <Label for="java" onClick={() => onJava(!java)} />
                            <JavaIcon fill={select(java)} />
                            <CheckboxTitle color={select(java)}>Java</CheckboxTitle>
                        </Checkbox>

                        <Checkbox color={select(html)}>
                            <input 
                                type="checkbox" 
                                id="html" 
                                style={{visibility: 'hidden'}}
                                name="html"
                                />
                            <Label for="html" onClick={() => onHtml(!html)}/>
                            <HtmlIcon fill={select(html)} />
                            <CheckboxTitle color={select(html)}>Html</CheckboxTitle>
                        </Checkbox>

                        <Checkbox color={select(empty)}>
                            <input 
                                type="checkbox" 
                                id="empty"
                                style={{visibility: 'hidden'}}
                                name="empty"
                                />
                            <Label for="empty" onClick={() => onEmpty(!empty)}/>
                            <EmptyIcon fill={select(empty)} />
                            <CheckboxTitle color={select(empty)}>없음</CheckboxTitle>
                        </Checkbox>

                        <Checkbox color={select(guitar)}>
                            <input 
                                type="checkbox"
                                id="etc"
                                style={{visibility: 'hidden'}}
                                name="etc-checkbox"
                                />
                            <Label for="etc" onClick={() => onGuitar(!guitar)} />
                            <GuitarIcon fill={select(guitar)} />
                            <CheckboxTitle color={select(guitar)}>기타</CheckboxTitle>
                        </Checkbox>
                    </div>
                    <InputContainer>
                        <FaGuitar style={{color: select(guitar), fontSize: '2rem'}} />
                        <CustomInput 
                            placeholder="체크박스 이외의 언어 ex) js, c#, ..."
                            color={select(guitar)}
                            readOnly={guitar ? false : true}
                            name="etc-input"
                            ref={etcInputRef}
                            maxLength="20"
                            onKeyUp={e => inspectionStr(e, etcInputRef)}
                            onKeyDown={e => inspectionStr(e, etcInputRef)}
                            autoComplete="off"
                            />
                    </InputContainer>
                    <CustomSubmit type="button" onClick={onSubmit}>신청</CustomSubmit>
                </Form>
                {/* form end */}


                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '2rem', 
                    color: lightGreen,
                    }}>Character Coding Community Apply Form . <RotateDash /></div>
            </CmdContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CmdContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: black;
    border: 0.5rem solid #D3D3D3;
    border-top: none;
    height: 70vh;
    width: 90%;
    margin-bottom: 10vh;
`;

const CmdNav = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 5%;
    padding: 0 0.5rem;
    background-color: #D3D3D3;
    border-bottom: 0.3rem solid #D3D3D3;
`;

const StyledCursor = styled(BsCursorText)`
    @keyframes blink-effect {
        50% {
            opacity: 0;
        }
    }
    animation: blink-effect 1s step-end infinite;
`;

const Form = styled.form`
    display: flex;
    gap: 0.2rem;
    flex-direction: column;
    align-items: center;
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
`;

const CustomInput = styled.input`
    border: none;
    background-color: transparent;
    border-bottom: 0.1rem dashed ${props => props.color};
    width: 80%;
    height: 3rem;
    color: ${props => props.color};
    font-size: 1.8rem;
    ::placeholder {
        color: ${props => props.color}
    }
    :focus {
        outline: none;
    }
`;

const Checkbox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 10rem;
    width: 8rem;
    border: 0.2rem dashed ${props => props.color};
`;


const CheckboxTitle = styled.span`
    font-size: 2rem;
    padding-bottom: 1rem;
    color: ${props => props.color};
`;

const Label = styled.label`
    position: absolute;
    width: 8rem;
    height: 10rem;
`;

const CustomSubmit = styled.button`
    border: 0.2rem dashed #00FF00;
    background-color: transparent;
    color: #00FF00;
    margin-top: 1rem;
    padding: 1rem 0;
    width: 25%;
`;

const RotateDash = styled(BsDashLg)`
    animation: rotate_image 5s linear infinite;
    transform-origin: 50% 50%;
    @keyframes rotate_image {
	    100% {
        	transform: rotate(360deg);
        }
    }
`

export default Apply;