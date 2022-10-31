import axios from "axios";
import { constants } from "../constants";


export const client = axios.create({
    baseURL: constants.baseUrl,
})