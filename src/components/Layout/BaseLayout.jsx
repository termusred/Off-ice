import styled from "styled-components"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Container = styled.div`
    margin: 2rem;
`
const Basement = styled.div`

`
const BaseLayout = ({children}) => {
    return(
        <Container>
            <Navbar/>
            <Basement>
                {children}
            </Basement>
            <Footer/>
        </Container>
    )
}

export default BaseLayout