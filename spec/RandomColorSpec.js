eval(require('fs').readFileSync('./src/RandomColor.js', 'utf8'));

describe("RandomColor", function() {

  it("should exist", function() {
    var classy = new RandomColor([1, 2, 3, 4]);
  });

});
