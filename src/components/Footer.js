import TrackItTodayLogo from "../assets/images/TrackItTodayLogo.png"
import { Link } from "react-router-dom";
import styled from "styled-components"
export default function Footer() {
    return (
        <FooterBox>
            <Link to='/Habitos'>
                <p>Hábitos</p>
            </Link>
            <Link to='/Hoje'>
                <TodayImage src={TrackItTodayLogo} alt="TrackItTodayLogo" />
            </Link>
            <Link to='/Historico'>
                <p>Histórico</p>
            </Link>
        </FooterBox>
    )
}

const FooterBox = styled.div`
    position: fixed;
    bottom: 0;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 70px;
    width: 100%;
    p{
        font-size: 18px;
        font-weight: 400;
        color: #52B6FF;
        font-family: Lexend Deca;
        text-decoration: none;
    }
    `
const TodayImage = styled.img`
    width: 91px;
    height: 91px;
    margin-bottom: 45px;
    box-shadow: inset 10px 10px #FFFFFF;
`
