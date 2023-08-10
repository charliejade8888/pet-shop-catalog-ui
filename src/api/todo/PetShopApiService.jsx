import axios from "axios"

// export function retrievePets() {
//     return axios.get('http://localhost:9000/catalog/list?pageNo=1&pageSize=10', {
//         headers: {
//             'Authorization': 'Bearer ' + sessionStorage.getItem("bearer-token")
//         }
//       })
// }

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:9000'
    }
);

export const retrievePetApi = (name) => apiClient.get(`/catalog/search?petName=${name}`, {
    headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem("bearer-token")
    }
}) 

export const retrievePetsApi = () => apiClient.get('/catalog/list?pageNo=1&pageSize=10', {
    headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem("bearer-token")
    }
}) 

export const deletePetApi = (name) => apiClient.delete(`/catalog/delete/${name}`, {
    headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem("bearer-token")
    }
}) 


export const updatePet = (name, price) => axios.patch(`http://localhost:9000/catalog/update/${name}`, {price: `${price}`}, {
    headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem("bearer-token"),
        'Content-Type': 'application/json;charset=utf-8'
    }
})

export const createPetApi = (pet) => apiClient.post(`/catalog/add`, pet, {
    headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem("bearer-token"),
        'Content-Type': 'application/json;charset=utf-8'
    }
})

// TODO not sure how to do this ... follow vid along!!
// TODO see 248 on doing auth correctly with interceptor


