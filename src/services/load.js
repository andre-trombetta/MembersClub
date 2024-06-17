import {apiConfig} from "./api-config.js"

export async function getInfo({id}){
  try {
    const response = await fetch(`${apiConfig.baseURL}/clients/${id}`)

    const data = await response.json()

    console.log(data)

    return data;

  } catch (error) {
    console.log("erro ao tentar acessar o DB")
    throw error
  }
}