import { CreditLabelPipe } from './credit-label.pipe';

describe('CreditLabelPipe', () => {
  const pipe = new CreditLabelPipe();

  it('transforms 1 credit', () => expect(pipe.transform(1)).toBe('1 Credit'));
  it('transforms 3 credits', () => expect(pipe.transform(3)).toBe('3 Credits'));
  it('transforms null as No Credits', () => expect(pipe.transform(null)).toBe('No Credits'));
});
