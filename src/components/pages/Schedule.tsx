import { useNavigate } from "react-router-dom";
import { Trip } from "../../utils/interfaces";
import DriverCard from "../ui/DriverCard";

const Schedule = () => {
  const navigate = useNavigate();
  const data = localStorage.getItem("schedule");
  console.log(data);

  let schedule: Trip[] = [];
  if (data != null) schedule = JSON.parse(data);
  console.log(schedule);
  return (
    <>
      {schedule.map((trip, index) => (
        <DriverCard trip={trip} />
      ))}
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        To Home Page
      </button>
    </>
  );
};

export default Schedule;
