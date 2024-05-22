import styled from "styled-components"
import { Cocain } from "../../../img/CansPicture"
import { useState } from "react"
import Delivary from "../../../img/—Pngtree—motorcycles cartoon pizza and food_7514344.png"
import Vend1 from "../../../img/Vending Machine Fanta.G02.watermarked.2k.png"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    `
const Title = styled.span`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bolder;
    margin-top: 5rem;
    font-size: 6rem;
`

const Can = styled.div`
    display: flex;
    height: 100%;
    width: 50%;
    background-size: cover;
    animation: Canswitch 1s infinite ease-in-out;
    @keyframes Canswitch {
        0%{
            background-image: url(${Cocain[0].img});
        }
        25%{
            background-image: url(${Cocain[1].img});
        }
        50%{
            background-image: url(${Cocain[2].img});
        }
        70%{
            background-image: url(${Cocain[1].img});
        }
        100%{
            background-image: url(${Cocain[0].img});
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
    flex-wrap: wrap;
    background-color: ${({theme}) => theme.Landing};
`
const AllDrinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    background-color: ${({theme}) => theme.Landing};
`
const CansTitle = styled.span`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bolder;
    margin-top: 5rem;
    font-size: 4rem;
`
const CansShowing = styled.div`
    display: flex;
    gap: 2rem;
    padding: 1rem;
    flex-wrap: wrap;
    width: 90%;
    height: 90%;
    /* background-color: ${({theme}) => theme.AllDrinks.background}; */
`
const IndividualCan = styled.img`
    border-radius: 12px;
    width: 16rem;
    height: 18rem;
    &:hover{
        scale: 1.1;
        transition: all 1s;
        background-color: #f0f0f0;
    }
    background-color: #ffffff64;
`
const Delivery = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    height: 100vh;
    width: 100%;
    background-color: ${({theme}) => theme.AllDrinks.background};
`
const DeliveryTitle = styled.div`
    
`
const Land = styled.div`
    width: 100%;
    height: 25rem;
    color: white;
    font-size: 2rem;
    cursor: default;
    background-color: #202020;
`
const Bike = styled.img`
    position: relative;
    top: 10rem;
    left: 0px;
    width: 20rem;
    animation: Car 10s infinite;
    @keyframes Car {
        0%{
        }
        100%{
            left: 75%;
        }
    }
`
const Info = styled.div`
    display: flex;
    height: 50vh;
    width: 100%;
    background-color: black;
`
const Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 50%;
    color: white;
    height: 100%;
`
const SmallerText = styled.h3`

`
const InfoTitle = styled.h1`
    
`
const ForOffices = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    height: 100vh;
    width: 100%;
    border-radius: 2rem;
`
const Vens = styled.div`
    display: flex;
    gap: 2rem;
`
const Bg = styled.div`
    padding: 8rem;
    border-radius: 2rem;
    background-color: ${({theme}) => theme.ForOffice.background};
`
const AboutUs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    width: 80rem;
    height: 30rem;
    border-radius: 1rem;
    background-color: #ffffff;
`
const Landing = () => {
    const Vuns = [
        Vend1,
        Vend1,
        Vend1,
        Vend1,

    ]
    let [AllDs , setAllDs] = useState(21)
    setInterval(() => {
        setAllDs(++AllDs)
    } , 10000);

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
                <AboutUs>
                    <CansTitle>The biggest drinks seller in the market</CansTitle>
                    <SmallerText>We provide our custemers with drinks they get. <br /> Most of custemers are offices with many thisty employees. <br /> But we sell drinks to ordinary people too. <br /> Prices are low and delivary is fast. <br /> If you want vending machines , we can give you that. <br /> We provide every thing releted to soft drinks</SmallerText>
                </AboutUs>
                <CansTitle>All drinks we have in stock</CansTitle>
                <CansShowing>
                    {Cocain.map((el , ind) => {
                        return(
                            <IndividualCan src={el.img} key={ind}></IndividualCan>
                        )
                    })}
                </CansShowing>
            </AllDrinks>
            <Delivery>
                <DeliveryTitle><CansTitle>We delivered {AllDs} times since you opened this page</CansTitle></DeliveryTitle>
                <Bike src={Delivary}></Bike>
                <Land>From us to you</Land>
            </Delivery>
            <ForOffices>
                <Bg>
                    <CansTitle>We also provide vending machines</CansTitle>
                    <Vens>
                        {Vuns.map((el, ind) => {
                            return (<IndividualCan src={el} key={ind}></IndividualCan>)
                        })}
                    </Vens>
                </Bg>
            </ForOffices>
            <Info>
                <Text>
                    <InfoTitle>Read before complaining</InfoTitle>
                    <SmallerText>We pack your drinks and deliver it straight to you. <br /> We <strong>dont</strong>  produce anything and  <br />we <strong>do not</strong>  have responsability for any harm done by drinks. </SmallerText>
                </Text>
            </Info>
        </Container>
    )
}

export default Landing