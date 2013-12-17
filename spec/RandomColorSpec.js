/**
 * Load Subject
 */
eval(require('fs').readFileSync('./src/RandomColor.js', 'utf8'));

/**
 * Test suite
 */
describe("RandomColor", function() {

    it("should exist", function() {
        var classy = new RandomColor(['whatevs']);
    });

});
