interface Props {
  name: string;
}

const ClientCard = ({ name }: Props) => {
  return (
    <>
      <h2>{name}</h2>
    </>
  );
};

export default ClientCard;
