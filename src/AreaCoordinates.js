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
        this.coords = {
            x: x,
            y: y,
            w: w,
            h: h
        };
    }

    /**
     * Get the all four coordinate values.
     *
     * @return {object}
     */
    AreaCoordinates.prototype.getCoordinates = function() {
        return this.coords;
    };

    /**
     * Override all four coordinates.
     *
     * @param {object} coords   object containing x,y,w,h values.
     */
    AreaCoordinates.prototype.setCoordinates = function(coords) {
        this.coords = coords;
    };

    /**
     * @return {int}    X Coordinate component
     */
    AreaCoordinates.prototype.getX = function() {
        return _getCoordinateValue('x', this.coords);
    };

    /**
     * @return {int}    Y Coordinate component
     */
    AreaCoordinates.prototype.getY = function() {
        return _getCoordinateValue('y', this.coords);
    };

    /**
     * @return {int}    Width component
     */
    AreaCoordinates.prototype.getWidth = function() {
        return _getCoordinateValue('w', this.coords);
    };

    /**
     * @return {int}    Height component
     */
    AreaCoordinates.prototype.getHeight = function() {
        return _getCoordinateValue('h', this.coords);
    };

    /**
     * Retrieve a v
     * @param  {[type]} key    [description]
     * @param  {[type]} coords [description]
     * @return {[type]}        [description]
     */
    _getCoordinateValue = function(key, coords) {
        if (!coords.hasOwnProperty(key)) {
            return false;
        }

        if (!Utils.isNumber(coords[key])) {
            return false;
        }

        return coords[key];
    };

    return AreaCoordinates;

})();
