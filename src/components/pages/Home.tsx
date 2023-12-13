import { useNavigate } from "react-router-dom";
import { generateData } from "../../utils/InsertData.ts";

const Home = () => {
  const data = generateData();
  const navigate = useNavigate();
  const jsonString = JSON.stringify(data);
  localStorage.setItem("data", jsonString);
  console.log(data);

  return (
    <>
      <button
        onClick={() => {
          navigate("/Select");
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        To Select Screen
      </button>
    </>
  );
};

export default Home;
