import { useNavigate } from "react-router-dom";
import TickBoxCard from "../ui/TickBoxCard";
import { useState } from "react";
import { User } from "../../utils/interfaces";
import { getUsers } from "../../utils/GetData";
import { createPickups } from "../../utils/CreateSchedule";
import { getChecked } from "../../utils/ManipulateData";

const Select = () => {
  let data: User[] = getUsers();

  const [userStates, setUserStates] = useState<User[]>(data);
  const [selectedName, setSelectedName] = useState("");

  const setIsChecked = (index: number, isChecked: boolean, role: string) => {
    setUserStates((prevUserStates) => {
      const updatedUserStates = [...prevUserStates];
      const filteredUsers = updatedUserStates.filter(
        (user) => user.role === role
      );
      filteredUsers[index] = { ...filteredUsers[index], isChecked };
      updatedUserStates.forEach((user, i) => {
        if (user.role === role) {
          updatedUserStates[i] = filteredUsers.shift() || user;
        }
      });

      localStorage.setItem("users", JSON.stringify(updatedUserStates));
      return updatedUserStates;
    });
  };

  const navigate = useNavigate();

  const clientUsers = userStates.filter((user) => user.role === "client");
  const driverUsers = userStates.filter((user) => user.role === "driver");
  const locationUsers = userStates.filter((user) => user.role === "location");

  return (
    <>
      <h2>Clients</h2>
      {clientUsers.map((clientUsers, index) => (
        <TickBoxCard
          key={index}
          isChecked={clientUsers.isChecked}
          setIsChecked={(isChecked) => setIsChecked(index, isChecked, "client")}
          name={clientUsers.name}
        />
      ))}
      <hr />
      <h2>Drivers</h2>
      {driverUsers.map((driverUsers, index) => (
        <TickBoxCard
          key={index}
          isChecked={driverUsers.isChecked}
          setIsChecked={(isChecked) => setIsChecked(index, isChecked, "driver")}
          name={driverUsers.name}
        />
      ))}
      <hr />
      <h2>Locations</h2>
      <select
        className="text-black"
        value={selectedName}
        onChange={(e) => setSelectedName(e.target.value)}
      >
        <option value="" disabled>
          Select a location
        </option>
        {locationUsers.map((locationUsers) => (
          <option key={locationUsers.name} value={locationUsers.name}>
            {locationUsers.name}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        To Home Page
      </button>
      <button
        onClick={() => {
          const dc = "driversChecked";
          const cc = "clintsChecked";
          localStorage.setItem("driversAll", JSON.stringify(driverUsers));
          localStorage.setItem("clientsAll", JSON.stringify(clientUsers));
          getChecked("driversAll", dc);
          getChecked("clientsAll", cc);
          createPickups(dc, cc);
          let temp = localStorage.getItem("schedule");

          navigate("/Schedule");
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Create Schedule
      </button>
    </>
  );
};

export default Select;
