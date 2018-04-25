import { CapitalizePipe } from './capitalize.pipe';

fdescribe('CapitalizePipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new CapitalizePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "abc" to "Abc"', () => {
    expect(pipe.transform('abc')).toBe('Abc');
  });

  it('transforms "abc def" to "Abc def"', () => {
    expect(pipe.transform('abc def')).toBe('Abc def');
  });

  it('leaves "Abc def" unchanged', () => {
    expect(pipe.transform('Abc def')).toBe('Abc def');
  });

  it('transforms "abc-def" to "Abc-def"', () => {
    expect(pipe.transform('abc-def')).toBe('Abc-def');
  });

  it('transforms "   abc   def" to "   Abc   Def" (preserves spaces) ', () => {
    expect(pipe.transform('   abc   def')).toBe('   abc   def');
  });

});
