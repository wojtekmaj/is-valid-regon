const weights9 = [8, 9, 2, 3, 4, 5, 6, 7];
const weights14 = [2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8];

export default function isValidREGON(rawRegon: string | number): boolean {
  if (!rawRegon) {
    return false;
  }

  // convert to string
  const regon = rawRegon.toString().replace(/[^a-z\d]/gi, '');

  // check if length is 9 digits
  if (regon.length !== 9 && regon.length !== 14) {
    return false;
  }

  // calculate checksum
  let sum = 0;
  weights9.forEach((weight, position) => {
    const digit = Number(regon[position]);
    sum += weight * digit;
  });

  const checksum = (sum % 11) % 10;

  if (checksum !== Number(regon[8])) {
    return false;
  }

  if (regon.length === 14) {
    // calculate second checksum
    let sum2 = 0;
    weights14.forEach((weight, position) => {
      const digit = Number(regon[position]);
      sum2 += weight * digit;
    });

    const checksum2 = (sum2 % 11) % 10;

    if (checksum2 !== Number(regon[13])) {
      return false;
    }
  }

  return true;
}
