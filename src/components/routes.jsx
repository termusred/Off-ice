import {Routes , Route} from "react-router-dom"


const RoutesContainer = ({routes}) => {
    console.log(routes);
    return(
        <Routes>
            {routes.map((el , ind) => {
                return(
                    <Route key={ind} path={el.path} element={<el.layout><el.component/></el.layout>}/>
                )
            })}
        </Routes>
    )
}

export default RoutesContainer      