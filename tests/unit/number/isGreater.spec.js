// eslint-disable-next-line
import { isGreater } from '../../../lib/number';

describe('isGreater', () => {
  it('should be return true if 10 is greater than 9.5', () => {
    // Given / When
    const result = isGreater(10, 9.5);
    // Then
    expect(result).toEqual(true);
  });

  it('should be return false if same two arguments', () => {
    // Given / When
    const result = isGreater(10, 10);
    // Then
    expect(result).toEqual(false);
  });

  it('should be return true if 10 is less than 11', () => {
    // Given / When
    const result = isGreater(10, 11);
    // Then
    expect(result).toEqual(false);
  });
});
