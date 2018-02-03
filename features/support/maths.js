const add = require('../../src/add');

const {Given, Then, When} = require('cucumber');
const assert = require('assert');

Given('I start with {int}', function (input) {
  this.input = input;
});

When('I add {int}', function (input) {
  this.output = add(this.input, input);
});

Then('I end up with {int}', function (input) {
  assert.equal(this.output, input);
});
