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

export const deleteCartItem = async (itemId) => {
  await axios.delete("http://localhost:8080/cart/" + itemId);
  return itemId;
};

export const resetCart = async (userId) => {
  const data = await axios.get("http://localhost:8080/cart?user=" + userId);
  const items = await data.data;
  for (let item of items) {
    await deleteCartItem(item.id);
  }
  return { status: "success" };
};
