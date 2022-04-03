import {useContext} from "react";

// Router
import {Link, useNavigate} from 'react-router-dom';

// PrimeReact UI
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

// Context
import AuthContext from 'context/auth/authContext';

// Custom Constants
import {BASE_LINK} from "types/linkTypes";

// Custom CSS
import './customMenuBar.css';
import getMenuItems from "utils/getMenuItems";



export default function CustomMenuBar() {
    const navigate = useNavigate()

    const items = getMenuItems(navigate)

    const authContext = useContext(AuthContext)
    const { doLogout, user } = authContext

    return (
        <Menubar
            model={items}
            // start={<InputText placeholder="Search" type="text"/>}
            start={
                <Link to={BASE_LINK} className="gmc-logo-title">GMC VILLES</Link>
            }
            end={
                <div className="flex justify-content-center align-items-center">

                    <div className="mr-5">{user.username} {(!!user.all_groups) && `|| ${user.all_groups[0].name}`}</div>
                    <div>
                        <Button
                            label="Logout"
                            icon="pi pi-power-off"
                            onClick={() => doLogout()}
                        />
                    </div>
                </div>
            }
        />
    )
}