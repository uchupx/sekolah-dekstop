import axios from 'axios'
require('dotenv').config()

export const instance = instance = axios.create({
    baseURL: process.env.BASE_URL
})