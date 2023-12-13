interface Props {
    isChecked: boolean;
    name: string;
}

const TickBoxCard = ({isChecked, name}: Props) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} />
        {name}
      </label>
    </div>
  )
}

export default TickBoxCard