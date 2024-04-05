import axios from "axios";

export async function createOrder(order) {
    const data = await axios.post("http://localhost:8080/orders", order, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
}
