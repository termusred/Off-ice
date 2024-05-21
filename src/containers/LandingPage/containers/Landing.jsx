import styled from "styled-components"
import Can1 from "../../../img/Beverage_Can_OMJ!_Sparkling_Tropical_330ml.G03.watermarked.2k-transformed.png"
import Can2 from "../../../img/Beverage_Can_Pepsi_Cherry_Vanilla_330ml.G03.watermarked.2k-transformed.png"
import Can3 from "../../../img/Chupa Chups Grape 330ml Beverage Can.G03.watermarked.2k.png"
import { useState } from "react"
import Delivary from "../../../img/—Pngtree—motorcycles cartoon pizza and food_7514344.png"

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
        transition: all 10ms;
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
    height: 10rem;
    background-color: red;
`
const Bike = styled.img`
    position: relative;
    left: 0px;
    width: 20rem;
    animation: Car 4s infinite;
    @keyframes Car {
        0%{
        }
        100%{
            left: 75%;
        }
    }
`
const Landing = () => {
    const Cans = [
        Can1,
        Can2,
        Can3,
        Can1,
        Can2,
        Can3,
        Can1,
        Can2,
    ]
    let [AllDs , setAllDs] = useState(1221)
    setInterval(() => {
        setAllDs(++AllDs)
    } , 4000);
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
                <CansShowing>
                    {Cans.map((el) => {
                        return(
                            <IndividualCan src={el}></IndividualCan>
                        )
                    })}
                </CansShowing>
            </AllDrinks>
            <Delivery>
                <DeliveryTitle><CansTitle>We delivered {AllDs} since opening</CansTitle></DeliveryTitle>
                <Bike src={Delivary}></Bike>
                <Land></Land>
            </Delivery>
        </Container>
    )
}

export default Landing