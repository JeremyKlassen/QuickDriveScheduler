import { User } from "./interfaces";

function generateRandomCoordinate() {
  const randomCoordinate = () =>
    (Math.random() * (180 * (Math.random() < 0.5 ? 1 : -1))).toFixed(6);
  return `${randomCoordinate()}, ${randomCoordinate()}`;
}

function getRandomRole(roleToGet: number) {
  if (roleToGet < 4) return "client";
  else if (roleToGet < 8) return "driver";
  else return "location";
}

export function generateData() {
  const data = Array.from({ length: 10 }, (_, i) => ({
    name: `User ${i + 1}`,
    coordinates: generateRandomCoordinate(),
    role: getRandomRole(i),
    isChecked: true,
  }));

  return data;
}

export function generateFixedData(): User[] {
  const hardcodedData: User[] = [
    {
      name: "Mrs. Garden City",
      coordinates: "49.95116753119098, -97.14554069219122", // Winnipeg
      role: "driver",
      isChecked: true,
    },
    {
      name: "Mr. Rossmere",
      coordinates: "49.92964840156931, -97.0887884541914", // Winnipeg (example)
      role: "driver",
      isChecked: true,
    },
    {
      name: "Mr. Transcona Yards",
      coordinates: "49.89135079543632, -96.99657900682847", // Winnipeg (example)
      role: "driver",
      isChecked: true,
    },
    {
      name: "Mrs. U of M",
      coordinates: "49.807473695285296, -97.13690816437776", // Winnipeg (example)
      role: "driver",
      isChecked: true,
    },
    {
      name: "Mr. NorthGate",
      coordinates: "49.94106374424038, -97.15729238277657", // Winnipeg (example)
      role: "client",
      isChecked: true,
    },
    {
      name: "Mrs. KP",
      coordinates: "49.89868120067295, -97.06295288687879", // Winnipeg (example)
      role: "client",
      isChecked: true,
    },
    {
      name: "Mr. Sage Creek",
      coordinates: "49.83090905981914, -97.0376794803125", // Winnipeg (example)
      role: "client",
      isChecked: true,
    },
    {
      name: "Mrs. Linden Woods",
      coordinates: "49.83359636173652, -97.19474213776599", // Winnipeg (example)
      role: "client",
      isChecked: true,
    },
    {
      name: "Mrs. Assiniboine Park",
      coordinates: "49.87067442854297, -97.23405259722428", // Winnipeg (example)
      role: "client",
      isChecked: true,
    },
    {
      name: "Mr. Richardson Airport",
      coordinates: "49.92154125399018, -97.24315064712442", // Winnipeg (example)
      role: "client",
      isChecked: true,
    },
    {
      name: "Mrs. Exchange District",
      coordinates: "49.89762920765599, -97.13735731492358", // Winnipeg (example)
      role: "client",
      isChecked: true,
    },
    {
      name: "Legislative Building",
      coordinates: "49.8847341461308, -97.14642062860224", // Winnipeg (example)
      role: "location",
      isChecked: true,
    },
    {
      name: "Grace Hospital",
      coordinates: "49.8824529412876, -97.27757979010197", // Winnipeg (example)
      role: "location",
      isChecked: true,
    },
  ];

  return hardcodedData;
}
