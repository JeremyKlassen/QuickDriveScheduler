import { useNavigate } from "react-router-dom";
import { generateData } from "../../utils/InsertData.ts";

const Home = () => {
  const data = generateData();
  const navigate = useNavigate();
  const jsonString = JSON.stringify(data);
  localStorage.setItem("users", jsonString);
  console.log(data);

  return (
    <>
      <button
        onClick={() => {
          navigate("/addData");
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add a Client, Driver, or Location
      </button>
      <button
        onClick={() => {
          navigate("/Select");
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Create a Drive Schedule
      </button>
    </>
  );
};

export default Home;
