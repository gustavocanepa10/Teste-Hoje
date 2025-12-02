import { api } from "../lib/axios";

export async function getUsers() {
  const response = await api.get("/?results=10"); 
  return response.data.results; 
}
