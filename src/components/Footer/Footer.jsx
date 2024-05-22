import styled from "styled-components"
import logo from "../../img/Off-ice.png"

const Container= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 50vh;
    width: 100%;
    background-color: ${({theme}) => theme.Landing};
`
const LogoCon = styled.div`
    width: 2rem;
`
const Logo = styled.img`
    width: 14rem;
    border-radius: 1rem;
`
const Contacts = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: default;
    height: 18rem;
    width: 16rem;
`
const Title = styled.h2`

`
const SmallText = styled.h4`

`
const Footer = () => {
    return(
        <Container>
            <LogoCon>
                <Logo src={logo}></Logo>
            </LogoCon>
            <Contacts>
                <Title>Contacts</Title>
                <SmallText>Telegram</SmallText>
                <SmallText>Instagram</SmallText>
                <SmallText>+998938047551</SmallText>
            </Contacts>
            <Contacts>
                <Title>Documents</Title>
                <SmallText>Contract with Pepsi</SmallText>
                <SmallText>Contract with Cola</SmallText>
                <SmallText>Contract with Fanta</SmallText>
            </Contacts>
        </Container>
    )
}

export default Footer