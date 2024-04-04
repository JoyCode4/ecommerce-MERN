import axios from "axios";

export const addToCart = async (item) => {
  const data = await axios.post("http://localhost:8080/cart", item, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const fetchItemsByUserId = async (userId) => {
  const data = await axios.get("http://localhost:8080/cart?user=" + userId);
  return data;
};

export const updateCart = async (update) => {
  const data = await axios.patch(
    "http://localhost:8080/cart/" + update.id,
    update
  );
  console.log(data);
  return data;
};
