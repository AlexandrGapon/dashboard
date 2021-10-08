import axios from 'axios'

const instance = axios.create({
    baseURL: '  http://localhost:3100'
})

export const localHostAPI = {
    loadingApp() {
        return instance.get(`/tests`)
    },
    getSite(siteId) {
        return instance.get(`/sites/${siteId}`)
    }
}