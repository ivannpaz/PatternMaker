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
        subject.should.have.property('_lastColor', false);
        subject.should.have.property('_palette', samplePalette);
        subject.should.have.property('_delivered').and.eql({});
    });

    /**
     * @covers getColor, _updateDeliveredColor
     */
    it("will return different color on each call", function() {
        var color1 = subject.getColor(),
            color2 = subject.getColor(),
            color3 = subject.getColor();

        color2.should.not.eql(color1);
        color3.should.not.eql(color2);
    });

    /**
     * @covers getStats, _updateDeliveredColor
     */
    it("will store the stats", function() {
        var color1  = subject.getColor(),
            color2  = subject.getColor(),
            expected = {};

        expected[color1] = 1;
        expected[color2] = 1;

        subject.getStats().should.eql(expected);
    });

});
