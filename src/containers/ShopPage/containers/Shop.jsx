import styled from "styled-components"
import { Cocain } from "../../../img/CansPicture"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`
const Title = styled.h1`
    margin-left: 1rem;
`
const Cans = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    gap: 2rem;
    width: 98%;
    height: 40rem;
    border-radius: 1rem;
    background-color: #ebc2b9;
`
const Card = styled.div`
    padding: 1rem;
    height: 18rem;
    border-radius: 1rem;
    background-color: #b3b3b3;
`
const Image = styled.img`
    width: 12rem;
`
const Cardbody = styled.div`

`
const Button = styled.button`
    width: 8rem;
    padding: 8px;
    border: 0px;
    &:hover{
        transition: all 400ms;
        background-color: #c4aaaa;
    }
    border-radius: 8px;
`
const Text = styled.h3`

`
const Shop = () => {
    return(
        <Container>
            <Title>Get drinks into your cart</Title>
            <Cans>
                {Cocain.map((el, id) => {
                    const notify = () =>toast(`You have successfuly added ${el.desc} into cart 🍷`, {
                        zIndex:"9999999999999999",

                    });
                        return(
                            <Card key={id}>
                            <Image src={el.img}/>
                            <Cardbody>
                                <Button onClick={notify}>Into Cart</Button>
                                <ToastContainer />
                                <Text>{el.desc}</Text>
                            </Cardbody>
                        </Card>
                    )
                })}
            </Cans>
        </Container>
    )
}

export default Shop