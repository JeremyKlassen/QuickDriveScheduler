import { useNavigate } from "react-router-dom";

const AddData = () => {
  const navigate = useNavigate();
  const update = () => {
    navigate("/");
  };
  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={update}
      >
        Update
      </button>
    </>
  );
};

export default AddData;
