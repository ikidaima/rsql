import rsql from '../src';

test('eq method', () => {
  expect.hasAssertions();

  expect(rsql().eq('a', 1).toString()).toBe('a==1');
  expect(rsql().eq('a', 0).toString()).toBe('a==0');
  expect(rsql().eq(null, 1).toString()).toBe('');
  expect(rsql().eq(null, null).toString()).toBe('');
  expect(rsql().eq().toString()).toBe('');
});

test('notEq method', () => {
  expect.hasAssertions();

  expect(rsql().notEq('a', 1).toString()).toBe('a!=1');
  expect(rsql().notEq('a', 0).toString()).toBe('a!=0');
  expect(rsql().notEq(null, 1).toString()).toBe('');
  expect(rsql().notEq(null, null).toString()).toBe('');
  expect(rsql().notEq().toString()).toBe('');
});

test('union by AND', () => {
  expect.hasAssertions();

  expect(
    rsql()
      .notEq('a', 1)
      .and()
      .eq('b', 2)
      .toString()
  ).toBe('a!=1 and b==2');
});

test('union by OR', () => {
  expect.hasAssertions();

  expect(
    rsql()
      .notEq('a', 1)
      .or()
      .eq('b', 2)
      .toString()
  ).toBe('a!=1 or b==2');
});
