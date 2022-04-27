import { ProfileType } from "../types/types";
import axios from "axios";

const instance = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`,
})
export const usersApi = {
    async getUsers() {
        return instance.get<Array<ProfileType>>(`/users`).then(response => response.data)
    },
    async getUserProfile(userId: number ) {
        return instance.get<ProfileType>(`/users/${userId}`).then(response => response.data)
    },
}