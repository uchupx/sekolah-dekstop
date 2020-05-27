import axios from 'axios'
require('dotenv').config()

export function Login(username, password) {
    let payload = {
        "grant_type": "password",
        "client_id": process.env.CLIENT_ID,
        "client_secret": process.env.CLIENT_SECRET,
        "username": username,
        "password": password,
        "scope": ""
    }
    // console.log(payload)
    let baseUrl = process.env.BASE_URL

    // axios.defaults.headers['Access-Control-Allow-Origin'] = 'http://localhost:4000'
    // axios.defaults.headers["content-type"] = "application/json";
    return axios.post(baseUrl + '/oauth/token', payload, {
        withCredentials: true
    })
        .then(response => {
            return response.data
        }).catch(e => {
            throw e
        })
}