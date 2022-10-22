const stringMasLarga = require('../02.js');
const { describe, expect, it } = require('@jest/globals')

describe('stringMasLarga', function () {
  it('should return "guten tag"', function () {
    expect(stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag'])).toBe('guten tag');
  });
  it('should return "JavaScript"', function () {
    expect(stringMasLarga(['JavaScript', 'HTML', 'CSS'])).toBe('JavaScript');
  });
});