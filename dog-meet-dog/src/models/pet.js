const url = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1'

export default class PetModel {
    // we are requiring the username here to later ensure we exclude "liking" our own profile
    static async all(username) {
        const res = await fetch(`${url}/pets/${username}`)
        return await res.json()
    }

    static async show(username){
        //here we are using pet instead of pets so we can view one profile specifically either our own or one of our matches
        const res = await fetch(`${url}/pet/${username}`)
        return await res.json()
    }

    static async create(data) {
        const res = await fetch(`${url}/auth/signUp`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        return await res.json()
    }

    static async edit(pet) {
        const res = await fetch(`${url}/pets/${pet.username}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pet)
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

    static async destroy(id) {
        const res = await fetch(`${url}/pets/${id}`, {
            method: "DELETE"
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

    static async like(pet, likedPet) {
        const res = await fetch(`${url}/pets/likes/${pet}`, { 
            method: "PUT", 
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify({ likedPet: likedPet.username })
        })
        return await res.json()
    }
}