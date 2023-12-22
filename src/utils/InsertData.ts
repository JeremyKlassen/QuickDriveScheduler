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
