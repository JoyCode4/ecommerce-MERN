import axios from "axios";
// A mock function to mimic making an async request for data
export async function createUser(userData) {
  const response = await axios.post("http://localhost:8080/users", userData, {
    headers: { "Content-Type": "application/json" },
  });
  return response;
}

export async function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email;
    const password = loginInfo.password;
    const response = await fetch("http://localhost:8080/users?email=" + email);
    const data = await response.json();
    console.log(data);
    if (data.length) {
      if (data[0].password === password) {
        resolve({ data: data[0] });
      } else {
        reject({ message: "Invalid Credentials" });
      }
    } else {
      reject({ message: "User not found" });
    }
  });
}

export async function updateUser(update) {
  const response = await axios.patch("http://localhost:8080/users/"+update.id, update);
  return response;
}
