import { useNavigate } from "react-router-dom";
import { Trip, User } from "../../utils/interfaces";
import DriverCard from "../ui/DriverCard";
import { getChecked } from "../../utils/ManipulateData";
import { createPickups } from "../../utils/CreateSchedule";

const handleReroll = () => {
  const dc = "driversChecked";
  const cc = "clientsChecked";
  const scheduleType = localStorage.getItem("scheduleType");
  const temp = localStorage.getItem("location");
  const location = JSON.parse(temp as string);

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
      createPickups(dc, cc, location as unknown as User);
      break;
  }
};

const Schedule = () => {
  const navigate = useNavigate();
  const data = localStorage.getItem("schedule");

  let schedule: Trip[] = [];
  if (data != null) schedule = JSON.parse(data);
  return (
    <>
      <div className="mt-5">
        {schedule.map((trip) => (
          <DriverCard trip={trip} />
        ))}
      </div>
      <div className="grid grid-rows-2 place-items-center">
        <button
          className="greenButton w-1/2 mt-10"
          onClick={() => {
            handleReroll();
            navigate("/Schedule");
          }}
        >
          Reroll
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="blueButton w-1/2 mt-10"
        >
          Home
        </button>
      </div>
    </>
  );
};

export default Schedule;
