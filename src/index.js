import {
  FORMATS,
  LOGIC_OPERATORS,
  OPERATORS,
} from './constants';

const validateValue = (...args) => args.every((item) => !!item || item === 0);

class Rsql {
  constructor(initState) {
    this._state = initState || '';
  }

  get state() {
    return this._state;
  }

  set state(value) {
    if (!value) {
      return;
    }

    const hasStateLastLogicOperator = new RegExp(
      `(${LOGIC_OPERATORS.join('|')})\\s*$`
    ).test(this.state);
    const hasValueStartLogicOperator = new RegExp(
      `^\\s*(${LOGIC_OPERATORS.join('|')})`
    ).test(value);

    if (!this._state) {
      this._state = value;
      return;
    }

    if (hasValueStartLogicOperator) {
      if (hasStateLastLogicOperator) {
        return;
      }

      this._state += value;
      return;
    }

    if (hasStateLastLogicOperator) {
      this._state += value;
      return;
    }

    this._state += `${OPERATORS.and[this._format]}${value}`;
  }

  [Symbol.toPrimitive]() {
    return this.state.trim();
  }

  toString() {
    return this.state.trim();
  }

  and(value) {
    if (value) {
      this.state = `${OPERATORS.and[this._format]}(${value})`;
    } else {
      this.state = `${OPERATORS.and[this._format]}`;
    }

    return this;
  }

  or(value) {
    if (value) {
      this.state = `${OPERATORS.or[this._format]}(${value})`;
    } else {
      this.state = `${OPERATORS.or[this._format]}`;
    }

    return this;
  }

  eq(key, value) {
    this.state = validateValue(key, value) ? `${key}==${value}` : null;

    return this;
  }

  notEq(key, value) {
    this.state = validateValue(key, value) ? `${key}!=${value}` : null;

    return this;
  }
}

Rsql.prototype._format = FORMATS.rsql;

const rsql = function(initState) {
  return new Rsql(initState);
};

rsql.setFormat = (value) => {
  if (!FORMATS[value]) {
    return;
  }

  Rsql.prototype._format = value;
};
rsql.extendOperator = (name, operator) => {
  Rsql.prototype[name] = function(key, value) {
    this.state = (key && value) ? `${key}${operator}${value}` : null;

    return this;
  };
};

export default rsql;
