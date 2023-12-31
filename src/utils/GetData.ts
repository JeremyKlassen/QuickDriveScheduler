import { User } from "./interfaces";

export function getUsers() {
  let data: User[] = [];

  try {
    const storedData = localStorage.getItem("users");
    if (storedData) {
      const parsedData = JSON.parse(storedData);

      if (Array.isArray(parsedData)) {
        data = parsedData;
      } else {
        console.error(
          "Invalid data format in localStorage. Expected an array."
        );
      }
    }
  } catch (error) {
    console.log(error);
  }
  return data;
}
