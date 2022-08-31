import axios from "axios";
import { Request, Response } from "express";

export const getFullAddress = async (cep: string) => {
    try {
        
        const address = await axios.
            get(`https://viacep.com.br/ws/${cep}/json/`)


        return address.data
        
    } catch (error) {
        console.log(error)
    }
}