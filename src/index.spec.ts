import { describe, expect, it } from 'vitest';
import isValidREGON from './index';

describe('isValidREGON', () => {
  it('returns false for no input', () => {
    // @ts-expect-error-next-line
    const result = isValidREGON();

    expect(result).toBe(false);
  });

  it('returns false for non-numeric input', () => {
    const result = isValidREGON('elephants');

    expect(result).toBe(false);
  });

  it('returns false for partially numeric input', () => {
    const result = isValidREGON('010499966fox');

    expect(result).toBe(false);
  });

  it('returns false for partially numeric input', () => {
    const result = isValidREGON('010499966FOX');

    expect(result).toBe(false);
  });

  it('returns false for invalid input with invalid length', () => {
    const result = isValidREGON('123');

    expect(result).toBe(false);
  });

  it('returns false for invalid input with valid length (9-digit REGON)', () => {
    const result = isValidREGON('287613536');

    expect(result).toBe(false);
  });

  it('returns false for invalid input with valid length (14-digit REGON)', () => {
    const result = isValidREGON('28761353618357');

    expect(result).toBe(false);
  });

  it('returns true for valid numeric input (9-digit REGON)', () => {
    const result = isValidREGON(817613530);

    expect(result).toBe(true);
  });

  it('returns true for valid input (9-digit REGON)', () => {
    const result = isValidREGON('817613530');

    expect(result).toBe(true);
  });

  it('returns true for valid numeric input (14-digit REGON)', () => {
    const result = isValidREGON(12345678512347);

    expect(result).toBe(true);
  });

  it('returns true for valid input (14-digit REGON)', () => {
    const result = isValidREGON('12345678512347');

    expect(result).toBe(true);
  });
});
