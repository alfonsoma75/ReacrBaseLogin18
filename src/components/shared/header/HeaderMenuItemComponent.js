import {useState} from 'react';

// Router
import {useHistory} from 'react-router-dom';

// Material
import {
    Button,
    MenuItem,
    Menu, Divider
} from '@material-ui/core';


export default function HeaderMenuItemComponent({menuItem}) {

    const history = useHistory()

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleLink = link => {
        handleClose()
        history.push(link)
    }

    return (
        <>
            <Button
                aria-controls={`${menuItem.slug}-menu`}
                aria-haspopup="true"
                onClick={handleClick}
            >
                {menuItem.name}
            </Button>
            <Menu
                id={`${menuItem.slug}-menu`}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    menuItem.menuItems.map(subItem => (

                        (subItem.name === 'divider')
                            ?
                                <Divider key={subItem.slug}/>
                            :
                                <MenuItem
                                    key={subItem.slug}
                                    disabled={ (!subItem.active)}
                                    onClick={() => handleLink(subItem.link)}
                                >
                                    {subItem.name}
                                </MenuItem>


                    ))
                }

            </Menu>
        </>
    )
}