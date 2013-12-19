/**
 * Load Subject
 */
eval(require('fs').readFileSync('./src/Utils.js', 'utf8'));
eval(require('fs').readFileSync('./src/RandomColor.js', 'utf8'));

/**
 * Test suite for RandomColor in isolation
 */
describe("RandomColor", function() {

    var samplePalette = ['#f00', '#ff0', '#fff'],
        subject;

    beforeEach(function() {
        subject = new RandomColor(samplePalette);
    });

    afterEach(function() {
        subject = null;
    });

    /**
     * @covers Constructor, setPalette
     */
    it("will be initialized with a given palette", function() {
        expect(subject._lastColor).toBe(false);
        expect(subject._delivered).toEqual([]);
        expect(subject._palette).toEqual(samplePalette);
    });

    /**
     * @covers getColor, _updateDeliveredColor
     */
    it("will return different color on each call", function() {
        var color1 = subject.getColor(),
            color2 = subject.getColor(),
            color3 = subject.getColor();

        expect(color2).not.toEqual(color1);
        expect(color3).not.toEqual(color2);
    });

    /**
     * @covers getStats, _updateDeliveredColor
     */
    it("will store the stats", function() {
        var color1  = subject.getColor(),
            color2  = subject.getColor();

        var expected = {};
        expected[color1] = 1;
        expected[color2] = 1;

        expect(subject.getStats()).toEqual(expected);

    });

});
