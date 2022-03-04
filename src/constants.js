export const FORMATS = {
  fiql: 'fiql',
  rsql: 'rsql',
};

export const LOGIC_OPERATORS = ['and', 'or', ';', ','];

export const OPERATORS = {
  and: {
    [FORMATS.rsql]: ' and ',
    [FORMATS.fiql]: ';',
  },
  or: {
    [FORMATS.rsql]: ' or ',
    [FORMATS.fiql]: ',',
  },
  gt: {
    [FORMATS.rsql]: '>',
    [FORMATS.fiql]: '=gt=',
  },
  ge: {
    [FORMATS.rsql]: '>=',
    [FORMATS.fiql]: '=ge=',
  },
  lt: {
    [FORMATS.rsql]: '<',
    [FORMATS.fiql]: '=lt=',
  },
  le: {
    [FORMATS.rsql]: '<=',
    [FORMATS.fiql]: '=le=',
  },
};
