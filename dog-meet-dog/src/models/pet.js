const url = process.env.REACT_APP_API_URL || 'localhost:5000/api/v1'

export default class PetModel {
    static async create(data) {
        const res = await fetch(`${url}/auth/signUp`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        return await res.json()
    }

    static async login(credentials) {
        const res = await fetch(`${url}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(credentials)
        })
        return await res.json()
    }

    static async signOut() {
        const res = await fetch(`${url}/auth/signOut`, {
            method: "DELETE",
            credentials: "include",
        })
        return await res.json
    }
}