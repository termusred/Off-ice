import BaseLayout from "../../components/Layout/BaseLayout.jsx";
import { SHOP } from "../../constants/ROUTES.js";
import ShopP from "./containers/Shop.jsx";

export default () => [
    {
        path:SHOP,
        component:ShopP,
        layout:BaseLayout
    }
]