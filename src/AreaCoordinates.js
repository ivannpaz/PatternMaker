/**
 * Represents an Area coordinates
 *
 * @return {object}
 */
var AreaCoordinates = (function() {

    /**
     * Class Constructor.
     *
     */
    function AreaCoordinates(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    /**
     *
     */
    AreaCoordinates.prototype.getAll = function() {
        return [this.x, this.y, this.w, this.h];
    };

    return AreaCoordinates;

})();
