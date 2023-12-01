import axios from 'axios'
const api = axios.create({
    baseURL: 'https://figmaliniker2-0-g8v9.vercel.app/',
    headers: {
        'Content-Type': 'application/json',
    },
})
export default api