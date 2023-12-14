import { generateData } from "./InsertData";
import { User } from "./interfaces";

export function getUsers() {
  let data: User[] = [];
  try {
    const storedData = localStorage.getItem("users");
    console.log(storedData);

    if (storedData) {
      const parsedData = JSON.parse(storedData);

      if (Array.isArray(parsedData)) {
        // Assuming the data is an array of User objects
        data = parsedData;
      } else {
        console.error(
          "Invalid data format in localStorage. Expected an array."
        );
      }
    } else {
      data = generateData();
    }
  } catch (error) {
    console.log(error);
  }
  return data;
}
