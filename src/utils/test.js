import * as turf from "@turf/turf";

export const testFunc = () => {
  // Plus Codes representing two locations
  const plusCode1 = "7FGW8V7P+G8";
  const plusCode2 = "7FGW9V5V+VH";

  // Manual parsing of Plus Codes to get coordinates
  const coordinates1 = turf.coord(turf.point(turf.decode(plusCode1)));
  const coordinates2 = turf.coord(turf.point(turf.decode(plusCode2)));

  // Calculate distance using Turf.js
  const distance = turf.distance(
    turf.point(coordinates1),
    turf.point(coordinates2),
    { units: "kilometers" }
  );

  console.log(`Distance between Plus Codes: ${distance} kilometers`);
};
