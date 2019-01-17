export const AUTH0_DOMAIN = "newappnikodanjaime.auth0.com";
export const AUTH0_CLIENT_ID = "cOqLc1TxHSLNlWrBS0blJVUyaKo4XfEZ";
export const AUTH0_API_AUDIENCE = "https://newappnikodanjaime.auth0.com/api/v2/";
export const AUTH0_LOGIN_REDIRECT_URL = process.env.REACT_APP_AUTH0_LOGIN_REDIRECT_URL || 'http://localhost:3000/callback';
export const AUTH0_LOGOUT_REDIRECT_URL = process.env.REACT_APP_AUTH0_LOGOUT_REDIRECT_URL || 'http://localhost:3000/';

//App server
export const APP_SERVER_URL = process.env.REACT_APP_APP_SERVER_URL || 'http://localhost:8080';