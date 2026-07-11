/**
 * 🧮 Haversine Formula (No Premium API costs!)
 * Calculates the exact distance in meters between two coordinates on earth.
 */
const calculateDistanceInMeters = (lat1, lon1, lat2, lon2) => {
  const R = 6371e3; // Earth radius in meters
  const phi1 = (lat1 * Math.PI) / 180;
  const phi2 = (lat2 * Math.PI) / 180;
  const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
  const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(phi1) * Math.cos(phi2) *
    Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Returns distance in meters
};

/**
 * 🚨 Task: Real-time Safe Zone Warning Evaluator
 * Checks distance against safety boundaries and sounds an alert hook.
 */
export const checkSafetyBoundary = (currentLat, currentLon, homeLat, homeLon, maxRadiusMeters = 500) => {
  const distance = calculateDistanceInMeters(currentLat, currentLon, homeLat, homeLon);
  
  if (distance > maxRadiusMeters) {
    return {
      isSafe: false,
      distanceExceeded: Math.round(distance - maxRadiusMeters),
      message: `ALERT: Patient has moved past the designated safe zone perimeter!`
    };
  }
  
  return { isSafe: true, distanceExceeded: 0, message: "Patient is inside safe zone." };
};