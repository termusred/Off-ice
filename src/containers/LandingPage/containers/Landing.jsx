import styled from "styled-components"
import Can1 from "../../../img/Beverage_Can_OMJ!_Sparkling_Tropical_330ml.G03.watermarked.2k-transformed.png"
import Can2 from "../../../img/Beverage_Can_Pepsi_Cherry_Vanilla_330ml.G03.watermarked.2k-transformed.png"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    `
const Title = styled.span`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bolder;
    margin-top: 5rem;
    font-size: 8rem;
`
const Can = styled.div`
    display: flex;
    height: 100%;
    width: 50%;
    background-size: cover;
    animation: Canswitch 2s infinite ease-in-out;
    @keyframes Canswitch {
        0%{
            background-image: url(${Can1});
        }
        50%{
            background-image: url(${Can2});
        }
        100%{
            background-image: url(${Can1});
        }
    }
`
const TextCon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 50%;
    -webkit-box-shadow: inset 200px 0px 86px -40px rgba(173,173,173,1);
    -moz-box-shadow: inset 200px 0px 86px -40px rgba(173,173,173,1);
    box-shadow: inset 200px 0px 86px -40px rgba(173,173,173,1);
`
const Since = styled.h2`
    
`
const HeroBanner = styled.div`
    display: flex;
    text-align: center;
    height: 100vh;
    background-color: ${({theme}) => theme.Landing};
`
const AllDrinks = styled.div`
    display: flex;
    margin-top: 3rem;
    height: 100vh;
    background-color: ${({theme}) => theme.Landing};
`
const CansTitle = styled.span`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bolder;
    margin-top: 5rem;
    font-size: 4rem;
`
const Landing = () => {
    return(
        <Container>
            <HeroBanner>
                <TextCon>
                    <Title>All drinks that mind can remember</Title>
                    <Since>Since 2021 in your service</Since>
                </TextCon>
                <Can></Can>
            </HeroBanner>
            <AllDrinks>
                <CansTitle>All drinks we have in stock</CansTitle>

            </AllDrinks>
        </Container>
    )
}

export default Landing