import axios from "axios";
export async function fetchAllProducts() {
  const data = await axios.get("http://localhost:8080/products");
  return data;
}

export async function fetchProductsByFilters(filter) {
  //filter = {"category":"smartPhone"} {"brand":"apple"}
  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }
  console.log(filter);
  const data = await axios.get("http://localhost:8080/products?" + queryString);
  return data;
}
