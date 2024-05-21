import Landing from "./LandingPage"
import Shop from "./ShopPage"

const tester = () => [
    ...Landing(),
    ...Shop()
]

const Routes = () => [...tester()]

export default Routes