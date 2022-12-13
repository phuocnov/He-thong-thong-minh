import Home from "./src/pages/Home"
import Dish from "./src/pages/Dish"
const myRoutes = [
    {
        path: '/',
        exact: true,
        main: ()=><Home/>
    },
    {
        path: '/Dish',
        exact: true,
        main: ()=><Dish/>
    }
]
export default myRoutes