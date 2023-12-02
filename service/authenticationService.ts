import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost/api'
})

const JWT_TOKEN_LOCALSTORAGE_KEY = 'jwt_token'
const token = localStorage.getItem(JWT_TOKEN_LOCALSTORAGE_KEY);

axiosInstance.defaults.headers.common['Accept'] = 'application/json;charset=UTF-8';
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

export const authAPI = {
    async login (national_id: any, password: any) {
        const response = await axiosInstance.post('/auth/login', {
            national_id,
            password
        })
        if (response.status == 200) {
            localStorage.setItem(JWT_TOKEN_LOCALSTORAGE_KEY, response.data.access_token)
            return true
        }
        return false
    },
    async me () {
        const _token = localStorage.getItem(JWT_TOKEN_LOCALSTORAGE_KEY)
        if (_token) {
            axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + token
        }
        const response = await axiosInstance.post('/auth/me')
        if (response.status == 200) {
            return response.data.data
        }
        return null
    },
    logout () {
        localStorage.removeItem(JWT_TOKEN_LOCALSTORAGE_KEY)
    },
    async getUser (id: any) {
        const response = await axiosInstance.get(`/users/${id}`)
        if (response.status == 200) {
            return response.data.data
        }
        return []
    }
}