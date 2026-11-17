
function validateCoordinates(latitude, longitude) {
  const lat = Number(latitude);
  const lon = Number(longitude);

  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    return { valid: false };
  }

  if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
    return { valid: false };
  }

  return { valid: true, latitude: lat, longitude: lon };
}

module.exports = { validateCoordinates };
