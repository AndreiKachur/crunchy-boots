export default class BootsService {

    _apiBase = 'http://localhost:3001'

    async getResourses(url) {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) throw new Error(`Could not fetch ${url}, status ${res.status}`)
        return await res.json()
    }
    async getBootsItems() {
        return await this.getResourses('/boots/')
    }
}