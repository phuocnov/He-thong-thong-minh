import api from "./api";

export default {
    getFood: (limit) => {
        return api.get(`https://swifts-meln.alwaysdata.net/ssystem/foods?limit=${limit}`)
    },
    getSavour: () => {
        return api.get(`https://swifts-meln.alwaysdata.net/ssystem/savour-types`)
    },
    getSimilarFood: (id, limit) => {
        return api.get(`https://swifts-meln.alwaysdata.net/ssystem/similar-foods?limit=${limit}&food_id=${id}`)
    },
    getTasteType: () => {
        return api.get(`https://swifts-meln.alwaysdata.net/ssystem/taste-types`)
    },
    getUser: (email) => {
        return api.get(`https://swifts-meln.alwaysdata.net/ssystem/get-user?email=${email}`)
    },
    updateUserName: (email, name) => {
        return api.get(`https://swifts-meln.alwaysdata.net/ssystem/update-user-name?email=${email}&name=${name}`)
    },
    upsertUserRating: (email, star, foodId) => {
        return api.get(`https://swifts-meln.alwaysdata.net/ssystem/upsert-user-rating?email=${email}&stars=${star}&food_id=${foodId}`)
    },
    yourRating: (email) => {
        return api.get(`https://swifts-meln.alwaysdata.net/ssystem/your-ratings?email=${email}`)
    },
    findFood: (taste_type, savour, limit) => {
        return api.get(`https://swifts-meln.alwaysdata.net/ssystem/foods?taste_type=${taste_type}&limit=${limit}&savours=${savour}`)
    },
    maybeYouLike: (id, limit) => {
        return api.get(`	https://swifts-meln.alwaysdata.net/ssystem/foods?&limit=${limit}&?user_id=${id}`)   
    },
    postNewMeal: (meal) => {
        return api.post('https://swifts-meln.alwaysdata.net/ssystem/create-food', meal)
    }
}