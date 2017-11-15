/* eslint-env node, es6, mocha */
const assert = require("assert");
let testData = {
  indexes: [
    {
      type: "ind1",
      data: [
        "hello",
        "world"
      ]
    },
    {
      type: "ind2",
      data: [
        "foo",
        "bar"
      ]
    },
    {
      type: "ind3",
      data: [
        "tic",
        "tac",
        "toe"
      ]
    }
  ],
  data: [
    542,
    435,
    676,
    4324,
    234,
    23,
    445,
    7908,
    2348,
    34,
    807,
    689
  ]
};
let data = require("../src/censusData")(testData);
describe("The census_data module", function() {
  it("should provide access to the data used in the constructor", function() {
    assert(data.getData(), testData);
  });
});

describe("Sending an array to the getDataPoint function", function() {
  describe("Valid array of indexes", function() {
    it("should return the right value for the indexes", function() {
      assert.equal(data.getDataPoint(["hello", "bar", "tac"]), 234);
    });
  });

  describe("Array with invalid index", function() {
    it("should return nothing", function() {
      assert.equal(data.getDataPoint(["hello", "bar2", "tac"]), null);
    });
  });
});

describe("Sending an object to the getDataPoint function", function() {
  describe("Object with all the index properties", function() {
    it("should return the right value for the indexes", function() {
      assert.equal(data.getDataPoint({
        ind2: "bar",
        ind1: "hello",
        ind3: "tac"
      }), 234);
    });
  });

  describe("Object with an index missing", function() {
    it("should return nothing", function() {
      assert.equal(data.getDataPoint({
        ind2: "bar",
        ind1: "hello"
      }), null);
    });
  });

  describe("Object with an invalid index", function() {
    it("should return nothing", function() {
      assert.equal(data.getDataPoint({
        ind2: "bar2",
        ind1: "hello",
        ind3: "tac"
      }), null);
    });
  });
});
