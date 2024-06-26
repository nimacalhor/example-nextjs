export function getRandomNumberInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomBoolean() {
  return Math.random() >= 0.5;
}
