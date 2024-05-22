import styled from "styled-components"
import logo from "../../img/Off-ice.png"
import { Link } from "react-router-dom"
import { Search } from 'react-feather';
import { ShoppingBag } from "react-feather";
import { User } from "react-feather";
import {SHOP} from "../../constants/ROUTES"
import { Moon } from "react-feather";
import { useNavigate } from "react-router-dom";

const Nav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    position: sticky;
    z-index: 12;
    top: 0px;
    height: 7rem;
    background-color: ${({theme}) => theme.Nav};
`
const LogoCon = styled.div`
    width: 10rem;
    height: 100%;
`
const Logo = styled.img`
    height: 100%;
    width: 90%;
`
const PagesCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50rem;
    height: 100%;
`
const Navtext = styled.h3`

`
const IconCon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 18rem;
    height: 100%;
`
const ScaleUp = styled.h1`
    scale: 1.3;
`
const Navbar = () => {
    const navigate = useNavigate();
    return(
        <Nav>
            <LogoCon>
                <Link to={"/"}>
                    <Logo src={logo} alt="no image"/>
                </Link>
            </LogoCon>
            <PagesCon>
                <Navtext>
                    <Link to={SHOP}>Shop</Link>
                </Navtext>
                <Navtext>
                    <Link>Find Store</Link>
                </Navtext>
                <Navtext>
                    <Link>Merch</Link>
                </Navtext>
                <Navtext>
                    <Link>Contact</Link>
                </Navtext>
            </PagesCon>
            <IconCon>
                <Search size={34} onClick={() => console.log("finish me")}/>
                <ShoppingBag size={34} onClick={() => navigate("/cart")}/>
                <ScaleUp>|</ScaleUp>
                <Moon size={34} />
                <User size={34} onClick={() => navigate("/profile")}/>
            </IconCon>
        </Nav>
    )
}

export default Navbar