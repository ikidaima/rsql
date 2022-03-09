## @ubic/rsql

util to generate rsql or fiql query string 

## Installation

```
npm i --save rsql

or

yarn add @ubic/rsql
```

## initiation

```
import rsql from '@ubic/rsql'

rsql.setFormat(vallue) // value one of 'rsql' or 'fiql', default 'rsql'
rsql.extendOperator(name, operator) - extends existing operators
rsql.extendMethod(name, func) - method for adding extended functionality to the "rsql" utility
```

## Available methods

```
eq(key, value) -> key==value
notEq(key, value) -> key!=value
lt(key, value) -> rsql: key<value, fiql: key=lt=value
le(key, value) -> rsql: key<=value, fiql: key=le=value
gt(key, value) -> rsql: key>value, fiql: key=gt=value
ge(key, value) -> rsql: key>=value, fiql: key=ge=value
in(key, arr) -> key=in=(arr join by ',')
out(key, arr) -> key=out=(arr join by ',')
exists(key) -> key=ex=true
notExists(key) -> key=ex=false
re(key, value) -> key=re=value
group(value) -> (value)
and() -> rsql: ' and ', fiql: ';'
or() -> rsql: ' or ', fiql: ','
and(value) -> rsql: ' and (value)', fiql: ';(value)'
or(value) -> rsql: ' or (value)', fiql: ',(value)'
```

## Examples

```
rsql()
  .eq('a', 3)
  .notEq('b', 5)
  .toString() // -> a==3 and b!=5, method toString() can not be called if there is an explicit cast to a string

rsql()
  .eq('c', 'qwerty')
  .or()
  .notEq('b', 5)
  .or(
    rsql()
      .re('fd', 'wer')
      .eq('z', 8)
  )
  .toString() // -> c==qwerty or b!=5 or (fd=re=wer and z==8),
```

