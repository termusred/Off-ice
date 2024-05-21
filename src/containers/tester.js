import Landing from "./LandingPage/LandingThrower"
import Shop from "./ShopPage/ShopThrower"

const tester = () => [
    ...Landing(),
    ...Shop()
]

const Routes = () => [...tester()]

export default Routes