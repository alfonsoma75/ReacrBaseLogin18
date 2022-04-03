export const API_URL = process.env.REACT_APP_API
// export const API_URL = 'http://116.203.19.116:8000'
// export const API_URL = 'http://192.168.1.106:8000'

export const TOKEN_STRING = 'Bearer  '

const API_VERSION = '/api/v1'
const API_BASE = `${API_URL}${API_VERSION}`

// Login y gestion de token
const API_ACCOUNT = `${API_BASE}/account`
export const API_LOGIN = `${API_ACCOUNT}/token`
export const API_CHECK_TOKEN = `${API_LOGIN}/verify`
export const API_REFRESH_TOKEN = `${API_LOGIN}/refresh`

const MANAGE = `${API_BASE}/manage`

// Profile
const PROFILES = `${API_BASE}/profiles`
export const API_GET_USER_DATA = `${PROFILES}/get_user_data`
