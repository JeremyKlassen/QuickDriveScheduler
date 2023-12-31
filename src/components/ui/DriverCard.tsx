import { Trip } from "../../utils/interfaces";
import ClientCard from "./ClientCard";

interface Props {
  trip: Trip;
}

const DriverCard = ({ trip }: Props) => {
  const clients = trip.pickups;
  return (
    <>
      <h1 className="text-xl font-bold text-purple-600">
        Driver: {trip.driver.name}
      </h1>
      {clients.map((pickup) => (
        <ClientCard name={pickup.user2.name} />
      ))}
      <br />
    </>
  );
};

export default DriverCard;
