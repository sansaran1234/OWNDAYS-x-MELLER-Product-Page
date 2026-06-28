import axios from "axios";
import { env } from "@/lib/env";

export const apiClient = axios.create({
  baseURL: env.mellerApiBaseUrl,
  headers: {
    Accept: "application/json",
  },
  timeout: 15_000,
});
