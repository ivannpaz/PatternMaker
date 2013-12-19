/**
 * Load Subject
 */
eval(require('fs').readFileSync('./src/Utils.js', 'utf8'));
eval(require('fs').readFileSync('./src/AreaCoordinates.js', 'utf8'));

/**
 * Test suite for RandomColor in isolation
 */
describe("AreaCoordinates", function() {

    var x  = 20,
        y  = 20,
        w   = 600,
        h  = 400,
        subject;

    beforeEach(function() {
        subject = new AreaCoordinates(x, y, w, h);
    });

    afterEach(function() {
        subject = null;
    });

    /**
     * @covers
     */
    it("will be initialized with all four parameters", function() {
        subject.getCoordinates().should.eql({
            x: x,
            y: y,
            w: w,
            h: h
        });
    });

    /**
     * @covers
     */
    it("will return correct values in the getters", function() {
        subject.getX().should.eql(x);
        subject.getY().should.eql(y);
        subject.getWidth().should.eql(w);
        subject.getHeight().should.eql(h);
    });

    /**
     * @covers
     */
    it("will return false for incorrect values in the coordinates", function() {
        subject.setCoordinates({
            x: 'not all',
            w: 'included'
        });

        subject.getX().should.eql(false);
        subject.getHeight().should.eql(false);
    });

});
