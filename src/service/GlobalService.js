import axios from "axios"

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY

const axiosClient = axios.create({
    baseURL:'http://localhost:1337',
    headers:{
        'Content-Type':'application/json',

        'Authorization': `Bearer ${API_KEY}`

    }
})

const createNewResume = (data)=> axiosClient.post('/api/user-resumes', data)

const getUserResumes  = (userEmail)=> axiosClient.get('/api/user-resumes?filters[userEmail][$eq]='+userEmail) 
export default{
    createNewResume,
    getUserResumes
}