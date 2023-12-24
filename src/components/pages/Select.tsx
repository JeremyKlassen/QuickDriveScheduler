import { useNavigate } from "react-router-dom";
import TickBoxCard from "../ui/TickBoxCard";
import { useState } from "react";
import { User } from "../../utils/interfaces";
import { getUsers } from "../../utils/GetData";
import { createPickups } from "../../utils/CreateSchedule";
import { getChecked } from "../../utils/ManipulateData";

const handleCreateSchedule = (
  driverUsers: User[],
  clientUsers: User[],
  locationUsers: User[],
  scheduleType: string
) => {
  const dc = "driversChecked";
  const cc = "clientsChecked";
  const location = locationUsers.find((obj) => obj?.name === scheduleType);
  localStorage.setItem("location", JSON.stringify(location));
  localStorage.setItem("scheduleType", JSON.stringify(scheduleType));
  localStorage.setItem("driversAll", JSON.stringify(driverUsers));
  localStorage.setItem("clientsAll", JSON.stringify(clientUsers));
  getChecked("driversAll", dc);
  getChecked("clientsAll", cc);
  switch (scheduleType) {
    case "home":
      const home: User = {
        name: "home",
        coordinates: "",
        role: "",
        isChecked: false,
      };
      createPickups(dc, cc, home);
      break;
    default:
      createPickups(dc, cc, location as User);
      break;
  }
};

const Select = () => {
  let data: User[] = getUsers();

  const [userStates, setUserStates] = useState<User[]>(data);
  const [selectedName, setSelectedName] = useState("home");

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
      <div className="m-3">
        <h2 className="text-3xl font-bold mb-3">Clients</h2>
        {clientUsers.map((clientUsers, index) => (
          <TickBoxCard
            key={index}
            isChecked={clientUsers.isChecked}
            setIsChecked={(isChecked) =>
              setIsChecked(index, isChecked, "client")
            }
            name={clientUsers.name}
          />
        ))}
      </div>
      <hr />
      <div className="m-3">
        <h2 className="text-3xl font-bold mb-3">Drivers</h2>
        {driverUsers.map((driverUsers, index) => (
          <TickBoxCard
            key={index}
            isChecked={driverUsers.isChecked}
            setIsChecked={(isChecked) =>
              setIsChecked(index, isChecked, "driver")
            }
            name={driverUsers.name}
          />
        ))}
      </div>
      <hr />
      <div className="m-3">
        <div>
          <h2>Starting Location</h2>
          <select
            className="text-black m-1 mb-4"
            value={selectedName}
            onChange={(e) => setSelectedName(e.target.value)}
          >
            <option value="home">Pick up from home</option>
            {locationUsers.map((locationUsers) => (
              <option key={locationUsers.name} value={locationUsers.name}>
                {locationUsers.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-rows-2 place-items-center">
          <button
            onClick={() => {
              handleCreateSchedule(
                driverUsers,
                clientUsers,
                locationUsers,
                selectedName
              );
              navigate("/Schedule");
            }}
            className="blueButton m-1 w-1/2 "
          >
            Create Schedule
          </button>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="greyButton m-1 w-1/2"
          >
            To Home Page
          </button>
        </div>
      </div>
    </>
  );
};

export default Select;
