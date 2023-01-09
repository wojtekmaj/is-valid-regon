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
  for (let position = 0; position < weights9.length; position += 1) {
    const weight = weights9[position];
    const digit = parseInt(regon[position], 10);
    sum += weight * digit;
  }

  const checksum = (sum % 11) % 10;

  if (checksum !== parseInt(regon[8], 10)) {
    return false;
  }

  if (regon.length === 14) {
    // calculate second checksum
    let sum2 = 0;
    for (let position = 0; position < weights14.length; position += 1) {
      const weight = weights14[position];
      const digit = parseInt(regon[position], 10);
      sum2 += weight * digit;
    }

    const checksum2 = (sum2 % 11) % 10;

    if (checksum2 !== parseInt(regon[13], 10)) {
      return false;
    }
  }

  return true;
}
