import axios from "axios"

import { SellerProps } from "@/types"

export async function fetchSellers() {
  try {
    const response = await axios.get("http://localhost:8000/sellers")
    return response.data as SellerProps[]
  } catch (err) {
    console.error(err)
  }
}