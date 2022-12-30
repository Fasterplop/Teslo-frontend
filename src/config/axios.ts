import { API_URL } from "@/utils";
import axios from "axios";

export const axiosClient = axios.create({ baseURL: API_URL });
