export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getters
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // Setters
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._code = newCode;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
