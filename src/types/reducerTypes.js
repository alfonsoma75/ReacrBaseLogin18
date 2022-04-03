// localStorage
export const PRE = (process.env.REACT_APP_LOCAL) ? 'l_' : 's_'
export const ACCESS = `${PRE}_ac`
export const REFRESH = `${PRE}_rf`

// Login y token
export const ADD_TOKEN = 'ADD_TOKEN'
export const REMOVE_TOKEN = 'REMOVE_TOKEN'
export const TOKEN_VALID = 'TOKEN_VALID'
export const REFRESH_TOKEN = 'REFRESH_TOKEN'
export const NO_TOKEN = 'NO_TOKEN'
export const LOGIN = 'LOGIN'

// User Profile
export const GET_USER = 'GET_USER'

// Errors
export const SET_ERROR = 'SET_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'

// Accounting
export const GET_RESERVATION_PAYMENT_REFUND = 'GET_RESERVATION_PAYMENT_REFUND'
export const NEW_PAYMENT = 'NEW_PAYMENT'
export const NEW_REFUND = 'NEW_REFUND'
