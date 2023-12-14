interface Props {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
  name: string;
}

const TickBoxCard = ({ isChecked, setIsChecked, name }: Props) => {
  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleChange} checked={isChecked} />
        {name}
      </label>
    </div>
  );
};

export default TickBoxCard;
