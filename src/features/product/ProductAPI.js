import axios from "axios";
export async function fetchAllProducts() {
  const data = await axios.get("http://localhost:8080/products");
  return data;
}

export async function fetchProductsByFilters(filter, sort, pagination) {
  //filter = {"category":["smartPhone","laptops"],"brand":["apple"]}
  // sort={"_sort":"rating"} or {"_sort":"-rating"}
  let queryString = "";
  for (let key in filter) {
    const arr = filter[key];
    if (arr.length > 0) {
      const lastElement = arr[arr.length - 1];
      queryString += `${key}=${lastElement}&`;
    }
  }

  for (let key in sort) {
    queryString += `_sort=${sort[key]}&`;
  }

  for (let key in pagination) {
    console.log(pagination);
    queryString += `${key}=${pagination[key]}&`;
  }

  console.log("http://localhost:8080/products?" + queryString);
  const data = await axios.get("http://localhost:8080/products?" + queryString);
  return {
    products: data.data.data,
    pageDetails: {
      first: data.data.first,
      last: data.data.last,
      prev: data.data.prev,
      next: data.data.next,
      pages: data.data.pages,
      totalItems: data.data.items,
    },
  };
}
