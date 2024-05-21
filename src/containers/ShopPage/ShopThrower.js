import BaseLayout from "../../components/Layout/BaseLayout";
import { SHOP } from "../../constants/ROUTES";
import ShopP from "./containers/Shop.jsx";

export default () => [
    {
        path:SHOP,
        component:ShopP,
        layout:BaseLayout
    }
]