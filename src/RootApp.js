// States
import AllContext from "./context/AllContext";

// Routers
import HomeRouter from './routers/HomeRouter';


export default function RootApp() {


    return (
        <AllContext>
            <HomeRouter />
        </AllContext>
        
    )
}