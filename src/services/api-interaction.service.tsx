const axios = require('axios');

export const SignInService = () => {
    return axios.get('signInCredentials.json', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


export const SignOutService = () => {
    return axios.post('https://imc-fe-challenge.herokuapp.com/oauth/token', {
        "grant_type": "password",
        "email": "jane@itsmycargo.test",
        "password": "hellocargo"
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
