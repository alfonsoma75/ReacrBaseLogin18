import { Route, Routes } from 'react-router-dom';
import { ALL_LINKS } from 'types/linkTypes';

export default function AppRouter() {
    return (
        <Routes>
            {
                ALL_LINKS.map(itemRoute => (
                    <Route key={itemRoute.link} exact path={itemRoute.link} element={itemRoute.component} />
                ))
            }
        </Routes>
    )
}