function generateRandomPlusCode() {
  return Math.random().toString(36).slice(2, 8);
}

function getRandomRole(roleToGet: number) {
  if (roleToGet < 4) return "client";
  else if (roleToGet < 8) return "driver";
  else return "location";
}

export function generateData() {
  const data = Array.from({ length: 10 }, (_, i) => ({
    name: `User ${i + 1}`,
    plusCode: generateRandomPlusCode(),
    role: getRandomRole(i),
    isChecked: true,
  }));

  return data;
}
