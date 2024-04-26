export function makeArray(n: number) {
  return Array.from({ length: n }).map((_, i) => i);
}

export function isArrayValid(arr: any, validateLength: boolean = true) {
  if (!arr) return false;
  if (!Array.isArray(arr)) return false;
  if (!validateLength) return true;
  if (arr.length === 0) return false;
  return true;
}

/**
 * given Object[] returns array with unique items
 */
export function uniqueByProperty(array: any[], propertyName: string) {
  const seen = new Set();
  return array.filter((item) => {
    const property = item[propertyName];
    if (seen.has(property)) {
      return false;
    } else {
      seen.add(property);
      return true;
    }
  });
}

export function isInArrayByProperty(
  object: { [key: string]: any },
  array: any[],
  propertyName: string
) {
  return array.some((item) => item[propertyName] === object[propertyName]);
}

export function getUniqueItems(array: (string | number)[]) {
  return [...new Set(array)];
}

export function removeItemsAfterIndex(arr: any[], index: number) {
  return arr.slice(0, index);
}

export function arraysHaveSameElements(a: string[], b: string[]): boolean {
  if (a.length !== b.length) {
    return false;
  }

  const sortedA = a.slice().sort();
  const sortedB = b.slice().sort();

  for (let i = 0; i < sortedA.length; i++) {
    if (sortedA[i] !== sortedB[i]) {
      return false;
    }
  }

  return true;
}
