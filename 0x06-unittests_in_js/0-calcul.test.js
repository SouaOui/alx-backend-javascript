import { expect } from 'chai';
import calculateNumber from './0-calcul.js';

describe('calculateNumber', () => {
  it('should add two floating point whole numbers correctly', () => {
    expect(calculateNumber(1.0, 2.0)).to.equal(3);
  });

  it('should round down the second floating point fractional number', () => {
    expect(calculateNumber(1.0, 2.4)).to.equal(3);
  });

  it('should round down both floating point fractional numbers', () => {
    expect(calculateNumber(1.4, 2.4)).to.equal(3);
  });

  it('should round down the first floating point fractional number', () => {
    expect(calculateNumber(1.4, 2.0)).to.equal(3);
  });

  it('should round up the second floating point fractional number', () => {
    expect(calculateNumber(1.0, 2.5)).to.equal(4);
  });

  it('should round up both floating point fractional numbers', () => {
    expect(calculateNumber(2.6, 2.5)).to.equal(6);
  });

  it('should round up the first floating point fractional number', () => {
    expect(calculateNumber(2.6, 2.0)).to.equal(5);
  });

  it('should round down both floating point fractional numbers with trailing 9s', () => {
    expect(calculateNumber(2.499999, 3.499999)).to.equal(5);
  });
});
