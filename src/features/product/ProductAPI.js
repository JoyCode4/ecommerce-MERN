import axios from "axios";
export async function fetchAllProducts() {
  const data = await axios.get("http://localhost:8080/products");
  return data;
}
