import { api } from "./api";

type User = {
    nickname: string;
    email: string;
}

export async function getUserById(id: string) {
    console.log(id)
    try {
        const res = await api.get(`/user/${id}`) 
        return res.data
    } catch (err) {
        return err
    }
}