function generateRandomPlusCode() {
  // Replace this with your logic for generating random plus codes
  // For simplicity, generating a random string for demonstration purposes
  return Math.random().toString(36).slice(2, 8);
}

function getRandomRole() {
  const roles = ["client", "driver", "location"];
  const randomIndex = Math.floor(Math.random() * roles.length);
  return roles[randomIndex];
}

export function generateData() {
  const data = Array.from({ length: 10 }, (_, i) => ({
    name: `User ${i + 1}`,
    plusCode: generateRandomPlusCode(),
    role: getRandomRole(),
  }));

  return data;
}
