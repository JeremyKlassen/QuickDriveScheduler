import { ClientDrive, User, Trip } from "./interfaces";

export function createPickups(driverString: string, clientString: string) {
  const tempData = localStorage.getItem(driverString);
  const tempData2 = localStorage.getItem(clientString);
  let schedule: Trip[] = [];
  if (tempData !== null && tempData2 !== null) {
    const drivers: User[] = JSON.parse(tempData);
    const clients: User[] = JSON.parse(tempData2);

    const shuffledDrivers = shuffleArray([...drivers]);
    let ClientsDupe = JSON.parse(JSON.stringify(clients));
    // structuredClone(clients);
    let driverStepCount = 0;
    shuffledDrivers.forEach((driver) => {
      // console.log("dupe", ClientsDupe);

      if (ClientsDupe.length > 0) {
        let ratio =
          ClientsDupe.length / (shuffledDrivers.length - driverStepCount);
        driverStepCount++;
        if (ratio > 2) {
          schedule.push(makeADrive(driver, ClientsDupe, 3));
        } else if (ratio > 1) {
          schedule.push(makeADrive(driver, ClientsDupe, 2));
        } else if (ratio > 0) {
          if (shuffledDrivers.length > 0)
            schedule.push(makeADrive(driver, ClientsDupe, 1));
          else {
            localStorage.setItem("schedule", JSON.stringify(schedule));
            return;
          }
        } else {
          localStorage.setItem("schedule", JSON.stringify(schedule));
          return;
        }
      } else {
        schedule.push({
          driver: driver,
          pickups: [],
        });
      }
    });
  } else {
    console.log("error, no local storage for one of the parameters provided.");
    console.log("client", tempData2);
    console.log("driver", tempData);
  }

  localStorage.setItem("schedule", JSON.stringify(schedule));
}

const makeADrive = (driver: User, ClientsDupe: User[], cycles: number) => {
  let trip: Trip = {
    driver: driver,
    pickups: [],
  };
  for (let i = 0; i < cycles; i++) {
    let DriverDistances: ClientDrive[] = [];

    ClientsDupe.forEach((client) => {
      if (driver.role === "driver" && client.role === "client") {
        DriverDistances.push({
          distance: calculateDistance(driver.coordinates, client.coordinates),
          user1: {
            name: driver.name,
            coordinates: driver.coordinates,
            role: driver.role,
            isChecked: driver.isChecked,
          },
          user2: {
            name: client.name,
            coordinates: client.coordinates,
            role: client.role,
            isChecked: client.isChecked,
          },
        });
      }
    });
    console.log(ClientsDupe);

    const distanceData = shortestDrive(DriverDistances);
    const toRemove = distanceData.longestDrive;
    trip.pickups.push(toRemove);
    ClientsDupe.splice(distanceData.index, 1);
    console.log(ClientsDupe);
  }
  return trip;
};

const shortestDrive = (drives: ClientDrive[]) => {
  let longestDrive: ClientDrive = drives[0];
  let index = 0,
    counter = 0;
  drives.forEach((drive) => {
    if (drive.distance < longestDrive.distance) {
      longestDrive = drive;
      index = counter;
    }
    counter++;
  });
  return { longestDrive, index };
};

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function calculateDistance(coord1: string, coord2: string): number {
  const [lat1, lon1] = coord1.split(",").map(parseFloat);
  const [lat2, lon2] = coord2.split(",").map(parseFloat);

  const R = 6371; // Earth's radius in kilometers

  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;

  return distance;
}
