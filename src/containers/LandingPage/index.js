import BaseLayout from "../../components/Layout/BaseLayout";
import { LANDING } from "../../constants/ROUTES";
import Landing from "./containers/Landing";

export default () => [
    {
        path:LANDING,
        component:Landing,
        layout:BaseLayout
    }
]