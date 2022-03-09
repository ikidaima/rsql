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

test('lt method', () => {
  expect.hasAssertions();

  expect(rsql().lt('a', 1).toString()).toBe('a<1');
  expect(rsql().lt('a', 0).toString()).toBe('a<0');
  expect(rsql().lt(null, 1).toString()).toBe('');
  expect(rsql().lt(null, null).toString()).toBe('');
  expect(rsql().lt().toString()).toBe('');
});

test('le method', () => {
  expect.hasAssertions();

  expect(rsql().le('a', 1).toString()).toBe('a<=1');
  expect(rsql().le('a', 0).toString()).toBe('a<=0');
  expect(rsql().le(null, 1).toString()).toBe('');
  expect(rsql().le(null, null).toString()).toBe('');
  expect(rsql().le().toString()).toBe('');
});

test('gt method', () => {
  expect.hasAssertions();

  expect(rsql().gt('a', 1).toString()).toBe('a>1');
  expect(rsql().gt('a', 0).toString()).toBe('a>0');
  expect(rsql().gt(null, 1).toString()).toBe('');
  expect(rsql().gt(null, null).toString()).toBe('');
  expect(rsql().gt().toString()).toBe('');
});

test('ge method', () => {
  expect.hasAssertions();

  expect(rsql().ge('a', 1).toString()).toBe('a>=1');
  expect(rsql().ge('a', 0).toString()).toBe('a>=0');
  expect(rsql().ge(null, 1).toString()).toBe('');
  expect(rsql().ge(null, null).toString()).toBe('');
  expect(rsql().ge().toString()).toBe('');
});

test('in method', () => {
  expect.hasAssertions();

  expect(rsql().in('a', [1, 2, 3]).toString()).toBe('a=in=(1,2,3)');
  expect(rsql().in(null, 1).toString()).toBe('');
  expect(rsql().in(null, null).toString()).toBe('');
  expect(rsql().in().toString()).toBe('');
  expect(() => rsql().in('a', 1).toString())
    .toThrow('invalid type value for method "in"');
});

test('out method', () => {
  expect.hasAssertions();

  expect(rsql().out('a', [1, 2, 3]).toString()).toBe('a=out=(1,2,3)');
  expect(rsql().out(null, 1).toString()).toBe('');
  expect(rsql().out(null, null).toString()).toBe('');
  expect(rsql().out().toString()).toBe('');
  expect(() => rsql().out('a', 1).toString())
    .toThrow('invalid type value for method "out"');
});

test('exists method', () => {
  expect.hasAssertions();

  expect(rsql().exists('a').toString()).toBe('a=ex=true');
  expect(rsql().exists(null).toString()).toBe('');
  expect(rsql().exists().toString()).toBe('');
});

test('notExists method', () => {
  expect.hasAssertions();

  expect(rsql().notExists('a').toString()).toBe('a=ex=false');
  expect(rsql().notExists(null).toString()).toBe('');
  expect(rsql().notExists().toString()).toBe('');
});

test('re method', () => {
  expect.hasAssertions();

  expect(rsql().re('a', 123).toString()).toBe('a=re=123');
  expect(rsql().re('a', '^qwe').toString()).toBe('a=re=^qwe');
  expect(rsql().re('a', '"one two three"').toString())
    .toBe('a=re="one two three"');
  expect(rsql().re(null, 123).toString()).toBe('');
  expect(rsql().re(null, null).toString()).toBe('');
  expect(rsql().re().toString()).toBe('');
});

test('group method', () => {
  expect.hasAssertions();

  expect(rsql().group('a=1 and b=2').toString()).toBe('(a=1 and b=2)');
  expect(rsql().group(null).toString()).toBe('');
  expect(rsql().group().toString()).toBe('');

  expect(
    rsql()
      .eq('a', 1)
      .re('b', 'wer')
      .group(
        rsql()
          .eq('c', 2)
          .or()
          .eq('d', 5)
      )
      .toString()
  )
    .toBe('a==1 and b=re=wer and (c==2 or d==5)');
});

test('default union by AND', () => {
  expect.hasAssertions();

  expect(
    rsql()
      .notEq('a', 1)
      .eq('b', 2)
      .eq('c', 6)
      .toString()
  ).toBe('a!=1 and b==2 and c==6');
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
