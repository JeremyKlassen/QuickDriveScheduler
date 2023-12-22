import { User } from "./interfaces";

export function getChecked(storage: string, toStore: string) {
  const data = localStorage.getItem(storage);

  let newData: User[] = [];
  if (data !== null) {
    const userData = JSON.parse(data);
    userData.forEach((user: User) => {
      if (user.isChecked == true) newData.push(user);
    });

    localStorage.setItem(toStore, JSON.stringify(newData));
  } else {
    console.log("No localStorage data found");
  }
}
