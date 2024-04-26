export function getRandomLightColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 30) + 70;
  const lightness = Math.floor(Math.random() * 30) + 70;
  return `hsl(${hue},${saturation}%,${lightness}%)`;
}

export function getDiameter() {
  const height = window.innerHeight;
  const width = window.innerWidth;
  const powerOfTwoDiameter = height * height + width * width;
  console.log({height, width, powerOfTwoDiameter});
  return Math.sqrt(powerOfTwoDiameter)
}
