import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  const pipe = new TruncatePipe();

  it('should truncate long text', () => {
    const result = pipe.transform('1234567890', 5);
    expect(result).toBe('12345...');
  });

  it('should return original text if short', () => {
    const result = pipe.transform('Short', 10);
    expect(result).toBe('Short');
  });
});
