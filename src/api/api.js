import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import queryString from 'query-string'

const api = axios.create({
    baseURL: '',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
    },
    paramsSerializer: params => queryString.stringify(params)
})

export default api