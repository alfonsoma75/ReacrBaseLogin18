import HomePage from 'pages/HomePage';
import NotFound404 from "pages/error/NotFound404";
import LoginPage from 'pages/login/LoginPage';


export const BASE_LINK = '/'

export const LOGIN_LINK = '/login'

// Errors
export const NOT_FOUND_404 = '/404-not-found'

export const ALL_LINKS = [
    {
        link: BASE_LINK,
        component: <HomePage />
    },
    {
        link: LOGIN_LINK,
        component: <LoginPage />
    },
    {
        link: NOT_FOUND_404,
        component: <NotFound404 />
    },

]